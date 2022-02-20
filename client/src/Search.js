import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import TweetCard from './TweetCard';

export default function Search() {
  const [searchresult, setSearchresult] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errorValueUser, setErrorValueUser] = useState(false);
  const [errorValueContent, setErrorValueContent] = useState(false);
  const [errorValueCharacters, setErrorValueCharacters] = useState('');
  const [errorValueAuthorized, setErrorValueAuthorized] = useState('');

  function searchByUserWrapper() {
    searchByUsername().then((res) => {
      if (
        Object.keys(res.data).length === 0 ||
        Object.keys(res.data).includes('stack')
      ) {
        setErrorValueUser(true);
      } else {
        setErrorValueUser(false);
        let usernameArray = res.data.data;
        usernameArray.forEach((element) => {
          searchUser(element.id).then((res) => {
            if (Object.keys(res.data).includes('errors')) {
              setErrorValueAuthorized(
                "I'm sorry, that user has hidden their tweets from view.  Please try again."
              );
            } else {
              setErrorValueAuthorized('');
              const newArray = [];
              for (let i = 0; i <= 9; i++) {
                let searchResult = {
                  id: res.data[i].id,
                  dateString: res.data[i].dateString,
                  name: res.data[i].name,
                  username: res.data[i].username,
                  verified: res.data[i].verified,
                  profile_image_url: res.data[i].profile_image_url,
                  tweetString: res.data[i].tweetString,
                  url: res.data[i].url,
                  type: res.data[i].type,
                  like_count: res.data[i].like_count,
                  retweet_count: res.data[i].retweet_count,
                  url_string: res.data[i].url_string,
                };
                newArray.push(searchResult);
              }
              setSearchresult(newArray);
            }
          });
        });
      }
    });
  }

  function searchByContentWrapper() {
    searchTweets().then((res) => {
      if (
        Object.keys(res.data).length === 0 ||
        Object.keys(res.data).includes('stack')
      ) {
        setErrorValueContent(true);
      } else {
        setErrorValueAuthorized('');
        const newArray = [];
        for (let i = 0; i <= 9; i++) {
          let searchResult = {
            id: res.data[i].id,
            dateString: res.data[i].dateString,
            name: res.data[i].name,
            username: res.data[i].username,
            verified: res.data[i].verified,
            profile_image_url: res.data[i].profile_image_url,
            tweetString: res.data[i].tweetString,
            url: res.data[i].url,
            type: res.data[i].type,
            like_count: res.data[i].like_count,
            retweet_count: res.data[i].retweet_count,
            url_string: res.data[i].url_string,
          };
          newArray.push(searchResult);
        }
        setSearchresult(newArray);
      }
    });
  }

  async function searchTweets() {
    try {
      var search = await axios.get(`/api/searchdata?search=${inputValue}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  async function searchByUsername() {
    try {
      var search = await axios.get(
        `/api/searchByUsername?search=${inputValue}`
      );
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  async function searchUser(id) {
    try {
      var search = await axios.get(`/api/searchByUser?search=${id}`);
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  function handleClickUser() {
    setErrorValueCharacters('');
    setSearchresult([]);
    setErrorValueContent(false);
    searchByUserWrapper();
  }

  function handleClickContent() {
    if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
      setErrorValueCharacters(
        'Please enter only text - no special characters!'
      );
    } else {
      setErrorValueCharacters('');
      setSearchresult([]);
      setErrorValueUser(false);
      searchByContentWrapper();
    }
  }

  const tweetCards = searchresult.map((tweet) => {
    return (
      <TweetCard
        key={tweet.id}
        dateString={tweet.dateString}
        created_at={tweet.created_at}
        name={tweet.name}
        username={tweet.username}
        verified={tweet.verified}
        profile_image_url={tweet.profile_image_url}
        tweetString={tweet.tweetString}
        type={tweet.type}
        url={tweet.url}
        like_count={tweet.like_count}
        retweet_count={tweet.retweet_count}
        url_string={tweet.url_string}
      />
    );
  });

  return (
    <div className='searchContainer'>
      <div className='searchBtnsContainer'>
        <button className='searchBtnUser' onClick={handleClickUser}>
          Search by User
        </button>
        <button className='searchBtnContent' onClick={handleClickContent}>
          Search by Content
        </button>
        <input
          type='text'
          placeholder='Type search item here...'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}></input>
      </div>
      <div className='searchResultContainer'>
        <div className='searchResult'>
          <p>
            {errorValueUser
              ? `I couldn't find anyone Twitter by the username ${inputValue}.  May I recommend searching for Marilyn Monroe?`
              : ``}
          </p>
          <p>
            {errorValueContent
              ? `We couldn't find anything under ${inputValue}, but you can shop for tomato soup here.`
              : ``}
          </p>
          <p>{errorValueCharacters}</p>
          <p>{errorValueAuthorized}</p>

          {tweetCards}
        </div>
        <p className='searchResult_blog'>
          Why did I build this? Read the blog post{' '}
          <a href='https://casspicerblog.netlify.app/blog/15-minutes'>here.</a>
        </p>
      </div>
    </div>
  );
}

//my original (before code review to refactor)

// import React, {useState, useEffect} from 'react'
// import './index.css'
// import TV from './pics/TV.png'
// import axios from 'axios'
// import TweetCard from './TweetCard'

// export default function Search() {

// const [searchresult, setSearchresult] = useState([])
// const [getByUserButton, setGetByUserButton] = useState(false)
// const [getByContentButton, setGetByContentButton] = useState(false)
// const [inputValue, setInputValue] = useState('')
// const [errorValueUser, setErrorValueUser] = useState(false)
// const [errorValueContent, setErrorValueContent] = useState(false)
// const [errorValueCharacters, setErrorValueCharacters] = useState('')
// const [errorValueAuthorized, setErrorValueAuthorized] = useState('')


// async function searchTweets() {  
//     try {
//         const search = await axios.get(`/api/searchdata?search=${inputValue}`)
//         return search
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// async function searchByUsername() {
//     try {
//         const search = await axios.get(`/api/searchByUsername?search=${inputValue}`)
//         return search
//     }
//     catch(err){
//         console.log(err)
//     }    
// }

// async function searchUser(id) {  
//     try {
//         const search = await axios.get(`/api/searchByUser?search=${id}`)
//         return search
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// function handleClickUser() {
//     setErrorValueCharacters('')
//     setSearchresult([])
//     setGetByContentButton(false)
//     setGetByUserButton(true)
//     setErrorValueContent(false)
//     }

// function handleClickContent() { 

//     if(! /^[a-zA-Z0-9]+$/.test(inputValue)) {
//         setErrorValueCharacters('Please enter only text - no special characters!')
//     } else {
//         setErrorValueCharacters('')
//         setSearchresult([])
//         setGetByUserButton(false)
//         setGetByContentButton(true)
//         setErrorValueUser(false)
//     }
// }


// useEffect(()=>{
//     if(getByUserButton) {
//         searchByUsername()
//         .then(res=>{ 
//          if (Object.keys(res.data).length === 0 || Object.keys(res.data).includes('stack')) {   
//             setErrorValueUser(true)
//             setGetByUserButton(false)
//         } else {
//                 setErrorValueUser(false)
//                 let usernameArray = res.data.data;
//                     usernameArray.forEach(element=> {
//                         searchUser(element.id)                  
//                             .then(res=>{
//                                 if(Object.keys(res.data).includes('errors')) {
//                                     setErrorValueAuthorized("I'm sorry, that user has hidden their tweets from view.  Please try again.")
//                                 } else {
//                                     setErrorValueAuthorized('')
//                                     setSearchresult([{
//                                         id: res.data[0].id,
//                                         dateString: res.data[0].dateString,
//                                         name: res.data[0].name,
//                                         username: res.data[0].username,
//                                         verified: res.data[0].verified,
//                                         profile_image_url: res.data[0].profile_image_url,
//                                         tweetString: res.data[0].tweetString,
//                                         url: res.data[0].url,
//                                         type: res.data[0].type,
//                                         like_count: res.data[0].like_count,
//                                         retweet_count: res.data[0].retweet_count,
//                                         url_string: res.data[0].url_string
//                                     },
//                                     {
//                                         id: res.data[1].id,
//                                         dateString: res.data[1].dateString,
//                                         name: res.data[1].name,
//                                         username: res.data[1].username,
//                                         verified: res.data[1].verified,
//                                         profile_image_url: res.data[1].profile_image_url,
//                                         tweetString: res.data[1].tweetString,
//                                         url: res.data[1].url,
//                                         type: res.data[1].type,
//                                         like_count: res.data[1].like_count,
//                                         retweet_count: res.data[1].retweet_count,
//                                         url_string: res.data[1].url_string
//                                     },
//                                     {
//                                         id: res.data[2].id,
//                                         dateString: res.data[2].dateString,
//                                         name: res.data[2].name,
//                                         username: res.data[2].username,
//                                         verified: res.data[2].verified,
//                                         profile_image_url: res.data[2].profile_image_url,
//                                         tweetString: res.data[2].tweetString,
//                                         url: res.data[2].url,
//                                         type: res.data[2].type,
//                                         like_count: res.data[2].like_count,
//                                         retweet_count: res.data[2].retweet_count,
//                                         url_string: res.data[2].url_string
//                                     },
//                                     {
//                                         id: res.data[3].id,
//                                         dateString: res.data[3].dateString,
//                                         name: res.data[3].name,
//                                         username: res.data[3].username,
//                                         verified: res.data[3].verified,
//                                         profile_image_url: res.data[3].profile_image_url,
//                                         tweetString: res.data[3].tweetString,
//                                         url: res.data[3].url,
//                                         type: res.data[3].type,
//                                         like_count: res.data[3].like_count,
//                                         retweet_count: res.data[3].retweet_count,
//                                         url_string: res.data[3].url_string
//                                     },
//                                     {
//                                         id: res.data[4].id,
//                                         dateString: res.data[4].dateString,
//                                         name: res.data[4].name,
//                                         username: res.data[4].username,
//                                         verified: res.data[4].verified,
//                                         profile_image_url: res.data[4].profile_image_url,
//                                         tweetString: res.data[4].tweetString,
//                                         url: res.data[4].url,
//                                         type: res.data[4].type,
//                                         like_count: res.data[4].like_count,
//                                         retweet_count: res.data[4].retweet_count,
//                                         url_string: res.data[4].url_string
//                                     },
//                                     {
//                                         id: res.data[5].id,
//                                         dateString: res.data[5].dateString,
//                                         name: res.data[5].name,
//                                         username: res.data[5].username,
//                                         verified: res.data[5].verified,
//                                         profile_image_url: res.data[5].profile_image_url,
//                                         tweetString: res.data[5].tweetString,
//                                         url: res.data[5].url,
//                                         type: res.data[5].type,
//                                         like_count: res.data[5].like_count,
//                                         retweet_count: res.data[5].retweet_count,
//                                         url_string: res.data[5].url_string
//                                     },
//                                     {
//                                         id: res.data[6].id,
//                                         dateString: res.data[6].dateString,
//                                         name: res.data[6].name,
//                                         username: res.data[6].username,
//                                         verified: res.data[6].verified,
//                                         profile_image_url: res.data[6].profile_image_url,
//                                         tweetString: res.data[6].tweetString,
//                                         url: res.data[6].url,
//                                         type: res.data[6].type,
//                                         like_count: res.data[6].like_count,
//                                         retweet_count: res.data[6].retweet_count,
//                                         url_string: res.data[6].url_string
//                                     },
//                                     {
//                                         id: res.data[7].id,
//                                         dateString: res.data[7].dateString,
//                                         name: res.data[7].name,
//                                         username: res.data[7].username,
//                                         verified: res.data[7].verified,
//                                         profile_image_url: res.data[7].profile_image_url,
//                                         tweetString: res.data[7].tweetString,
//                                         url: res.data[7].url,
//                                         type: res.data[7].type,
//                                         like_count: res.data[7].like_count,
//                                         retweet_count: res.data[7].retweet_count,
//                                         url_string: res.data[7].url_string
//                                     },
//                                     {
//                                         id: res.data[8].id,
//                                         dateString: res.data[8].dateString,
//                                         name: res.data[8].name,
//                                         username: res.data[8].username,
//                                         verified: res.data[8].verified,
//                                         profile_image_url: res.data[8].profile_image_url,
//                                         tweetString: res.data[8].tweetString,
//                                         url: res.data[8].url,
//                                         type: res.data[8].type,
//                                         like_count: res.data[8].like_count,
//                                         retweet_count: res.data[8].retweet_count,
//                                         url_string: res.data[8].url_string
//                                     },
//                                     {
//                                         id: res.data[9].id,
//                                         dateString: res.data[9].dateString,
//                                         name: res.data[9].name,
//                                         username: res.data[9].username,
//                                         verified: res.data[9].verified,
//                                         profile_image_url: res.data[9].profile_image_url,
//                                         tweetString: res.data[9].tweetString,
//                                         url: res.data[9].url,
//                                         type: res.data[9].type,
//                                         like_count: res.data[9].like_count,
//                                         retweet_count: res.data[9].retweet_count,
//                                         url_string: res.data[9].url_string
//                                     }
//                                 ])
//                             }
//                             setGetByUserButton(false)
                            
//                             })
                            
//                         })
                    
//                     } 
//             })      
//     } else if (getByContentButton) {
//         searchTweets() 
//                 .then(res=>{
//                     if (Object.keys(res.data).length === 0 || Object.keys(res.data).includes('stack')) {
//                         setErrorValueContent(true)
//                         setGetByContentButton(false)
//                     } else {
//                         setErrorValueAuthorized('')
//                         setSearchresult(
//                             [{
//                                 id: res.data[0].id,
//                                 dateString: res.data[0].dateString,
//                                 name: res.data[0].name,
//                                 username: res.data[0].username,
//                                 verified: res.data[0].verified,
//                                 profile_image_url: res.data[0].profile_image_url,
//                                 tweetString: res.data[0].tweetString,
//                                 url: res.data[0].url,
//                                 type: res.data[0].type,
//                                 like_count: res.data[0].like_count,
//                                 retweet_count: res.data[0].retweet_count,
//                                 url_string: res.data[0].url_string
//                             },
//                             {
//                                 id: res.data[1].id,
//                                 dateString: res.data[1].dateString,
//                                 name: res.data[1].name,
//                                 username: res.data[1].username,
//                                 verified: res.data[1].verified,
//                                 profile_image_url: res.data[1].profile_image_url,
//                                 tweetString: res.data[1].tweetString,
//                                 url: res.data[1].url,
//                                 type: res.data[1].type,
//                                 like_count: res.data[1].like_count,
//                                 retweet_count: res.data[1].retweet_count,
//                                 url_string: res.data[1].url_string
//                             },
//                             {
//                                 id: res.data[2].id,
//                                 dateString: res.data[2].dateString,
//                                 name: res.data[2].name,
//                                 username: res.data[2].username,
//                                 verified: res.data[2].verified,
//                                 profile_image_url: res.data[2].profile_image_url,
//                                 tweetString: res.data[2].tweetString,
//                                 url: res.data[2].url,
//                                 type: res.data[2].type,
//                                 like_count: res.data[2].like_count,
//                                 retweet_count: res.data[2].retweet_count,
//                                 url_string: res.data[2].url_string
//                             },
//                             {
//                                 id: res.data[3].id,
//                                 dateString: res.data[3].dateString,
//                                 name: res.data[3].name,
//                                 username: res.data[3].username,
//                                 verified: res.data[3].verified,
//                                 profile_image_url: res.data[3].profile_image_url,
//                                 tweetString: res.data[3].tweetString,
//                                 url: res.data[3].url,
//                                 type: res.data[3].type,
//                                 like_count: res.data[3].like_count,
//                                 retweet_count: res.data[3].retweet_count,
//                                 url_string: res.data[3].url_string
//                             },
//                             {
//                                 id: res.data[4].id,
//                                 dateString: res.data[4].dateString,
//                                 name: res.data[4].name,
//                                 username: res.data[4].username,
//                                 verified: res.data[4].verified,
//                                 profile_image_url: res.data[4].profile_image_url,
//                                 tweetString: res.data[4].tweetString,
//                                 url: res.data[4].url,
//                                 type: res.data[4].type,
//                                 like_count: res.data[4].like_count,
//                                 retweet_count: res.data[4].retweet_count,
//                                 url_string: res.data[4].url_string
//                             },
//                             {
//                                 id: res.data[5].id,
//                                 dateString: res.data[5].dateString,
//                                 name: res.data[5].name,
//                                 username: res.data[5].username,
//                                 verified: res.data[5].verified,
//                                 profile_image_url: res.data[5].profile_image_url,
//                                 tweetString: res.data[5].tweetString,
//                                 url: res.data[5].url,
//                                 type: res.data[5].type,
//                                 like_count: res.data[5].like_count,
//                                 retweet_count: res.data[5].retweet_count,
//                                 url_string: res.data[5].url_string
//                             },
//                             {
//                                 id: res.data[6].id,
//                                 dateString: res.data[6].dateString,
//                                 name: res.data[6].name,
//                                 username: res.data[6].username,
//                                 verified: res.data[6].verified,
//                                 profile_image_url: res.data[6].profile_image_url,
//                                 tweetString: res.data[6].tweetString,
//                                 url: res.data[6].url,
//                                 type: res.data[6].type,
//                                 like_count: res.data[6].like_count,
//                                 retweet_count: res.data[6].retweet_count,
//                                 url_string: res.data[6].url_string
//                             },
//                             {
//                                 id: res.data[7].id,
//                                 dateString: res.data[7].dateString,
//                                 name: res.data[7].name,
//                                 username: res.data[7].username,
//                                 verified: res.data[7].verified,
//                                 profile_image_url: res.data[7].profile_image_url,
//                                 tweetString: res.data[7].tweetString,
//                                 url: res.data[7].url,
//                                 type: res.data[7].type,
//                                 like_count: res.data[7].like_count,
//                                 retweet_count: res.data[7].retweet_count,
//                                 url_string: res.data[7].url_string
//                             },
//                             {
//                                 id: res.data[8].id,
//                                 dateString: res.data[8].dateString,
//                                 name: res.data[8].name,
//                                 username: res.data[8].username,
//                                 verified: res.data[8].verified,
//                                 profile_image_url: res.data[8].profile_image_url,
//                                 tweetString: res.data[8].tweetString,
//                                 url: res.data[8].url,
//                                 type: res.data[8].type,
//                                 like_count: res.data[8].like_count,
//                                 retweet_count: res.data[8].retweet_count,
//                                 url_string: res.data[8].url_string
//                             },
//                             {
//                                 id: res.data[9].id,
//                                 dateString: res.data[9].dateString,
//                                 name: res.data[9].name,
//                                 username: res.data[9].username,
//                                 verified: res.data[9].verified,
//                                 profile_image_url: res.data[9].profile_image_url,
//                                 tweetString: res.data[9].tweetString,
//                                 url: res.data[9].url,
//                                 type: res.data[9].type,
//                                 like_count: res.data[9].like_count,
//                                 retweet_count: res.data[9].retweet_count,
//                                 url_string: res.data[9].url_string
//                             }
//                         ])
//                         setGetByContentButton(false)
//                     } 
//                 })  
//     } 
// }, [getByUserButton, getByContentButton])

// const tweetCards = searchresult.map((tweet) => { 
//     return <TweetCard key={tweet.id} dateString={tweet.dateString} created_at={tweet.created_at} name={tweet.name} username={tweet.username} 
//     verified={tweet.verified} profile_image_url={tweet.profile_image_url} tweetString={tweet.tweetString} type={tweet.type} url={tweet.url}
//      like_count={tweet.like_count} retweet_count={tweet.retweet_count} url_string={tweet.url_string}
//     />})
   
//     return (
//         <div 
//             className="searchContainer"
//         >
//             <div className="searchBtnsContainer">
//                 <button 
//                     className="searchBtnUser"
//                     onClick={handleClickUser}
//                 >Search by User</button>
//                 <button 
//                     className="searchBtnContent"
//                     onClick={handleClickContent}
//                 >Search by Content</button>
//                 <input 
//                     type="text"     
//                     placeholder="Type search item here..."
//                     value={inputValue}
//                     onChange={event=>setInputValue(event.target.value)}> 
//                 </input>
//             </div>
//             <div className="searchResultContainer">
//                 <div className="searchResult">  

//                 <p>{errorValueUser ? `I couldn't find anyone Twitter by the username ${inputValue}.  May I recommend searching for Marilyn Monroe?` : ``}</p>
//                     <p>{errorValueContent ? `We couldn't find anything under ${inputValue}, but you can shop for tomato soup here.` : ``}</p>
//                     <p>{errorValueCharacters}</p>
//                     <p>{errorValueAuthorized}</p>

//                 {tweetCards}
 
//                 </div> 
//                     <p
//                         className="searchResult_blog"
//                     >Why did I build this?  Read the blog post <a href="https://casspicerblog.netlify.app/blog/15-minutes">here.</a></p> 
//             </div>
//         </div>
//     )
// }