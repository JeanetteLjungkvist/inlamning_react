import React, {useEffect} from 'react';
import './App.css';
import { Navbar } from './components';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <div className="App">
      <Navbar/>
      <div className="home-container">
        <h1 className="home-h1">Where do you want to visit?</h1>
        <div className="vertical-center">
          <button className="home-btn"><Link className="home-btn-link"to="/counter">Counter</Link></button>
          <button className="home-btn"><Link to="/list">Todo List</Link></button>
        </div>
      </div>
    </div>
  );
}

export default App;
