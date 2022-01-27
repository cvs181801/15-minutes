import React from 'react'
import Image from './Image.js'
import ProfileImage from './ProfileImage.js'

export default function ShowcaseResult(props) { 
    
    return (
        <div
            className="showcase_result"
            style={{border: `1px solid black`,
                    borderRadius: `13px`,
                    fontWeight: `400`,
                    fontStyle: `normal`,
                    padding: `.5em`,
                    margin: `.4em auto .4em auto`
                    }}
        >

            <p>{props.result.tweet.dateString ? props.result.tweet.dateString  : ''}</p> 
            
            {props.result.tweet.profile_image_url ? <ProfileImage url={props.result.tweet.profile_image_url} /> : ''}

            <p>{props.result.tweet.name ? props.result.tweet.name : ''} {props.result.tweet.verified ? `☑️` : ''}</p> 
            <p>{props.result.tweet.username ? `@${props.result.tweet.username}` : ''}</p>
    
            <p>{props.result.tweet.tweetString ? props.result.tweet.tweetString : 'Select a celebrity above to view one of their recent tweets.'}</p>  
            <p><a href={props.result.tweet.url_string ? props.result.tweet.url_string : ''}>{props.result.tweet.url_string ? props.result.tweet.url_string : ''}</a></p>

            {props.result.tweet.type === 'photo' ? <Image result={props.result.tweet}/> : '' }
                                
            <p> {props.result.tweet.like_count ? `💚: ${props.result.tweet.like_count}` : ''}</p>
            <p> {props.result.tweet.retweet_count ? `🔁: ${props.result.tweet.retweet_count}` : ''}</p> 

        </div>
    )
}
