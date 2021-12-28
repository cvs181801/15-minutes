import React, {useState} from 'react'
import './index.css'
import TV from './pics/TV.png'
import test from './test'
import DOMpurify from 'dompurify'

function cleanData(userInput) {
    return DOMpurify.sanitize(userInput)
}   //need to add something to the html file as well to make this work!

let searchByContentArray = [];
//let iterator = (Object.values(object));
let objectArray = [];



export default function Search() {

    const [searchresult, setSearchresult] = useState('')
    const [inputValue, setInputValue] = useState('')

    function handleClickUser() {
        setSearchresult('')
        console.log(test.find(element => element == {username: inputValue}))
        setSearchresult('Hi')
    }

    function handleClickContent() {
        setSearchresult('')
        test.forEach((object) => {
            if(Object.values(object).includes("Oprah")) {
                 setSearchresult({username: object.username,
                                text: object.text,
                                retweetCount: object.retweetCount,
                                favoritedCount: object.favoritedCount
                            })
                 console.log(searchresult)
            }
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
                {/* <div className="searchResult">{searchresult}</div> */}
            </div>
        </div>
    )
}
