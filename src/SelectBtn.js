import React from 'react'

export default function SelectBtn() {
    return (
        <div>
            <button
                className="selectBtn"
                style={{
                    position: 'absolute',
                    background: `#FFFFFF`,
                    border: `1px solid #000000`,
                    boxSizing: `border-box`,
                    borderRadius: `13px`
                }}
            ></button>
        </div>
    )
}
