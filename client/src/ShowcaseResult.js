import React from 'react'
import Video from './Video.js'
import Image from './Image.js'

export default function ShowcaseResult(props) { 
    
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
            
             <p>{props.result.text ? props.result.text : 'Select a celebrity above to view one of their recent tweets.'}</p>
             <p> {props.result.like_count ? `💚: ${props.result.like_count}` : ''}</p>
             <p> {props.result.retweet_count ? `🔁: ${props.result.retweet_count}` : ''}</p>

             {props.result.type === 'photo' ? <Image result={props.result}/> : '' }
             {props.result.type === 'video' ? <Video result={props.result} /> : '' }

        </div>
    )
}
