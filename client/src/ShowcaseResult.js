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

            <p>{props.result.dateString ? props.dateString  : ''}</p> 
            <p>{props.result.username ? `@${props.result.username}` : ''}</p><img
            src={props.result.profile_image_url ? props.result.profile_image_url : ''}
            alt='image' 
            width='100%' 
            style={{
                borderRadius: `50%`,
                height: `2em`,
                width:`2em`
                }}
        ></img>

        <p>{props.result.name ? props.result.name : ''}</p>    
        <p>{props.result.tweetString ? props.result.tweetString : 'Select a celebrity above to view one of their recent tweets.'}</p>  
        <a href={props.result.url_string ? props.result.url_string : ''}>{props.result.url_string ? props.result.url_string : ''}</a>

        {props.result.type === 'photo' ? <Image result={props.result}/> : '' }
                            
        <p> {props.result.like_count ? `💚: ${props.result.like_count}` : ''}</p>
        <p> {props.result.retweet_count ? `🔁: ${props.result.retweet_count}` : ''}</p>

        </div>
    )
}
