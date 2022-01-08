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
    Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAA4lWlxqPUmC35m5sG1vTHRvo3Xa0%3DwOFnfodHB9uC67q5zL2IiEUdvHxbo81o09D46d5bZHQYcwqAWN'
}

app.get('/api/searchdata', async (req, res) => {
    const {search} = req.query;
    const response = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=popular&count=10`, {headers})
        .then(function (response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(error) {
            console.log(error)
         })
    })    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


