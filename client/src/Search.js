import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import DOMpurify from 'dompurify'
import axios from 'axios'
import TweetCard from './TweetCard'

function cleanData(userInput) {
    return DOMpurify.sanitize(userInput)
}   

export default function Search() {

    const [searchresult, setSearchresult] = useState([])
    const [getByUserButton, setGetByUserButton] = useState(false)
    const [getByContentButton, setGetByContentButton] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [errorValueUser, setErrorValueUser] = useState(false)
    const [errorValueContent, setErrorValueContent] = useState(false)
    const [hover1, setHover1] = useState('')
    const [hover2, setHover2] = useState('')


async function searchTweets() {  
    try {
        var search = await axios.get(`/api/searchdata?search=${inputValue}`)
        return search
    }
    catch(err){
        console.log(err)
    }
}

async function searchByUsername() {
    try {
        var search = await axios.get(`/api/searchByUsername?search=${inputValue}`)
        return search
    }
    catch(err){
        console.log(err)
    }    
}

async function searchUser(id) {  
    try {
        var search = await axios.get(`/api/searchByUser?search=${id}`)
        return search
    }
    catch(err){
        console.log(err)
    }
}

function handleHoverOver1() {
   setHover1(`3px solid aqua`)
}

function handleHoverOut1() {
    setHover1(``)
}

function handleHoverOver2() {
    setHover2(`3px solid aqua`)
}
 
function handleHoverOut2() {
    setHover2(``)
}

function handleClickUser() {
        setGetByContentButton(false)
        setGetByUserButton(true)
        setErrorValueContent(false)
        }
        

function handleClickContent() {
            setGetByUserButton(false)
            setGetByContentButton(true)
            setErrorValueUser(false)
        }

useEffect(()=>{
    if(getByUserButton) {
        setSearchresult([])
        searchByUsername() 
        .then(res=>{
            if (Object.keys(res.data).length === 0) {
                setErrorValueUser(true)
            } else {
                setErrorValueUser(false)
            let usernameArray = res.data.data;
            console.log(usernameArray[0])
                    usernameArray.forEach(element=> {
                        console.log('username :', element.username)
                        searchUser(element.id)
                            .then(res=>{
                            console.log(res.data)
                            setSearchresult([
                                {
                                    id: res.data[0].id,
                                    created_at: res.data[0].created_at,
                                    text: res.data[0].text,
                                    url: res.data[0].url,
                                    type: res.data[0].type,
                                    like_count: res.data[0].public_metrics.like_count,
                                    retweet_count: res.data[0].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[1].id,
                                    created_at: res.data[1].created_at,
                                    text: res.data[1].text,
                                    url: res.data[1].url,
                                    type: res.data[1].type,
                                    like_count: res.data[1].public_metrics.like_count,
                                    retweet_count: res.data[1].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[2].id,
                                    created_at: res.data[2].created_at,
                                    text: res.data[2].text,
                                    url: res.data[2].url,
                                    type: res.data[2].type,
                                    like_count: res.data[2].public_metrics.like_count,
                                    retweet_count: res.data[2].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[3].id,
                                    created_at: res.data[3].created_at,
                                    text: res.data[3].text,
                                    url: res.data[3].url,
                                    type: res.data[3].type,
                                    like_count: res.data[3].public_metrics.like_count,
                                    retweet_count: res.data[3].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[4].id,
                                    created_at: res.data[4].created_at,
                                    text: res.data[4].text,
                                    url: res.data[4].url,
                                    type: res.data[0].type,
                                    like_count: res.data[4].public_metrics.like_count,
                                    retweet_count: res.data[4].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[5].id,
                                    created_at: res.data[5].created_at,
                                    text: res.data[5].text,
                                    url: res.data[5].url,
                                    type: res.data[5].type,
                                    like_count: res.data[5].public_metrics.like_count,
                                    retweet_count: res.data[5].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[6].id,
                                    created_at: res.data[6].created_at,
                                    text: res.data[6].text,
                                    url: res.data[6].url,
                                    type: res.data[6].type,
                                    like_count: res.data[6].public_metrics.like_count,
                                    retweet_count: res.data[6].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[7].id,
                                    created_at: res.data[7].created_at,
                                    text: res.data[7].text,
                                    url: res.data[7].url,
                                    type: res.data[7].type,
                                    like_count: res.data[7].public_metrics.like_count,
                                    retweet_count: res.data[7].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[8].id,
                                    created_at: res.data[8].created_at,
                                    text: res.data[8].text,
                                    url: res.data[8].url,
                                    type: res.data[8].type,
                                    like_count: res.data[8].public_metrics.like_count,
                                    retweet_count: res.data[8].public_metrics.retweet_count
                                },
                                {
                                    id: res.data[9].id,
                                    created_at: res.data[9].created_at,
                                    text: res.data[9].text,
                                    url: res.data[9].url,
                                    type: res.data[9].type,
                                    like_count: res.data[9].public_metrics.like_count,
                                    retweet_count: res.data[9].public_metrics.retweet_count
                                }
                            ])
                            })
                        })
                    }
            })        
    } else if (getByContentButton) {
        setSearchresult([])
        searchTweets() 
                .then(res=>{
                    console.log(res.data)
                    if (Object.keys(res.data).length === 0) {
                        setErrorValueUser(true)
                    } else {
                        console.log(res.data)
                        setSearchresult([
                            {
                                id: res.data[0].id,
                                created_at: res.data[0].created_at,
                                text: res.data[0].text,
                                url: res.data[0].url,
                                type: res.data[0].type,
                                like_count: res.data[0].public_metrics.like_count,
                                retweet_count: res.data[0].public_metrics.retweet_count
                            },
                            {
                                id: res.data[1].id,
                                created_at: res.data[1].created_at,
                                text: res.data[1].text,
                                url: res.data[1].url,
                                type: res.data[1].type,
                                like_count: res.data[1].public_metrics.like_count,
                                retweet_count: res.data[1].public_metrics.retweet_count
                            },
                            {
                                id: res.data[2].id,
                                created_at: res.data[2].created_at,
                                text: res.data[2].text,
                                url: res.data[2].url,
                                type: res.data[2].type,
                                like_count: res.data[2].public_metrics.like_count,
                                retweet_count: res.data[2].public_metrics.retweet_count
                            },
                            {
                                id: res.data[3].id,
                                created_at: res.data[3].created_at,
                                text: res.data[3].text,
                                url: res.data[3].url,
                                type: res.data[3].type,
                                like_count: res.data[3].public_metrics.like_count,
                                retweet_count: res.data[3].public_metrics.retweet_count
                            },
                            {
                                id: res.data[4].id,
                                created_at: res.data[4].created_at,
                                text: res.data[4].text,
                                url: res.data[4].url,
                                type: res.data[0].type,
                                like_count: res.data[4].public_metrics.like_count,
                                retweet_count: res.data[4].public_metrics.retweet_count
                            },
                            {
                                id: res.data[5].id,
                                created_at: res.data[5].created_at,
                                text: res.data[5].text,
                                url: res.data[5].url,
                                type: res.data[5].type,
                                like_count: res.data[5].public_metrics.like_count,
                                retweet_count: res.data[5].public_metrics.retweet_count
                            },
                            {
                                id: res.data[6].id,
                                created_at: res.data[6].created_at,
                                text: res.data[6].text,
                                url: res.data[6].url,
                                type: res.data[6].type,
                                like_count: res.data[6].public_metrics.like_count,
                                retweet_count: res.data[6].public_metrics.retweet_count
                            },
                            {
                                id: res.data[7].id,
                                created_at: res.data[7].created_at,
                                text: res.data[7].text,
                                url: res.data[7].url,
                                type: res.data[7].type,
                                like_count: res.data[7].public_metrics.like_count,
                                retweet_count: res.data[7].public_metrics.retweet_count
                            },
                            {
                                id: res.data[8].id,
                                created_at: res.data[8].created_at,
                                text: res.data[8].text,
                                url: res.data[8].url,
                                type: res.data[8].type,
                                like_count: res.data[8].public_metrics.like_count,
                                retweet_count: res.data[8].public_metrics.retweet_count
                            },
                            {
                                id: res.data[9].id,
                                created_at: res.data[9].created_at,
                                text: res.data[9].text,
                                url: res.data[9].url,
                                type: res.data[9].type,
                                like_count: res.data[9].public_metrics.like_count,
                                retweet_count: res.data[9].public_metrics.retweet_count
                            }
                        ])
                    }
                })  
    }
}, [getByUserButton, getByContentButton])

const tweetCards = searchresult.map((tweet) => { 
    return <TweetCard key={tweet.id} text={tweet.text} type={tweet.type} favorite_count={tweet.favorite_count} retweet_count={tweet.retweet_count}
    />})
   
    return (
        <div className="searchContainer"
            style={{
                position: 'absolute',
                top: '50px',
                left: '0px',
                width: '100vw',
                height: '100%',
                backgroundColor: 'rgba(255, 251, 251, 0.3)',
                backgroundImage: `url(${TV})`,
                backgroundBlendMode: 'lighten',
                zIndex: '1'
            }}
        >
            <div className="searchBtnsContainer">
                <button 
                    className="searchBtnUser"
                    onClick={handleClickUser}
                    onMouseEnter={handleHoverOver1}
                    onMouseLeave={handleHoverOut1}
                    style={{
                        border:`${hover1}`}}
                >Search by User</button>
                <button 
                    className="searchBtnContent"
                    onClick={handleClickContent}
                    onMouseEnter={handleHoverOver2}
                    onMouseLeave={handleHoverOut2}
                    style={{
                        border:`${hover2}`}}
                >Search by Content</button>
                <input 
                    type="text"     
                    placeholder="Type search item here..."
                    value={inputValue}
                    onChange={event=>setInputValue(cleanData(event.target.value))}>
                </input>
            </div>
            <div className="searchResultContainer">
                <div className="searchResult">  

                {tweetCards}
 
                    <p>{errorValueUser ? `I couldn't find anyone Twitter by the username ${inputValue}.  May I recommend searching for Marilyn Monroe?` : ``}</p>
                    <p>{errorValueContent ? `We couldn't find anything under ${inputValue}, but you can shop for tomato soup here.` : ``}</p>
                </div> 
                    <p
                        style={{
                            fontWeight: `600`,
                            paddingBottom: `1em`
                        }}
                    >Why did I build this?  Read the blog post <a href="#">here.</a></p> 
            </div>
        </div>
    )
}
