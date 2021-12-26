import React, {useState} from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'
import selectBtnData from './selectBtnData'
import test from './test'

export default function Showcase() {

    const [show, setShow] = useState('')

    function handleClick(event) {
        event.preventDefault();
        console.log("hi")
        //setShow('')
        setShow('Hi')
    }
    
    const newButtonArray = selectBtnData.map(button => {
        return <SelectBtn key={button.id} id={button.id} className={button.className} name={button.name} 
        left={button.left} top={button.top} onClick={handleClick}
        />
    })

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
            <div
                className="showcaseBtnsContainer"
            >{newButtonArray}
            </div>
            
            
            <div>
                <div className="showcaseResultContainer">
                <div className="showcaseResult">
                    
                </div>
                </div>
            </div>
        </div>
    )
}
