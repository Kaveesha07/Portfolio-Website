import React from 'react'
import './Navbar.css'
import Toggle from '../../Components/Toggle/Toggle'
import {Link} from 'react-scroll'
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';


function Navbar() {
    const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Kaveesha <span className='n-name lastname'>Pathirana</span></div>
            <Toggle/ >
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to={'home'} smooth={true} activeClass='active'><li style={{color:darkMode?'white':''}}>Home</li></Link>
                    <Link spy={true} to={'services'} smooth={true} activeClass='active'><li style={{color:darkMode?'white':''}}>About</li></Link>
                    <Link spy={true} to={'education'} smooth={true} activeClass='active'><li style={{color:darkMode?'white':''}}>Education</li></Link>
                    <Link spy={true} to={'w-title'} smooth={true} activeClass='active'><li style={{color:darkMode?'white':''}}>Expertise</li></Link>
                    <Link spy={true} to={'portfolio'} smooth={true} activeClass='active'><li style={{color:darkMode?'white':''}}>Portfolio</li></Link>
                    <Link spy={true} to={'contact'} smooth={true} activeClass='active'><button className='button n-button'>
                        Contact 
                    </button></Link>
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar