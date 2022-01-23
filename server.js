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
        return newArray
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
        console.log(newArray)
        return newArray
    }    


function cutOutUrl(string) {
    var URL = string.match(urlRegex)
    return string.replace(urlRegex, '')
}

//

// class Tweet {
//     constructor(tweet) {
//         this.username = tweet.username,
//         this.text = tweet.text
//     }
// }

// tweets.map(tweet => {
//     return new Tweet(tweet)
// })

//


//bug when setting state ???
// dateString: "1.17.2022 at 10:26am"
// id: "19397785"
// like_count: 0
// name: "Oprah Winfrey"
// profile_image_url: "https://pbs.twimg.com/profile_images/1123359369570148353/Mh-Rf4Sk_normal.jpg"
// retweet_count: 935
// tweetString: "RT @ava: SELMA is streaming on Apple, Hulu, YouTube and Amazon, with Peacock offering free viewing in honor of Dr. King’s holiday.\n\nVoting…"
// type: undefined  <<<< at first I thought these undefined values causing issues wheen adding them in state but upon trying to recreate the issue they didn't seem to cause issues when they were in state in showcase component
// url: undefined
// url_string: null
// username: "Oprah"
// verified: true

///*** To Do */
//create a class 
//the time stamp isn't adding a 0 to min field if there is a single digit - fix
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