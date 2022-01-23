const express = require('express')
const axios = require('axios')
const { DateTime } = require("luxon")
const app = express()
const path = require('path')
const port = 3001

app.use('/', express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const headers = {
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAADR8XgEAAAAATyPleVonva9OPPeVm9Yl4x4gP6U%3DOC2OrGQ7rPMf8QD6qwjhFw1XpYZrpQwt27ohaiMVwLJ8VfVBeg'
}

function getAllByContent() {
    app.get('/api/searchdata', async (req, res) => {
        const {search} = req.query;
        console.log(search)
        //const search = 'vaporwave'
        const response1 = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers}) 
        const response2 = await axios.get(`https://api.twitter.com/2/users?ids=${response1.data.data[0].author_id},${response1.data.data[1].author_id},${response1.data.data[2].author_id},${response1.data.data[3].author_id},${response1.data.data[4].author_id},${response1.data.data[5].author_id},${response1.data.data[6].author_id},${response1.data.data[7].author_id},${response1.data.data[8].author_id},${response1.data.data[9].author_id}&expansions=pinned_tweet_id&user.fields=profile_image_url,verified`, {headers}) 
        console.log('looped By Content :', massageTwitterData(response1.data.data, response1.data.includes.media, response2.data.data))
        res.send(massageTwitterData(response1.data.data, response1.data.includes.media, response2.data.data))
        return response1, response2
    })
}

getAllByContent()

function getAllByUser() {
    app.get('/api/searchByUser', async (req, res) => {
    const {search} = req.query;
    console.log(search)
    //const search = '31239408'
    const response1 = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
    const response2 = await axios.get(`https://api.twitter.com/2/users/${search}?expansions=pinned_tweet_id&user.fields=profile_image_url,verified`, {headers}) 
        console.log(massageTwitterUserData(response1.data.data, response1.data.includes.media, response2.data.data))
        res.send(massageTwitterUserData(response1.data.data, response1.data.includes.media, response2.data.data))
        return response1, response2
    })
}  

getAllByUser()

app.get('/api/searchByUsername', async (req, res) => {
    const {search} = req.query;
        console.log(search)
        const response = await axios.get(`https://api.twitter.com/2/users/by?usernames=${search}`, {headers})
        .then(function (response) {
            console.log(response.data.errors)  
            if(response.data.errors){
                console.log('error!')
                res.send(error)
            } else {
                console.log('no err')
                res.send(response.data)
            }
        })
        .catch(function(error) {
            res.send(error)
        })
    })    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var urlRegex = /(https?:\/\/[^\s]+)/g;

function massageTwitterUserData(tweetsArr, mediaArr, userObject) {
    newArray = [];
    tweetsArr.forEach(tweet=> {
        var userObj = Object.assign(tweet, userObject)
        tweet.dateString = DateTime.fromISO(tweet.created_at).toLocaleString(DateTime.DATETIME_MED) 
        tweet.tweetString= cutOutUrl(tweet.text)
        tweet.url_string = tweet.text.match(urlRegex)

       if (Object.keys(tweet).includes('attachments')) {
            for (let i=0; i < mediaArr.length; i++) {
                    if (tweet.attachments.media_keys[0]=== mediaArr[i].media_key) {
                    var mergedObj = Object.assign(tweet, mediaArr[i])
                    newArray.push(mergedObj)
                }
            } 
        } else {
            newArray.push(tweet)
            }
        })
        const newTweetsArray = newArray.map(tweet => {
            return new Tweet(tweet)
        })
        console.log(newTweetsArray)
        return newTweetsArray
}

function massageTwitterData(tweetsArr, mediaArr, userArr) {
    newArray = [];
    tweetsArr.forEach((tweet,index)=> {
        tweet.dateString = DateTime.fromISO(tweet.created_at).toLocaleString(DateTime.DATETIME_MED) 
        var userObj = Object.assign(tweet, userArr[index])
        tweet.tweetString= cutOutUrl(tweet.text)
        tweet.url_string = tweet.text.match(urlRegex)
        
        if (Object.keys(tweet).includes('attachments')) {
            for (let i=0; i < mediaArr.length; i++) {
                if (tweet.attachments.media_keys[0]=== mediaArr[i].media_key) {
                    var mergedObj = Object.assign(tweet, mediaArr[i])
                    newArray.push(mergedObj)
                }
            } 
                } else {
                    newArray.push(tweet)
                }
    })
        //console.log(newArray)
        const newTweetsArray = newArray.map(tweet => {
            return new Tweet(tweet)
        })
        console.log(newTweetsArray)
        return newTweetsArray
    }    


function cutOutUrl(string) {
    var URL = string.match(urlRegex)
    return string.replace(urlRegex, '')
}

// test array

const testArray = [
{
    public_metrics: {
        retweet_count: 5,
        reply_count: 58,
        like_count: 1235,
        quote_count: 16
        },
    id: 1235,
    text: 'Happy New Year everybody! I know a lot of people feel like this holiday is a time to “reset” and set goals. What if we also just kept going and brought our history with us? What if we honored that we work hard all the time to be brave and our goal was just to keep that courage ❤️',
    author_id: '14230524',
    created_at: '2022-01-01T19:53:09.000Z',
    pinned_tweet_id: '1443788597103005734',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1422589226122584065/gdG2mkcY_normal.jpg',
    verified: true,
    username: 'ladygaga',
    name: 'Lady Gaga',
    dateString: 'Jan 1, 2022, 11:53 AM',
    tweetString: 'Happy New Year everybody! I know a lot of people feel like this holiday is a time to “reset” and set goals. What if we also just kept going and brought our history with us? What if we honored that we work hard all the time to be brave and our goal was just to keep that courage ❤️',
    url_string: null,
        
  },
  {
    public_metrics: {
      retweet_count: 1262,
      reply_count: 559,
      like_count: 15501,
      quote_count: 126
    },
    id: '14230524',
    text: 'Last chance to shop the @hauslabs end-of-year sale with promo code BYE2021 💕 https://t.co/16HKLF1qsu https://t.co/E5UHLEaBIa',
    author_id: '14230524',
    created_at: '2021-12-29T17:01:02.000Z',
    attachments: { media_keys: [Array] },
    pinned_tweet_id: '1443788597103005734',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1422589226122584065/gdG2mkcY_normal.jpg',
    verified: true,
    username: 'ladygaga',
    name: 'Lady Gaga',
    dateString: 'Dec 29, 2021, 9:01 AM',
    tweetString: 'Last chance to shop the @hauslabs end-of-year sale with promo code BYE2021 💕  ',
    url_string: [ 'https://t.co/16HKLF1qsu', 'https://t.co/E5UHLEaBIa' ],
    media_key: '3_1476236828676026368',
    type: 'photo',
    url: 'https://pbs.twimg.com/media/FHylkwGVcAAQTY_.jpg'
  },
  {
    public_metrics: {
      retweet_count: 1332,
      reply_count: 582,
      like_count: 15595,
      quote_count: 132
    },
    id: '14230524',
    text: 'The @hauslabs end-of-year sale is happening now! Use promo code BYE2021 on my favorites like the gel pencil eyeliner 💕 https://t.co/16HKLF1qsu https://t.co/MbH0yHfkeX',
    author_id: '14230524',
    created_at: '2021-12-27T17:04:56.000Z',
    attachments: { media_keys: [Array] },
    pinned_tweet_id: '1443788597103005734',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1422589226122584065/gdG2mkcY_normal.jpg',
    verified: true,
    username: 'ladygaga',
    name: 'Lady Gaga',
    dateString: 'Dec 27, 2021, 9:04 AM',
    tweetString: 'The @hauslabs end-of-year sale is happening now! Use promo code BYE2021 on my favorites like the gel pencil eyeliner 💕  ',
    url_string: [ 'https://t.co/16HKLF1qsu', 'https://t.co/MbH0yHfkeX' ],
    media_key: '3_1475513035041112078',
    type: 'photo',
    url: 'https://pbs.twimg.com/media/FHoTSasVgA42hdb.jpg'
  }
]

class Tweet {
    constructor(tweet) {
        this.username = tweet.username,
        this.tweetString = tweet.tweetString,
        this.id= tweet.id,
        this.dateString= tweet.dateString,
        this.name= tweet.name,
        this.username= tweet.username,
        this.verified= tweet.verified,
        this.profile_image_url= tweet.profile_image_url,
        this.url= tweet.url,
        this.type= tweet.type,
        this.like_count= tweet.public_metrics.like_count,
        this.retweet_count= tweet.public_metrics.retweet_count,
        this.url_string= tweet.url_string
    }
}

// const newTestArray = testArray.map(tweet => {
//      return new Tweet(tweet)
// })

//console.log('newTestArray:' , newTestArray)

//


//bug - server not serving tweet data somehow??
///*** To Do */
//create a class 
//Move styles into a class in index.css. also using chrome dev tools to insert styling while troubleshooting.
//litte bit of testing,
//refactor.review prev code review. use the class constructor in server to construct tweet objects ? ? 
//blog - fix and deploy.
//write up in github!
//deploy
//add to website!
//submit for review

//wishlist:
//some nicer icons from twitter
//a better user search interface. first , search for users , then add an option to press a button to view their tweets. GET users/search
//in showcase page: a way to only pull one random tweet from the api rather than pulling 10 and picking a random one?
//in search page: a way to have the server search by username, then simply return the 10 tweets if username is found (rather than having the client query again)