import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import SelectBtn from './SelectBtn'
import ShowcaseResult from './ShowcaseResult'
import axios from 'axios'

export default function Showcase() {

    async function searchUser() {  
        try {
            var search = await axios.get(`/api/searchdata?search=${buttonpushed}`)
            return search
        }
        catch(err){
            console.log(err)
        }
    }

    const [show, setShow] = useState('')
    const [buttonpushed, setButtonpushed] = useState('')

    function handleClickGaga(event) {
        event.preventDefault(); 
        setButtonpushed('gaga') 
    }

    function handleClickOprah(event) {
        event.preventDefault();
        setButtonpushed('oprah') 
    }

    function handleClickReese(event) {
        event.preventDefault();
        setButtonpushed('reese') 
    }

    function handleClickAshton(event) {
        event.preventDefault();
        setButtonpushed('ashton') 
    }

    function handleClickBeyonce(event) {
        event.preventDefault();
        setButtonpushed('beyonce') 
    }
    
    
    // const newButtonArray = selectBtnData.map(button => {
    //     return <SelectBtn key={button.id} id={button.id} className={button.className} name={button.name} 
    //     left={button.left} top={button.top} onClick={handleClick}
    //     />
    // })

//need to build in a random number generator so we're only rendering one of the 10 tweets ** 
//also - this is a search by content.  We need search by user here!

    useEffect(()=> {
        if (buttonpushed) {
            setShow('')
            searchUser()
                .then(res=>{
                    console.log(res.data.statuses)
                    var tweetsArray = res.data.statuses;
                    //console.log(tweetsArray[0].user.name, tweetsArray[0].user.screen_name)

                    var newTweetsArray = tweetsArray.map(tweet => {
                        return <div key={tweet.id}
                            style={{border: `1px solid black`,
                                    borderRadius: `13px`,
                                    fontWeight: `400`,
                                    fontStyle: `normal`,
                                    padding: `.5em`,
                                    margin: `.4em auto .4em auto`
                                    }}
                                >
                            <p
                                style={{textDecoration: `underline`}}
                            >{tweet.user.screen_name}</p>
                            <p>{tweet.text}</p>

                            {tweet.entities.media ? tweet.entities.media.map(element => {
                                return <img key={element.id} src={element.media_url_https} alt='gif' width='100%' style={{borderRadius: `13px`}}></img>
                                }) : ''}

                            <p>💚: {tweet.favorite_count}</p>
                            <p>🔁: {tweet.retweet_count}</p>
                            </div>
                    })
                    setShow(newTweetsArray)
                })
            } else {                
            setButtonpushed('')
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
                    // left: "85px",
                    // top: "82px",
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
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Gaga</button> 

            <button
                className="selectBtn"
                onClick={handleClickOprah}
                style={{
                    // left: "85px",
                    // top: "82px",
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
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Oprah</button> 

            <button
                className="selectBtn"
                onClick={handleClickReese}
                style={{
                    // left: "85px",
                    // top: "82px",
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
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Reese</button> 

            <button
                className="selectBtn"
                onClick={handleClickAshton}
                style={{
                    // left: "85px",
                    // top: "82px",
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
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Ashton</button> 

            <button
                className="selectBtn"
                onClick={handleClickBeyonce}
                style={{
                    // left: "85px",
                    // top: "82px",
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
                    border: '1px solid #000000',
                    boxSizing: 'border-box',
                    borderRadius:'13px',
                }}     
            >Beyonce</button> 
            
            
            <div>
                <div className="showcaseResultContainer">
                <div className="showcaseResult">
                    {/* <ShowcaseResult
                        result={show}
                    /> */}
                    {show}
                </div>
                </div>
            </div>
                <p>Why did I build this?  Read the blog post <a href="#">here.</a></p>
        </div>
    )
}
