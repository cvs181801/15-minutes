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
        console.log('looped By Content :', loopByContent(response1.data.data, response1.data.includes.media, response2.data.data))
        res.send(loopByContent(response1.data.data, response1.data.includes.media, response2.data.data))
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
    
        res.send(loopByUser(response1.data.data, response1.data.includes.media, response2.data.data))
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

function loopByUser(array1, array2, object1) {
    newArray = [];
    array1.forEach(object=> {
        var userObj = Object.assign(object, object1)
        var dateObj = DateTime.fromISO(object.created_at)
        parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
        object.dateString = parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
        object.tweetString= cutOutUrl(object.text)
        object.url_string = object.text.match(urlRegex)
        console.log('tweetstring :', object.tweetString, 'url_string :', object.url_string)

       if (Object.keys(object).includes('attachments')) {
            for (let i=0; i < array2.length; i++) {
                    if (object.attachments.media_keys[0]=== array2[i].media_key) {
                    var mergedObj = Object.assign(object, array2[i])
                    newArray.push(mergedObj)
                }
            } 
        } else {
            newArray.push(object)
            }
        })
        return newArray
    }

function loopByContent(array1, array2, array3) {
    newArray = [];
    array1.forEach((object,index)=> {
    var dateObj = DateTime.fromISO(object.created_at)
    parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
    object.dateString = parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
    var userObj = Object.assign(object, array3[index])
    object.tweetString= cutOutUrl(object.text)
    object.url_string = object.text.match(urlRegex)
    console.log('tweetstring :', object.tweetString, 'url_string :', object.url_string)
    
        if (Object.keys(object).includes('attachments')) {
            for (let i=0; i < array2.length; i++) {
                if (object.attachments.media_keys[0]=== array2[i].media_key) {
                var mergedObj = Object.assign(object, array2[i])
                newArray.push(mergedObj)
            }
        } 
            } else {
                newArray.push(object)
            }
        })
        console.log(newArray)
        return newArray
    }    

function parseTimestamp(month, day, year, hour, minute) {
    if(hour >=13){
        return `${month}.${day}.${year} at ${hour-12}:${minute}pm`
    } else {
        return `${month}.${day}.${year} at ${hour}:${minute}am`
    }
}  

function cutOutUrl(string) {
    var URL = string.match(urlRegex)
    return string.replace(urlRegex, '')
}



//full text of tweet

//wishlist:
//some nicer icons from twitter
//a better user search interface. first , search for users , then add an option to press a button to view their tweets. GET users/search
//in showcase page: a way to only pull one random tweet from the api rather than pulling 10 and picking a random one?
//in search page: a way to have the server search by username, then simply return the 10 tweets if username is found (rather than having the client query again)