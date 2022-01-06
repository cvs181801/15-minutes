import './index.css';
import React, {useState} from 'react'
import {BrowserRouter, Link, Router, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'

function App() {

const [color, setColor] = useState('black')
const [textShadow, setTextShadow] = useState('')

function handleHoverOver() {
  setTextShadow(`indigo -2px -2px`)
  setColor('magenta')
} 

function handleHoverOut() {
  setTextShadow(``)
  setColor('black')
}

  return (
    <BrowserRouter>
    <div className="App">
     
      <div className="buttonsContainer">
          <Link to="/search"
            style={{
              color: `${color}`,
              textDecoration: 'none',
              textShadow: `${textShadow}`
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
            
          >Search Tweets</Link>  
          <Link to="/"
            style={{
              color: `${color}`,
              textDecoration: 'none',
              textShadow: `${textShadow}`
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
          >Home</Link>  
          <Link to="/showcase"
            style={{
              color: `${color}`,
              textDecoration: 'none',
              textShadow: `${textShadow}`
            }}
            onMouseEnter={handleHoverOver}
            onMouseLeave={handleHoverOut}
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
