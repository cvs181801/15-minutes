import React from 'react'
import Image from './Image.js'
//import Video from './Video.js'

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
        <p>{props.dateString ? props.dateString  : ''}</p> 
        <p>{props.username ? `@${props.username}` : ''}</p><img
            src={props.profile_image_url ? props.profile_image_url : ''}
            alt='image' 
            width='100%' 
            style={{
                borderRadius: `50%`,
                height: `2em`,
                width:`2em`
                }}
        ></img>

        <p>{props.name ? props.name : ''}</p>    
        <p>{props.text ? props.text : ''}</p>   

        {props.type === 'photo' ? <Image result={props}/> : '' }
        {/* {props.type === 'video' ? <Video result={props} /> : '' }  */}
                                
        <p> {props.like_count ? `💚: ${props.like_count}` : ''}</p>
        <p> {props.retweet_count ? `🔁: ${props.retweet_count}` : ''}</p>   
        </div>
    )
}
