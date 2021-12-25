import React from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'
import selectBtnData from './selectBtnData'

console.log(selectBtnData)
 const newArray = selectBtnData.map(button => {
     return <SelectBtn key={button.id} id={button.id} className={button.className} name={button.name} left={button.left} top={button.top}/>
    })

    console.log(newArray)

export default function Showcase() {
    return (
        <div className="showcaseContainer"
        style={{
            position: 'absolute',
            top: '50px',
            left: '0px',
            width: '100vw',
            height: '100%',
            backgroundColor: 'rgba(255, 251, 251, 0.3)',
            backgroundImage: `url(${TV})`,
            backgroundBlendMode: 'lighten',
            zIndex: '1'
        }}
        >
            {/* <SelectBtn
                  
            ></SelectBtn>
            <SelectBtn
                
            ></SelectBtn>
            <SelectBtn
                className="selectBtn"
                id="Reese"
            ></SelectBtn>
            <SelectBtn
                className="selectBtn"
                id="Ashton"
            ></SelectBtn>
            <SelectBtn
                className="selectBtn"
                id="Beyonce"
            ></SelectBtn> */}

            {newArray}
            
            <div>
                <div className="showcaseResultContainer"></div>
            </div>
        </div>
    )
}
