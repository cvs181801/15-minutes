import React from 'react'

export default function Image(props) {
    console.log(props.result)
    return (
        <div>
            <img 
                src={props.result.url}
                alt='image' 
                width='100%' 
                style={{borderRadius: `13px`}}>
            </img> 
            
        </div>
    )
}
