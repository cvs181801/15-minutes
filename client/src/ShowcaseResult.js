import React from 'react'


export default function ShowcaseResult(props) {
    return (
        <div>
            <p>{props.result.username}</p>
            <p>{props.result.text}</p>
        </div>
    )
}
