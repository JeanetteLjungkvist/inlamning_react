import React, {useEffect} from 'react';
import './App.css';
import { Navbar } from './components';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar/>
    </div>
    </ChakraProvider>
  );
}

export default App;
