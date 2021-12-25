import React from 'react'
import './index.css'
import TV from './pics/TV.png'

export default function Search() {
    return (
        <div className="searchContainer"
            style={{
                backgroundColor: 'red',
                width: '100vw',
                height: '100vh'
                // backgroundColor: 'rgba(255, 251, 251, 0.3)',
                // backgroundImage: `url(${TV})`,
                // backgroundBlendMode: 'lighten',
            }}
        >
            <div className="searchBtnsContainer">
                <button className="searchBtnUser">Search by User</button>
                <button className="searchBtnContent">Search by Content</button>
                <input type="text" placeholder="Type search item here..."></input>
            </div>
            <div className="searchResultContainer"></div>
        </div>
    )
}
