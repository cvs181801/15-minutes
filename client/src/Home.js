import React from 'react'
import './index.css';

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="contentContainer">
                    <h1>15 Minutes</h1>
                    <br/>
                    <p>A new way to search Twitter.
                    <br/> 
                    <br/>
                    How will you use your 15 minutes? 
                    <br/>
                    <br/>
                    Select ‘Go to Showcase’ to browse tweets from celebrities using their fame for good.</p>
                    <br/>
                    <br/>
                    <p className="contentContainer_blogtxt">Why did I build this?  Read the blog post <a href="https://casspicerblog.netlify.app/blog/15-minutes">here.</a></p>
                </div>
            </div>
            
        </div>
    )
}
