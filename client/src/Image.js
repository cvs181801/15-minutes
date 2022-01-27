import React from 'react'

export default function Image(props) {
    console.log(props.result)
    return (
        <div>
            <img 
                src={props.result.url}
                alt='tweet image' 
                //width='100%' 
                className='tweetCardImg'
                //</div>style={{borderRadius: `13px`}}
                >
            </img> 
            
        </div>
    )
}
