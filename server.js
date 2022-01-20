const express = require('express')
const axios = require('axios')
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
    
app.get('/api/searchByUser', async (req, res) => {
    //const {search} = req.query;
    //console.log(search)
    const search = 1198406491
    const response = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys,author_id&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
        .then(function (response) {
            //console.log("raw array by user:" , response)
            console.log(loop(response.data.data, response.data.includes.media))
            res.send(loop(response.data.data, response.data.includes.media))
        })
        .catch(function(error) {
            res.send(error)
        })
    })

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
        var dateString = String(new Date(object.created_at))
        console.log('date :', dateString)
        var dateArr = dateString.split(' ')
        console.log(dateArr)
        //filterDate(dateArr)
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

const weekDay = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thur: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
}   

const month = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December'
}



function filterDate(array) {
    if(array[0]===Object.keys(weekDay)) {
        
    }

}

//let string = 'Sun Dec 26 2021 10:36:12 GMT-0800 (Pacific Standard Time)'
//let arr = string.split(' ')
//console.log(arr)


//users profile image
//username
//wrap link in anchor tag
//date
//a better user search interface