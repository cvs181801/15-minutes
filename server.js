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
    const response = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at&expansions=attachments.media_keys&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers}) //`https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=popular&count=10`
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function(error) {
            res.send(error)
         })
    }) 
    
app.get('/api/searchByUser', async (req, res) => {
    const {search} = req.query;
    console.log(search)
    const response = await axios.get(`https://api.twitter.com/2/users/${search}/tweets`, {headers})
        .then(function (response) {
            res.send(response.data)
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
            res.send(response.data)
        })
        .catch(function(error) {
            res.send(error)
        })
    })    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


