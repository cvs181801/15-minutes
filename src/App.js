import './App.css';
import {Link, Router, Switch, Route} from "react-router-dom"
import Showcase from './Showcase'
import Search from './Search'

function App() {
  return (
    <Router>
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
        <button className="searchBtn"><Link to="/search">Search Tweets</Link></button>
        <button className="homeBtn"><Link to="/">Home</Link></button>
        <button className="showcaseBtn"><Link to="/showcase">Go to Showcase</Link></button>

        <Switch>
            <Route path="/search"><Search /></Route>
            <Route path="/"><App /></Route>
            <Route path="/showcase"><Showcase /></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
