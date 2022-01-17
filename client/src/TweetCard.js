import React from 'react'
import Image from './Image.js'
import Video from './Video.js'

export default function TweetCard(props) {
    console.log(props)
    return (
        <div
       style={{
            border: `1px solid black`,
            borderRadius: `13px`,
            fontWeight: `400`,
            fontStyle: `normal`,
            padding: `.5em`,
            margin: `.4em auto .4em auto`
            }}
        >
        <p>{props.text}</p>   

        {props.type === 'photo' ? <Image result={props.result}/> : '' }
        {props.type === 'video' ? <Video result={props.result} /> : '' } 
                                
        <p>💚: {props.favorite_count}</p>
        <p>🔁: {props.retweet_count}</p>   
        </div>
    )
}
