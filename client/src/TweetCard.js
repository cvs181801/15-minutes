import React from 'react'
import Image from './Image.js'
import ProfileImage from './ProfileImage.js'

export default function TweetCard(props) {
    console.log(props)
    return (
    <div
        className='tweet_card'
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
            //width:`30em`,
            display: 'flex',
            }}
        >
            {/* <img
                src={props.profile_image_url ? props.profile_image_url : ''}
                alt='image' 
                width='100%' 
                style={{
                    borderRadius: `50%`,
                    height: `3em`,
                    width:`3em`,
                    margin: `.4em`
                    }}
            ></img> */}
            {props.profile_image_url ? <ProfileImage url={props.profile_image_url} /> : ''}
            <div
            style={{
                display: 'flex'
            }}
            >
                <div
                style={{
                    padding: `.4em`,
                    marginRight: `3em`
                }}
                >
                    <p>{props.name ? props.name : ''} {props.verified ? `☑️` : ''} {props.dateString ? props.dateString  : ''}</p> 
                    <p>{props.username ? `@${props.username}` : ''}</p> 
                    <p>{props.tweetString ? props.tweetString : ''}</p>   
                    <p><a href={props.url_string ? props.url_string : ''}>{props.url_string ? props.url_string : ''}</a></p>

                    {props.type === 'photo' ? <Image result={props}/> : '' }
                                    
                    <p> {props.like_count ? `💚: ${props.like_count}` : ''}</p>
                    <p> {props.retweet_count ? `🔁: ${props.retweet_count}` : ''}</p>  
                </div>
            </div>
        </div> 

              
        </div>
    )
}
