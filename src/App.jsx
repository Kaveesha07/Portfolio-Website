import { useState } from 'react'
import './App.css'
import Navbar from '../src/Components/Navbar/Navbar'
import Intro from '../src/Components/Intro/Intro';
import Services from './Components/Services/Services';
import Expirience from './Components/Expirience/Expirience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context.jsx';
import { useContext } from 'react';
import Education from './Components/Education/Education.jsx';


function App() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div className='App' 
      style={{background:darkMode ? 'black' :'',
              color:darkMode ?'white' :''
      }}>
      <Navbar />
      <Intro />
      <Services/>
      <Education/>
      <Works />
   
      <Portfolio />
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App
