import './index.css';
import {BrowserRouter, Link, Router, Route, Routes} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <div className="buttonsContainer">
        <Link to="/search">Search Tweets</Link>  {/*<button className="searchBtn"></button> */}
        <Link to="/">Home</Link>  {/*<button className="homeBtn"></button> */}
         <Link to="/showcase">Go to Showcase</Link>  {/*<button className="showcaseBtn"></button> */}

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
