import './index.css';
import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
     
      <div className="buttonsContainer">
          <NavLink exact="true" activeclassname="active" to="/search"
            className= "nav_link"
            
          >Search Tweets</NavLink>  
          <NavLink exact="true" activeclassname="active" to="/"
            className= "nav_link"
          >Home</NavLink>  
          <NavLink exact="true" activeclassname="active" to="/showcase" 
            className= "nav_link"
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
