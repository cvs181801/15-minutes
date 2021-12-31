const express = require('express')
const app = express()
const path = require('path')
const port = 3001

app.use('/', express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/api/showcasedata', (req, res) => {
    res.send(showcaseData)
  })

app.listen(port, () => {
  console.log(`Example app listening at hhttps://runkit.com/embed/savettp://localhost:${port}`)
})

const showcaseData = [
    {
        username: "Oprah",
        text: "lorem ipsum ;olijalekdijacns isu,danfl;djlnfiv udjlsacisjd!!!",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 4996832,
        favoritedCount: 1759373
    },
    {
        username: "Keanu",
        text: "lorem ipsumk fhdajkhlskd akljfdhakdkal hfdhjdahl afw df l",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 6994732,
        favoritedCount: 32407 
    },
    {
        username: "Reese",
        text: "lorem ipsum ,dsakuhsdfnsiwulacwkervhfnl gfds!",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 2585532,
        favoritedCount: 65303
    },
    {
        username: "Ashton",
        text: "lorem ipsu fkdailjsdaijlfn di,a nhlfaki,dsnuanlfkiudjkaslvfds",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 229484,
        favoritedCount: 33345
    },
    {
        username: "Beyonce",
        text: "lorem ipsggoerisuliknavjfscdfvfavdvfdvdd s",
        image: '#',
        video: '#',
        gif: '#',
        retweetCount: 598092,
        favoritedCount: 948274
    }
]
