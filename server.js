const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')
const port = 3001

app.use('/', express.static(path.join(__dirname, "client", "build")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/api/showcasedata', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos/') 
        .then(function(response) {
            console.log(response.data)
            res.send(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
  })
  //
app.get('/api/showcasedata', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.twitter.com/1.1/search/tweets.json',
        responseType: 'json',
        apiKey: 'YSZPSjwpaIr6AkRCBiLWsmnpv',
        bearerToken: 'AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAA4lWlxqPUmC35m5sG1vTHRvo3Xa0%3DwOFnfodHB9uC67q5zL2IiEUdvHxbo81o09D46d5bZHQYcwqAWN'
    })
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
})
  //

app.listen(port, () => {
  console.log(`Example app listening at hhttps://runkit.com/embed/savettp://localhost:${port}`)
})

const showcaseData = [
    {
        username: "Oprahserver",
        text: "lorem ipsum ;olijalekdijacns isu,danfl;djlnfiv udjlsacisjd!!!",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 4996832,
        favoritedCount: 1759373
    },
    {
        username: "Gagaserver",
        text: "lorem ipsumk fhdajkhlskd akljfdhakdkal hfdhjdahl afw df l",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 6994732,
        favoritedCount: 32407 
    },
    {
        username: "Reeseserver",
        text: "lorem ipsum ,dsakuhsdfnsiwulacwkervhfnl gfds!",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 2585532,
        favoritedCount: 65303
    },
    {
        username: "Ashtonserver",
        text: "lorem ipsu fkdailjsdaijlfn di,a nhlfaki,dsnuanlfkiudjkaslvfds",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 229484,
        favoritedCount: 33345
    },
    {
        username: "Beyonceserver",
        text: "lorem ipsggoerisuliknavjfscdfvfavdvfdvdd s",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 598092,
        favoritedCount: 948274
    }
]
