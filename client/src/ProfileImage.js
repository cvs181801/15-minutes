import React from 'react';

export default function ProfileImage(props) {
    console.log(props)
  return  <div>
        <img
            src={props.url ? props.url : ''}
            alt='profile image' 
            width='100%' 
            style={{
                borderRadius: `50%`,
                height: `3em`,
                width:`3em`
                }}
        ></img> 
    </div>;
}
