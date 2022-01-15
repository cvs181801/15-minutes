import React from 'react'


export default function ShowcaseResult(props) {
    console.log(props)
    //var tweetsArray = props.result;
    //console.log(tweetsArray)
     const newTweetsArray = props.result.map(tweet => {
               return <div key={tweet.id}
    //             style={{border: `1px solid black`,
    //                     borderRadius: `13px`,
    //                     fontWeight: `400`,
    //                     fontStyle: `normal`,
    //                     padding: `.5em`,
    //                     margin: `.4em auto .4em auto`
    //                     }}
                     >
      
    //                  <p>{tweet.text}</p>

               
                   </div>
                   })
    
    return (
        <div>
            {/* {newTweetsArray}           */}
            <p>hi</p>
        </div>
    )
}
