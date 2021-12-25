import './App.css';
import {BrowserRouter, Link, Router, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container">
        <div className="contentContainer">
            <h1>15 Minutes</h1>
            <p>A new way to search Twitter.
            <br/> 
            <br/>
            How will you use your 15 minutes? 
            <br/>
            <br/>
            Select ‘Go to Showcase’ to browse tweets from celebrities using their fame for good.</p>
          </div>
      </div>
      <div className="buttonsContainer">
        <Link to="/search">Search Tweets</Link>  {/*<button className="searchBtn"></button> */}
        <Link to="/">Home</Link>  {/*<button className="homeBtn"></button> */}
         <Link to="/showcase">Go to Showcase</Link>  {/*<button className="showcaseBtn"></button> */}

        <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
