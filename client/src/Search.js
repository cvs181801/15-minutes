import React, {useState} from 'react'
import './index.css'
import TV from './pics/TV.png'
import DOMpurify from 'dompurify'
import axios from 'axios'

function cleanData(userInput) {
    return DOMpurify.sanitize(userInput)
}   

export default function Search() {

    const [searchresult, setSearchresult] = useState('')
    const [getTweetsButton, setGetTweetsButton] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [errorValueUser, setErrorValueUser] = useState(false)
    const [errorValueContent, setErrorValueContent] = useState(false)
    const [hover1, setHover1] = useState('')
    const [hover2, setHover2] = useState('')

    //need to make inputValue more secure - user can only input string etc

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
        setErrorValueContent(false)
            searchByUsername() 
                .then(res=>{
                    //console.log(Boolean(res.data.data === undefined))
                    if (res.data.data[0]) {
                        let usernameArray = res.data.data;
                        console.log(usernameArray)
                        usernameArray.forEach(element=> {
                            if(element.username) {
                                console.log('username :', element.username)
                                searchUser(element.id)
                                .then(res=>{
                                    console.log(res.data)
                                })
                            
                            } else {
                                setErrorValueUser(true)
                            }
                        })  
                    }
                    //var tweetsArray = res.data.statuses;
                    //console.log(tweetsArray[0].user.name)
                    // var newTweetsArray = tweetsArray.map(tweet => {
                    //     return <div key={tweet.id}>{tweet.text} </div>})
                    //     setSearchresult(newTweetsArray)
                     })          
        }



function handleClickContent() {
            setSearchresult('')
            setErrorValueUser(false)
            searchTweets() 
                .then(res=>{
                    console.log(res.data)
                    //if(res.data.statuses) {
                        //console.log(res.data.statuses)

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
            })                   
        }


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
                    {searchresult}
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
