import './index.css';
import React, {useState} from 'react'
import {BrowserRouter, Link, Router, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'
//import {css} from 'glamor'

// const style = { 
//   MenuLink: {
//     textDecoration: 'none',
//     color: 'black',
//     ':hover': {
//       color: 'indigo',
//       textShadow: '`indigo -2px -2px`'
//     }
//   }
// }

function App() {

//const [color, setColor] = useState('black')
//const [textShadow, setTextShadow] = useState('')
const [hovered, setHovered] = useState('')

function handleHoverOver(event) {
//  // setTextShadow(`indigo -2px -2px`)
//  // setColor('magenta')
 setHovered('hoveredLink')
  console.log(event.target)
 } 

 function handleHoverOut() {
//  // setTextShadow(``)
//  // setColor('black')
  setHovered('')
 }

  return (
    <BrowserRouter>
    <div className="App">
     
      <div className="buttonsContainer">
          <Link to="/search"
            //activeStyle={{color: 'green'}}
            //style={...css(style.MenuLink)}
            style={{
              //color: `${color}`,
              textDecoration: 'none'
              //textShadow: `${textShadow}`
            
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
            className= {hovered}
            
          >Search Tweets</Link>  
          <Link to="/"
            style={{
              //color: `${color}`,
              textDecoration: 'none'
              //textShadow: `${textShadow}`
              
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
            className= {hovered}
          >Home</Link>  
          <Link to="/showcase"
            style={{
              //color: `${color}`,
              textDecoration: 'none'
              //textShadow: `${textShadow}`
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
            className= {hovered}
          >Go to Showcase</Link>  
      </div>
        <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/" element={<Home />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
