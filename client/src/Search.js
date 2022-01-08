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
    const [inputValue, setInputValue] = useState('')
    const [errorValueUser, setErrorValueUser] = useState(false)
    const [errorValueContent, setErrorValueContent] = useState(false)

    //need to make inputValue more secure - user can only input string etc

async function searchUser() {  
    try {
        var search = await axios.get(`/api/searchdata?search=${inputValue}`)
        console.log(search)
        return search
    }
    catch(err){
        console.log(err)
    }
    
//jsonData.forEach(object => {
//if(object.username === inputValue) {

//setSearchresult({
    // username: object.username,
    // text: object.text,
    // retweetCount: object.retweetCount,
    // favoritedCount: object.favoritedCount
    //})
//} else {
//setErrorValueUser(true)
//}
//})
}

function handleClickUser() {
        setSearchresult('')
        setErrorValueContent(false)
            searchUser() 
                .then(res=>{
                    console.log(res)
                })
    
}

    function handleClickContent() {
        setSearchresult('')
        setErrorValueUser(false)
        fetch('/api/searchdata')
                    .then(response => response.json())
                    .then(jsonData => {
                        console.log(jsonData)
        //jsonData.forEach((object) => {
            //if(Object.values(object).includes(inputValue)) {
                 //setSearchresult({
                                // username: object.username,
                                // text: object.text,
                                // retweetCount: object.retweetCount,
                                // favoritedCount: object.favoritedCount
                    //             })
                    //         } else {
                    //             setErrorValueContent(true)
                    //         }
                    //     })
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
                >Search by User</button>
                <button 
                    className="searchBtnContent"
                    onClick={handleClickContent}
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
                    <p>{searchresult.username}</p>
                    <p>{searchresult.text}</p>
                    {/* <p>Favorited: {searchresult.favoritedCount}</p>
                    <p>Retweeted: {searchresult.retweetCount}</p> */}
                    <p>Favorited: {searchresult.id}</p> 
                    <p>Retweeted: {searchresult.title}</p>
                    <p>{errorValueUser ? `I couldn't find anyone Twitter by the username ${inputValue}.  May I recommend searching for Marilyn Monroe?` : ``}</p>
                    <p>{errorValueContent ? `We couldn't find anything under ${inputValue}, but you can shop for tomato soup here.` : ``}</p>
                </div> 
                    <p>Why did I build this?  Read the blog post <a href="#">here.</a></p> 
            </div>
        </div>
    )
}
