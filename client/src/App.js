import './index.css';
import React, {useState} from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'

function App() {

const [hoveredSearch, setHoveredSearch] = useState('')
const [hoveredHome, setHoveredHome] = useState('')
const [hoveredShow, setHoveredShow] = useState('')

function handleHoverOverSearch() {
  setHoveredSearch('hoveredLink')
 } 

 function handleHoverOutSearch() {
    setHoveredSearch('')
 }

 function handleHoverOverHome() {
  setHoveredHome('hoveredLink')
 } 

 function handleHoverOutHome() {
    setHoveredHome('')
 }

 function handleHoverOverShow() {
  setHoveredShow('hoveredLink')
 } 

 function handleHoverOutShow() {
    setHoveredShow('')
 }

  return (
    <BrowserRouter>
    <div className="App">
     
      <div className="buttonsContainer">
          <NavLink exact="true" activeclassname="active" to="/search"
            style={{
              textDecoration: 'none'
            
            }}
            onMouseEnter={handleHoverOverSearch}
            onMouseLeave={handleHoverOutSearch}
            className= {hoveredSearch}
            
          >Search Tweets</NavLink>  
          <NavLink exact="true" activeclassname="active" to="/"
            style={{
              textDecoration: 'none'
              
            }}
            onMouseEnter={handleHoverOverHome}
            onMouseLeave={handleHoverOutHome}
            className= {hoveredHome}
          >Home</NavLink>  
          <NavLink exact="true" activeclassname="active" to="/showcase"
            style={{
              textDecoration: 'none'
            }}
            onMouseEnter={handleHoverOverShow}
            onMouseLeave={handleHoverOutShow}
            className= {hoveredShow}
          >Go to Showcase</NavLink>  
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
