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
    //let search = 31239408
    console.log(search)
    const response = await axios.get(`https://api.twitter.com/2/users/${search}/tweets?tweet.fields=created_at&expansions=attachments.media_keys&media.fields=media_key,type,preview_image_url,url,alt_text`, {headers})
        .then(function (response) {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//This is a test//
const test = [
    {
        attachments: {media_keys: ["3_1481251904390840320"]}, 
        text: "RT @beyonceparkwood: it’s beyoncé jumping off a 10+ meter yacht for me… https://t.co/YVrhkFM704", 
        id: '1481719877513609219', 
        created_at: '2022-01-13T20:08:42.000Z'
    },
    {
        attachments: {media_keys: ['3_1481707029328805890']},
        created_at: "2022-01-13T20:08:41.000Z",
        id: "1481719874527367171",
        text: "RT @2000sphase: Beyoncé &amp; Lucy Liu, 2004 https://t.co/o0W0YHQ0sI"
    },
    {
        created_at: "2022-01-13T20:08:34.000Z",
        id: "1481719845649788929",
        text: "RT @yashmistry_11: Let me rephrase the song.\n\nWho runs the #biggboss #bb15 @itsmetejasswi \n\n#TejasswiPrakash #BBQueenTejasswi \n#TejaTroops…"
    },
    {
        created_at: "2022-01-13T20:08:34.000Z",
        id: "1481719845376995330",
        text: "Beyoncé está tão quieta,tão sumida 🤔😞😞"
    },
    {
        created_at: "2022-01-13T20:08:33.000Z",
        id: "1481719839626784769",
        text: "@TBHITS @Beyonce I wish you follower me @TBHITS"
    },
    {
        created_at: "2022-01-13T20:08:32.000Z",
        id: "1481719836539555845",
        text: "RT @mileycstats: .@MileyCyrus was the 21st most-streamed female artist on Spotify on January 10, surpassing Ava Max, Beyoncé and Maiara &amp; M…"
    },
    {
        created_at: "2022-01-13T20:08:27.000Z",
        id: "1481719816100757505",
        text: "@B7Album I love Beyoncé and they are setting her up with this article"
    },
    {
        created_at: "2022-01-13T20:08:27.000Z",
        id: "1481719815077253126",
        text: "RT @DAIIREMS: hey, i’m new to stan twitter! i stan ariana grande and beyoncé. can you please re-tweet &amp; help me find mutuals. 🥲"
    },
    {
        attachments: {media_keys: ['3_1481388900874600449']},
        created_at: "2022-01-13T20:08:26.000Z",
        id: "1481719811872808961",
        text: "RT @SupremeQueenBey: Blue ivy is angry with her employee Beyoncé for taking too long to release the B7 album😁 https://t.co/JaSBBIqig5"
    },
    {
        created_at: "2022-01-13T20:08:23.000Z",
        id: "1481719799474528262",
        text: "RT @deIfiwithespos: lali se lanzó como solista cuando el pop ni existía en argentina, nadie escuchaba pop si no era madonna o beyonce y ust…"
    }
]


const testMedia = [
    { 
        attachments:
            [
                {type: 'photo', media_key: '3_1481251904390840320', url: 'https://pbs.twimg.com/media/FI52wlAWQAASIkC.jpg'},
                {type: 'photo', media_key: '3_1481707029328805890', url: 'https://pbs.twimg.com/media/FJAUsVhXwAICHOp.jpg'},
                {type: 'photo', media_key: '3_1481388900874600449', url: 'https://pbs.twimg.com/media/FI7zW0rWQAEvMZD.jpg'}
            ]
    }
]

const mediaArray = testMedia[0].attachments
console.log('mediaArray :', mediaArray)
const newArray = []

app.get('/testData', (req, res) => {
    
    // test.forEach(object => {
    //     if( Object.keys(object).includes('attachments') ) {
    //         for (let i=0; i< mediaArray.length; i++) {
    //             console.log('testarray media key : ', object.attachments.media_keys[i])
    //             console.log('media array media key :', mediaArray[i].media_key)
    //             if (object.attachments.media_keys === mediaArray[i].media_key) {
    //                 newArray.push(Object.assign(object, mediaArray[i]))
    //             } else {
    //                 newArray.push(object)
    //             }
    //             console.log('newarray :', newArray)
    //         }
    //     }

    // })
    
    // let mediaArray = testMedia[0].attachments
    // console.log('mediaArray :', mediaArray)
    // console.log(test[0].attachments.media_keys[0])
    res.send(loop(test, mediaArray))
})


//

function loop(array1, array2) {
    array1.forEach(object=> {
        
       if (Object.keys(object).includes('attachments')) {
            for (let i=0; i < array2.length; i++) {
                //console.log( 'compare :', object.attachments.media_keys[0]=== array2[i].media_key)
                    if (object.attachments.media_keys[0]=== array2[i].media_key) {
                    var mergedObj = Object.assign(object, array2[i])
                    newArray.push(mergedObj)
                }
            } 
        } else {
            newArray.push(object)
            }
        })
        //console.log('newarray :', newArray) 
        return newArray
    }


