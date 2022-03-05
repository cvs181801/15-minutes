import React from 'react';

export default function ProfileImage(props) {
  return  <div>
        <img
            src={props.url ? props.url : ''}
            alt='profile image' 
            width='100%' 
            className="profileImg"
        ></img> 
    </div>;
}
