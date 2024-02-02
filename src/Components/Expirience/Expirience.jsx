import React from 'react'
import './Expirience.css'
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';


function Expirience() {
    const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="expirience" style={{color:darkMode?'var(--black':''}}>
        <div className="achievement">
            <div className="circle" style={{boxShadow:darkMode?'var(--boxShadow2)':''}}>
                8+
            </div>
            <span style={{color:darkMode?'white':''}}>Years</span>
            <span>Expirience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{boxShadow:darkMode?'var(--boxShadow2)':''}}>
                20+
            </div>
            <span style={{color:darkMode?'white':''}}>completed</span>
            <span >Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{boxShadow:darkMode?'var(--boxShadow2)':''}}>
                8+
            </div>
            <span style={{color:darkMode?'white':''}}>Years</span>
            <span>Expirience</span>
        </div>
    </div>
  )
}

export default Expirience