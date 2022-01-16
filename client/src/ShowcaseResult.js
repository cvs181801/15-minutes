import React from 'react'
import Video from './Video.js'
import Image from './Image.js'

export default function ShowcaseResult(props) {
    console.log(props.result.public_metrics)  
    
    return (
        <div
        style={{border: `1px solid black`,
                borderRadius: `13px`,
                fontWeight: `400`,
                fontStyle: `normal`,
                padding: `.5em`,
                margin: `.4em auto .4em auto`
                }}
        >
            
             <p>{props.result.text}</p>
             <p>💚: {props.result.like_count}</p>
             <p>🔁: {props.result.retweet_count}</p>

             {props.result.type === 'photo' ? <Image result={props.result}/> : '' }
             {props.result.type === 'video' ? <Video result={props.result} /> : '' }

        </div>
    )
}
