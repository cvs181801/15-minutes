
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="contentContainer">
            <h1>15 Minutes</h1>
            <p>A new way to search Twitter. 
              <br/>How will you use your 15 minutes? 
              <br/>Select ‘Go to Showcase’ to browse tweets from celebrities using their fame for good.</p>
          </div>
      </div>
      <div className="buttonsContainer">
        <button className="searchBtn"><a>Search Tweets</a></button>
        <button className="homeBtn"><a>Home</a></button>
        <button className="showcaseBtn"><a>Go to Showcase</a></button>
      </div>
    </div>
  );
}

export default App;
