import React from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'

export default function Showcase() {
    return (
        <div className="showcaseContainer"
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
            <SelectBtn
                id="oprah"
            />
            <SelectBtn
                id="reese"
            />
            <SelectBtn
                id="keanu"
            />
            <SelectBtn
                id="ashton"
            />
            <SelectBtn
                id="beyonce"
            />
            <div>
                <div className="showcaseResultContainer"></div>
            </div>
        </div>
    )
}
