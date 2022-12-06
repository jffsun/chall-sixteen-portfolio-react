import logo from './logo.svg';
import './App.css';
// TO DO: Import our components 
import Header from './components/Header';
// import Navigation from './components/Navigation';

// Allows us to split the UI into distinguished parts 
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
