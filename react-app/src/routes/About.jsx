import React, {useEffect} from 'react'
import { Navbar } from '../components';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
   <Navbar/>
    </div>
  )
}

export default About