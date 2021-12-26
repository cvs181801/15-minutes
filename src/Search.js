import React, {useState} from 'react'
import './index.css'
import TV from './pics/TV.png'
import test from './test'

export default function Search() {

    const [searchresult, setSearchresult] = useState('')
    const [inputValue, setInputValue] = useState('')

    function handleClick() {
        setSearchresult('hi')
    }

    function handleChange(event) {
        event.preventDefault();
        const {name, value} = event.target
        setInputValue({ [name]:value }) 
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
                    onClick={handleClick}
                >Search by User</button>
                <button className="searchBtnContent">Search by Content</button>
                <input 
                    type="text"     
                    placeholder="Type search item here..."
                    value={inputValue}
                    onChange={event=>handleChange(event)}>
                
                </input>
            </div>
            <div className="searchResultContainer">
                <div className="searchResult">{searchresult}</div>
            </div>
        </div>
    )
}
