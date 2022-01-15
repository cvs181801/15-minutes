import React from 'react'
import Video from './Video.js'
import Image from './Image.js'

const media = function() {
    if(props.result.type && props.result.type === 'photo' || 'gif') {
        return <Image result={props.result}/> 
    } else if (props.result.type && props.result.type === 'video'){
        return <Video result={result} />  
    } else {
        return ''
    }
}

export default function ShowcaseResult(props) {
    console.log(props.result.public_metrics)  
    

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
            
             <p>{props.result.text}</p>
           

            {media}

        </div>
    )
}
