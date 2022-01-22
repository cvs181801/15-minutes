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
    <div
    style={{
        height: `30em`,
        width:`30em`,
        display: 'flex',
        border: '2px solid grey'
        }}
    >
        <img
            src={props.profile_image_url ? props.profile_image_url : ''}
            alt='image' 
            width='100%' 
            style={{
                borderRadius: `50%`,
                height: `3em`,
                width:`3em`,
                margin: `.4em`
                }}
        ></img>
        <div
        style={{
            display: 'flex',
            border: '2px solid green',
            textAlign: `left`
        }}
        >
            <div
            style={{
                border: '2px solid hotpink',
                padding: `.4em`
            }}
            >
                <p>{props.name ? props.name : ''} {props.verified ? `☑️` : ''} {props.dateString ? props.dateString  : ''}</p> 
                <p>{props.username ? `@${props.username}` : ''}</p>  
            </div>
            
        </div>
    </div> 

        <p>{props.tweetString ? props.tweetString : ''}</p>   
        <p><a href={props.url_string ? props.url_string : ''}>{props.url_string ? props.url_string : ''}</a></p>

        {props.type === 'photo' ? <Image result={props}/> : '' }
                                
        <p> {props.like_count ? `💚: ${props.like_count}` : ''}</p>
        <p> {props.retweet_count ? `🔁: ${props.retweet_count}` : ''}</p>   
        </div>
    )
}
