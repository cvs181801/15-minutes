import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'
import ShowcaseResult from './ShowcaseResult'
import axios from 'axios'
import Video from './Video'
import Image from './Image'

export default function Showcase() {

const [show, setShow] = useState({})
const [buttonpushed, setButtonpushed] = useState('')
const [id, setId] = useState('')
const [hoverGaga, setHoverGaga] = useState('1px solid #000000')
const [hoverOprah, setHoverOprah] = useState('1px solid #000000')
const [hoverReese, setHoverReese] = useState('1px solid #000000')
const [hoverAshton, setHoverAshton] = useState('1px solid #000000')
const [hoverBey, setHoverBey] = useState('1px solid #000000')

    function handleClickGaga(event) {
        event.preventDefault(); 
        setButtonpushed('Lady Gaga') 
        setId(14230524)
    }

    function handleClickOprah(event) {
        event.preventDefault();
        setButtonpushed('Oprah Winfrey')
        setId(19397785) 
    }

    function handleClickReese(event) {
        event.preventDefault();
        setButtonpushed('Reese Witherspoon') 
        setId(1198406491)
    }

    function handleClickAshton(event) {
        event.preventDefault();
        setButtonpushed('Ashton Kutcher') 
        setId(19058681)
    }

    function handleClickBeyonce(event) {
        event.preventDefault();
        setButtonpushed('Beyonce Knowles') 
        setId(31239408)
    }

    async function searchUser() {  
        try {
            var search = await axios.get(`/api/searchByUser?search=${id}`)
            return search
        }
        catch(err){
            console.log(err)
        }
    }

    function handleHoverOverGaga() {
        setHoverGaga(`4px solid aqua`)
     }
     
    function handleHoverOutGaga() {
         setHoverGaga(``)
    }
     
    function handleHoverOverOprah() {
         setHoverOprah(`4px solid aqua`)
    }
      
    function handleHoverOutOprah() {
          setHoverOprah(``)
    }

    function handleHoverOverReese() {
        setHoverReese(`4px solid aqua`)
    }
     
    function handleHoverOutReese() {
         setHoverReese(``)
    }
     
    function handleHoverOverAshton() {
         setHoverAshton(`4px solid aqua`)
    }
      
    function handleHoverOutAshton() {
          setHoverAshton(``)
    }

    function handleHoverOverBey() {
        setHoverBey(`4px solid aqua`)
    }
     
    function handleHoverOutBey() {
         setHoverBey(``)
    }

function getRandomNum() {
    let num = Math.round(Math.random() *10)
    return num;
}        
    
    useEffect(()=> {
        if (buttonpushed) {
            setShow('')
            searchUser()
                .then(res=>{
                    const randomTweet = res.data[getRandomNum()]
                    console.log(randomTweet)
                    // setShow({...randomTweet})
                    setShow({
                        created_at: randomTweet.created_at,
                        text: randomTweet.text,
                        retweet_count: randomTweet.public_metrics.retweet_count,
                        like_count: randomTweet.public_metrics.like_count
                    })
                })
            } else {                
            setButtonpushed('')
            } 
        }, [buttonpushed])  
        
        useEffect(()=>{
            console.log('this is now in state :', show)
        }, [show])


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
        </div>

            <button
                className="selectBtn"
                onClick={handleClickGaga}
                onMouseEnter={handleHoverOverGaga}
                onMouseLeave={handleHoverOutGaga}
                style={{
                    cursor: 'pointer',
                    margin: `0 .2em 1em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: `${hoverGaga}`,
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Gaga</button> 

            <button
                className="selectBtn"
                onClick={handleClickOprah}
                onMouseEnter={handleHoverOverOprah}
                onMouseLeave={handleHoverOutOprah}
                style={{
                    cursor: 'pointer',
                    margin: `0 .2em 1em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: `${hoverOprah}`,
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Oprah</button> 

            <button
                className="selectBtn"
                onClick={handleClickReese}
                onMouseEnter={handleHoverOverReese}
                onMouseLeave={handleHoverOutReese}
                style={{
                    cursor: 'pointer',
                    margin: `0 .2em 1em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: `${hoverReese}`,
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Reese</button> 

            <button
                className="selectBtn"
                onClick={handleClickAshton}
                onMouseEnter={handleHoverOverAshton}
                onMouseLeave={handleHoverOutAshton}
                style={{
                    cursor: 'pointer',
                    margin: `0 .2em 1em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: `${hoverAshton}`,
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Ashton</button> 

            <button
                className="selectBtn"
                onClick={handleClickBeyonce}
                onMouseEnter={handleHoverOverBey}
                onMouseLeave={handleHoverOutBey}
                style={{
                    cursor: 'pointer',
                    margin: `0 .2em 1em .2em`,
                    position: 'inline-block', 
                    height: '32px', 
                    width: '106px', 
                    background: '#FFFFFF',
                    fontSize: '.6rem',
                    letterSpacing: '.1rem',
                    textTransform: 'uppercase',
                    lineHeight: '.8rem',
                    border: `${hoverBey}`,
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Beyonce</button> 
            
            
            <div>
                <div className="showcaseResultContainer">
                <div className="showcaseResult">
                    {buttonpushed}
                    <ShowcaseResult
                        result={show}
                    />  
                </div>
                </div>
            </div>
                <p
                style={{
                    fontWeight: `600`,
                    paddingBottom: `1em`
                }}
                >Why did I build this?  Read the blog post <a href="#">here.</a></p>
        </div>
    )
}
