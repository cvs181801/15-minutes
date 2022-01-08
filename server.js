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
    'api_key': 'YSZPSjwpaIr6AkRCBiLWsmnpv',
    'token': 'Bearer AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAA4lWlxqPUmC35m5sG1vTHRvo3Xa0%3DwOFnfodHB9uC67q5zL2IiEUdvHxbo81o09D46d5bZHQYcwqAWN'
}

app.get('/api/searchdata', (req, res) => {
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=oprah&result_type=popular&count=10`, {headers})
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

// const showcaseData = [
//     {
//         username: "Oprahserver",
//         text: "lorem ipsum ;olijalekdijacns isu,danfl;djlnfiv udjlsacisjd!!!",
//         image: '#',
//         video: '#',
//         gif: '#',
//         retweetCount: 4996832,
//         favoritedCount: 1759373
//     },
//     {
//         username: "Gagaserver",
//         text: "lorem ipsumk fhdajkhlskd akljfdhakdkal hfdhjdahl afw df l",
//         image: '#',
//         video: '#',
//         gif: '#',
//         retweetCount: 6994732,
//         favoritedCount: 32407 
//     },
//     {
//         username: "Reeseserver",
//         text: "lorem ipsum ,dsakuhsdfnsiwulacwkervhfnl gfds!",
//         image: '#',
//         video: '#',
//         gif: '#',
//         retweetCount: 2585532,
//         favoritedCount: 65303
//     },
//     {
//         username: "Ashtonserver",
//         text: "lorem ipsu fkdailjsdaijlfn di,a nhlfaki,dsnuanlfkiudjkaslvfds",
//         image: '#',
//         video: '#',
//         gif: '#',
//         retweetCount: 229484,
//         favoritedCount: 33345
//     },
//     {
//         username: "Beyonceserver",
//         text: "lorem ipsggoerisuliknavjfscdfvfavdvfdvdd s",
//         image: '#',
//         video: '#',
//         gif: '#',
//         retweetCount: 598092,
//         favoritedCount: 948274
//     }
// ]
