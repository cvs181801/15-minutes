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




///*** To Do */
//bug - server not serving tweet data somehow?? ... once the below happens, the entire app breaks until server is refreshed. Not just the page.
//data: {
//     errors: [
//         {
//           parameters: { query: [Array] },
//           message: "There were errors processing your request: no viable alternative at character '<' (at position 1), no viable alternative at character ''' (at position 20), no viable alternative at character '/' (at position 30), mismatched character '<EOF>' expecting '=' (at position 32)"
//         }
//       ],
//       title: 'Invalid Request',
//       detail: 'One or more parameters to your request was invalid.',
//       type: 'https://api.twitter.com/2/problems/invalid-request'
//     }
//   },
//   isAxiosError: true,
//   toJSON: [Function: toJSON]
//need a way to render a message re this issue in client. press a button to try again/refresh page ?


//add DOM purify ?
//litte bit of testing,
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