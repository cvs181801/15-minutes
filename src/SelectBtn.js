import React from 'react'
import './index.css'

export default function SelectBtn(props) {
    console.log(props)
    
    return (
        <div>
            <button
                style={{
                    position: 'absolute', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                    top: `${props.top}`,
                    left: `${props.left}`,
                    cursor: 'pointer'
                }}>
            {props.name}</button>
        </div>
    )
}
