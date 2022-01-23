import React, {useState, useEffect} from 'react'
import './index.css'
import TV from './pics/TV.png'
import ShowcaseResult from './ShowcaseResult'
import axios from 'axios'

export default function Showcase() {

const [show, setShow] = useState({})
const [buttonpushed, setButtonpushed] = useState('')
const [id, setId] = useState('')
// const [hoverGaga, setHoverGaga] = useState('1px solid #000000')
// const [hoverOprah, setHoverOprah] = useState('1px solid #000000')
// const [hoverReese, setHoverReese] = useState('1px solid #000000')
// const [hoverAshton, setHoverAshton] = useState('1px solid #000000')
// const [hoverBey, setHoverBey] = useState('1px solid #000000')
const [hover, setHover] = useState('')

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

function handleHoverOver() {
    setHover('buttonBorder')
}

function handleHoverOut() {
    setHover('')
}

    // function handleHoverOverGaga() {
    //     setHoverGaga(`4px solid aqua`)
    //  }
     
    // function handleHoverOutGaga() {
    //      setHoverGaga(``)
    // }
     
    // function handleHoverOverOprah() {
    //      setHoverOprah(`4px solid aqua`)
    // }
      
    // function handleHoverOutOprah() {
    //       setHoverOprah(``)
    // }

    // function handleHoverOverReese() {
    //     setHoverReese(`4px solid aqua`)
    // }
     
    // function handleHoverOutReese() {
    //      setHoverReese(``)
    // }
     
    // function handleHoverOverAshton() {
    //      setHoverAshton(`4px solid aqua`)
    // }
      
    // function handleHoverOutAshton() {
    //       setHoverAshton(``)
    // }

    // function handleHoverOverBey() {
    //     setHoverBey(`4px solid aqua`)
    // }
     
    // function handleHoverOutBey() {
    //      setHoverBey(``)
    // }

function getRandomNum() {
    let num = Math.round(Math.random() *10)
    return num;
}    

    useEffect(()=> {
        if (buttonpushed) {
            setShow('')
            searchUser()
                .then(res=> {
                    
                    const randomTweet = res.data[getRandomNum()]
                    console.log(randomTweet)
                    
                    setShow({
                        type: randomTweet.type,
                        url: randomTweet.url,
                        retweet_count: randomTweet.retweet_count,
                        like_count: randomTweet.like_count,
                        dateString: randomTweet.dateString,
                        id: randomTweet.id,
                        name: randomTweet.name,
                        username: randomTweet.username,
                        verified: randomTweet.verified,
                        profile_image_url: randomTweet.profile_image_url,
                        tweetString: randomTweet.tweetString,
                        url_string: randomTweet.url_string
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
        <div 
        className="showcaseContainer"
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
                id={hover}
                onClick={handleClickGaga}
                //onMouseEnter={handleHoverOverGaga}
                //onMouseLeave={handleHoverOutGaga}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                // style={{
                //     border: //`${hoverGaga}`
                // }}     
            >Gaga</button> 

            <button
                className="selectBtn"
                id={hover}
                onClick={handleClickOprah}
                //onMouseEnter={handleHoverOverOprah}
                //onMouseLeave={handleHoverOutOprah}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                // style={{
                //     border: //`${hoverOprah}` 
                // }}     
            >Oprah</button> 

            <button
                className="selectBtn"
                id={hover}
                onClick={handleClickReese}
                //onMouseEnter={handleHoverOverReese}
                //onMouseLeave={handleHoverOutReese}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                // style={{
                //     border: //`${hoverReese}` 
                // }}     
            >Reese</button> 

            <button
                className="selectBtn"
                id={hover}
                onClick={handleClickAshton}
                //onMouseEnter={handleHoverOverAshton}
                //onMouseLeave={handleHoverOutAshton}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                // style={{
                //     border: //`${hoverAshton}`
                // }}     
            >Ashton</button> 

            <button
                className="selectBtn"
                id={hover}
                onClick={handleClickBeyonce}
                //onMouseEnter={handleHoverOverBey}
                //onMouseLeave={handleHoverOutBey}
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                // style={{
                //     border: //`${hoverBey}`
                // }}     
            >Beyonce</button> 
            
            
            <div>
                <div className="showcaseResultContainer">
                <div className="showcaseResult">
                    {buttonpushed}
                    <ShowcaseResult
                        result={{tweet: show, celebrity: buttonpushed, toggleDisplay: 'true'}}
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
