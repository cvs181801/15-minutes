import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import DOMpurify from 'dompurify'
import axios from 'axios'

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
        setSearchresult('')
        setGetByUserButton(true)
        setErrorValueContent(false)
            
        }
        

function handleClickContent() {
            setSearchresult('')
            setGetByContentButton(true)
            setErrorValueUser(false)
            
                    // var tweetsArray = res.data.statuses;

                    // var newTweetsArray = tweetsArray.map(tweet => {
                    //     return <div key={tweet.id}
                    //         style={{border: `1px solid black`,
                    //                 borderRadius: `13px`,
                    //                 fontWeight: `400`,
                    //                 fontStyle: `normal`,
                    //                 padding: `.5em`,
                    //                 margin: `.4em auto .4em auto`
                    //                 }}
                    //             >
                    //         <p
                    //             style={{textDecoration: `underline`}}
                    //         >{tweet.user.screen_name}</p>
                    //         <p>{tweet.text}</p>

                    //         {tweet.entities.media ? tweet.entities.media.map(element => {
                    //             return <img key={element.id} src={element.media_url_https} alt='gif' width='100%' style={{borderRadius: `13px`}}></img>
                    //             }) : ''}
                                
                    //         {tweet.extended_entities ? tweet.extended_entities.media.map(element=> {
                    //             console.log(element.video_info.variants[0].content_type)
                    //             return  <video key={element.id} controls width='680'>
                    //                     <source src={element.video_info.variants[0].url} type={element.video_info.variants[0].content_type}></source>
                    //                     </video> 
                    //         }) : ''}                        

                    //         <p>💚: {tweet.favorite_count}</p>
                    //         <p>🔁: {tweet.retweet_count}</p>
                    //         </div>
                    //         })
                    //     setSearchresult(newTweetsArray)
                    
                //} else {
                    //console.log('nothing')
                    //setErrorValueContent(true)
                //}
            
        }

useEffect(()=>{
    if(getByUserButton) {
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
}, [searchresult])
   
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
                    {/* {searchresult.map(tweet => { 
                return <div 
                key={tweet.id}
                style={{
                    border: `1px solid black`,
                    borderRadius: `13px`,
                    fontWeight: `400`,
                    fontStyle: `normal`,
                    padding: `.5em`,
                    margin: `.4em auto .4em auto`
                    }}
                    >
                <p>{tweet.text}</p>

                {tweet.type === 'photo' ? <Image result={props.result}/> : '' }
                {tweet.type === 'video' ? <Video result={props.result} /> : '' }
                                
                <p>💚: {tweet.favorite_count}</p>
                <p>🔁: {tweet.retweet_count}</p>
                </div>
      })} */}
                    {console.log(searchresult)}
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
