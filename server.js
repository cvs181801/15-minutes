const express = require('express')
const axios = require('axios')
const { DateTime } = require("luxon")
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

require('dotenv').config()

const headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`
}

function getAllByContent() {
    app.get('/api/searchdata', async (req, res) => {
        const {search} = req.query;
        const response1 = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers}) 
        const response2 = await axios.get(`https://api.twitter.com/2/users?ids=${response1.data.data[0].author_id},${response1.data.data[1].author_id},${response1.data.data[2].author_id},${response1.data.data[3].author_id},${response1.data.data[4].author_id},${response1.data.data[5].author_id},${response1.data.data[6].author_id},${response1.data.data[7].author_id},${response1.data.data[8].author_id},${response1.data.data[9].author_id}&expansions=pinned_tweet_id&user.fields=profile_image_url,verified`, {headers}) 
        res.send(massageTwitterData(response1.data.data, response1.data.includes.media, response2.data.data))
        return response1, response2
    })
}

getAllByContent()

function getAllByUser() {
    app.get('/api/searchByUser', async (req, res) => {
    const {search} = req.query;
    const response1 = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
    const response2 = await axios.get(`https://api.twitter.com/2/users/${search}?expansions=pinned_tweet_id&user.fields=profile_image_url,verified`, {headers}) 
        
   
    if(Object.keys(response1.data).includes('errors')) {
        res.send(response1.data)
     } else {
        res.send(massageTwitterUserData(response1.data.data, response1.data.includes.media, response2.data.data))
        return response1, response2
     }
    
    })
}  

getAllByUser()

app.get('/api/searchByUsername', async (req, res) => {
    const {search} = req.query;
        const response = await axios.get(`https://api.twitter.com/2/users/by?usernames=${search}`, {headers})
        .then(function (response) {
            if(response.data.errors){
                res.send(error)
            } else {
                res.send(response.data)
            }
        })
        .catch(function(error) {
            res.send(error)
        })
    })    


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

const urlRegex = /(https?:\/\/[^\s]+)/g;

function massageTwitterUserData(tweetsArr, mediaArr, userObject) {
    newArray = [];
    tweetsArr.forEach(tweet=> {
        const userObj = Object.assign(tweet, userObject)
        tweet.dateString = DateTime.fromISO(tweet.created_at).toLocaleString(DateTime.DATETIME_MED) 
        tweet.tweetString= cutOutUrl(tweet.text)
        tweet.url_string = tweet.text.match(urlRegex)

       if (Object.keys(tweet).includes('attachments')) {
            for (let i=0; i < mediaArr.length; i++) {
                    if (tweet.attachments.media_keys[0]=== mediaArr[i].media_key) {
            const mergedObj = Object.assign(tweet, mediaArr[i])
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
        return newTweetsArray
}

function massageTwitterData(tweetsArr, mediaArr, userArr) {
    newArray = [];
    tweetsArr.forEach((tweet,index)=> {
        tweet.dateString = DateTime.fromISO(tweet.created_at).toLocaleString(DateTime.DATETIME_MED) 
        const userObj = Object.assign(tweet, userArr[index])
        tweet.tweetString= cutOutUrl(tweet.text)
        tweet.url_string = tweet.text.match(urlRegex)
        
        if (Object.keys(tweet).includes('attachments')) {
            for (let i=0; i < mediaArr.length; i++) {
                if (tweet.attachments.media_keys[0]=== mediaArr[i].media_key) {
                    const mergedObj = Object.assign(tweet, mediaArr[i])
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
        return newTweetsArray
    }    


function cutOutUrl(string) {
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
