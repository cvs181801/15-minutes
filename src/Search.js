import React from 'react'
import './index.css'
import TV from './pics/TV.png'

export default function Search() {
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
                <button className="searchBtnUser">Search by User</button>
                <button className="searchBtnContent">Search by Content</button>
                <input type="text" placeholder="Type search item here..."></input>
            </div>
            <div className="searchResultContainer"></div>
        </div>
    )
}
