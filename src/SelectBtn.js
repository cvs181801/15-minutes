import React from 'react'
import './index.css'

export default function SelectBtn(props) {
    console.log(props)
    
    return (
        <div>
            <button
                style={{
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                    // top: `${props.top}`,
                    // left: `${props.left}`,
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`
                }}>
            {props.name}</button>
        </div>
    )
}
