import React, {useEffect} from 'react';
import './App.css';
import { Navbar } from './components';

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
