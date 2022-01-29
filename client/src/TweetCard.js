import React from 'react'
import Image from './Image.js'
import ProfileImage from './ProfileImage.js'

export default function TweetCard(props) {
    return (
    <div
        className='tweet_card'
    >
        <div
            className='tweet_cardContain'
        >

            {props.profile_image_url ? <ProfileImage url={props.profile_image_url} /> : ''}
            <div
                className='tweet_cardContain--inner'
            >
                <div
                    className='tweet_cardContain--innercontent'
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
