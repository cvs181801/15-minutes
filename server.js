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

app.get('/api/searchdata', async (req, res) => {
    const {search} = req.query;
    console.log(search)
    //const search = 'oprah'
    const response = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers}) 
        .then(function (response) {
            //console.log("raw array by content:" , response.data)
            console.log(loop(response.data.data, response.data.includes.media))
            res.send(loop(response.data.data, response.data.includes.media))
        })
        .catch(function(error) {
            res.send(error)
         })
    }) 
    
// app.get('/api/searchByUser', async (req, res) => {
//     //const {search} = req.query;
//     //console.log(search)
//     const search = 1198406491
//     const response = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
//         .then(function (response) {
//             //console.log("raw array by user:" , response)
//             console.log(loop(response.data.data, response.data.includes.media))
//             res.send(loop(response.data.data, response.data.includes.media))
//         })
//         .catch(function(error) {
//             res.send(error)
//         })
//     })

//*** */
function getAllByUser() {
    app.get('/api/searchByUser', async (req, res) => {
    //const {search} = req.query;
    //console.log(search)
    const search = 1198406491
    const response1 = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
    const response2 = await axios.get(`https://api.twitter.com/2/users/${search}?expansions=pinned_tweet_id&user.fields=profile_image_url,verified`) ///this is from endpoint '/api/searchById'
        .then(function (response1, response2) {
            console.log("raw array by userId:" , response1, response2)
            //console.log(loop(response.data.data, response.data.includes.media))
            //res.send(loop(response.data.data, response.data.includes.media))
            res.send(response1, response2)
        })
        .catch(function(error) {
            res.send(error)
        })
    })
}  

getAllByUser()
//**** */

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

app.get('/api/searchById', async (req, res) => {
    const {search} = req.query;
    console.log(search)
    //const search = 1198406491
    const response = await axios.get(`https://api.twitter.com/2/users/${search}?expansions=pinned_tweet_id&user.fields=profile_image_url,verified`, {headers})
        .then(function (response) {
            console.log("raw array by userID:" , response.data)
            res.send(response.data)
        })
            .catch(function(error) {
            res.send(error)
        })
    })    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function loop(array1, array2) {
    newArray = [];
    array1.forEach(object=> {
        var dateObj = DateTime.fromISO(object.created_at)
        parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
        //console.log(parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute))
        object.dateString = parseTimestamp(dateObj.c.month, dateObj.c.day, dateObj.c.year, dateObj.c.hour, dateObj.c.minute)
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
        //console.log(newArray)
        return newArray
    }

function parseTimestamp(month, day, year, hour, minute) {
    if(hour >=13){
        return `${month}.${day}.${year} at ${hour-12}:${minute}pm`
    } else {
        return `${month}.${day}.${year} at ${hour}:${minute}am`
    }
}  


//users profile image
//username - need to request the 2nd resource from server side using async await!
//wrap link in anchor tag

//wishlist:
//some nicer icons from twitter
//a better user search interface. first , search for users , then add an option to press a button to view their tweets. GET users/search