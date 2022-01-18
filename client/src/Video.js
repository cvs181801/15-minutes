import React from 'react'

export default function Video(props) {
    console.log(props.result)
    return (
        <div>
            <video controls width='680'>
                <source 
                    src={props.url}
                    type='video/mp4'
                >
                </source>
            </video>   
            
        </div>
    )
}
