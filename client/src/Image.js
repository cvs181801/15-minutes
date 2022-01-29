import React from 'react'

export default function Image(props) {
    return (
        <div>
            <img 
                src={props.result.url}
                alt='tweet image'  
                className='tweetCardImg'
                >
            </img> 
            
        </div>
    )
}
