import React, {useEffect} from 'react'
import { Navbar, Counter } from '../components';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  
  return (
    <div>
   <Navbar/>
   <Counter/>
    </div>
  )
}

export default About