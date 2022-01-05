import './index.css';
import React, {useState} from 'react'
import {BrowserRouter, Link, Router, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'

function App() {

const [color, setColor] = useState('black')
const [textShadow, setTextShadow] = useState('')

function handleHover() {
  setTextShadow(`indigo -2px -2px`)
} //need to find a way to integrate both color effects into single function

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
          onMouseEnter={()=>setColor('magenta')}
          onMouseLeave={()=>setColor('black')}
          
        >Search Tweets</Link>  
        <Link to="/"
          style={{
            color: `${color}`,
            textDecoration: 'none',
            textShadow: `${textShadow}`
          }}
          onMouseEnter={()=>setColor('magenta')}
          onMouseLeave={()=>setColor('black')}
        >Home</Link>  
        <Link to="/showcase"
          style={{
            color: `${color}`,
            textDecoration: 'none',
            textShadow: `${textShadow}`
          }}
          onMouseEnter={()=>setColor('magenta')}
          onMouseLeave={()=>setColor('black')}
        >Go to Showcase</Link>  

        <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
