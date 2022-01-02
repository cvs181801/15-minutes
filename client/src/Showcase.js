import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'
import selectBtnData from './selectBtnData'
import ShowcaseResult from './ShowcaseResult'
//import test from './test'

export default function Showcase() {

    const [show, setShow] = useState('')
    const [buttonpushed, setButtonpushed] = useState(false)

    function handleClickGaga(event) {
        event.preventDefault(); 
        setButtonpushed(true) 
    }

    function handleClickOprah(event) {
        event.preventDefault();
        setButtonpushed(true) 
        
        //setShow({username: test[0].username, text: test[0].text})
    }

    function handleClickReese(event) {
        event.preventDefault();
        setButtonpushed(true) 
        //setShow({username: test[2].username, text: test[2].text})
    }

    function handleClickAshton(event) {
        event.preventDefault();
        setButtonpushed(true) 

        //setShow({username: test[3].username, text: test[3].text})
    }

    function handleClickBeyonce(event) {
        event.preventDefault();
        setButtonpushed(true) 
        //setShow({username: test[4].username, text: test[4].text})
    }
    
    
    // const newButtonArray = selectBtnData.map(button => {
    //     return <SelectBtn key={button.id} id={button.id} className={button.className} name={button.name} 
    //     left={button.left} top={button.top} onClick={handleClick}
    //     />
    // })


    useEffect(()=> {
        if (buttonpushed) {
            setShow('')
                fetch('/api/showcasedata')
                    .then(response => response.json())
                    .then(jsonData => {
                        console.log(jsonData)
                        //setShow({jsonData})
                        //setShowcleared(false)  
                    })
                setButtonpushed(false)
            }
        }, [buttonpushed])   

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
            >
                {/* {newButtonArray} */}
            </div>

            <button
                className="selectBtn"
                onClick={handleClickGaga}
                style={{
                    left: "85px",
                    top: "82px",
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Gaga</button> 

            <button
                className="selectBtn"
                onClick={handleClickOprah}
                style={{
                    left: "85px",
                    top: "82px",
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Oprah</button> 

            <button
                className="selectBtn"
                onClick={handleClickReese}
                style={{
                    left: "85px",
                    top: "82px",
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Reese</button> 

            <button
                className="selectBtn"
                onClick={handleClickAshton}
                style={{
                    left: "85px",
                    top: "82px",
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Ashton</button> 

            <button
                className="selectBtn"
                onClick={handleClickBeyonce}
                style={{
                    left: "85px",
                    top: "82px",
                    cursor: 'pointer',
                    margin: `0 .2em .2em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Beyonce</button> 
            
            
            <div>
                <div className="showcaseResultContainer">
                <div className="showcaseResult">
                    <ShowcaseResult
                        result={show}
                    />
                </div>
                </div>
            </div>
                <p>Why did I build this?  Read the blog post here.</p>
        </div>
    )
}
