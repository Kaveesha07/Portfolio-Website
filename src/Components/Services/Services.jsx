import React from 'react'
import './Services.css'
import Boy4 from '../../assets/img/boy4.png'
import Card from '../../Components/Card/Card'
import LinkedIn from '../../assets/img/linkedin.png'
import Resume from '../../assets/KaveeshaPathiranaCV.pdf'
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';

function Services() {
    const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="services" id="services">
        <div className="s-awsome">
        <div className="blur" style={{
                    background:'#C1F5FF',
                    top:'55rem',
                    width:'21rem',
                    height:'-11rem',
                    left:'-12rem'
                }} >
        </div>
            <span style={{color:darkMode?'white':''}}>About  
                <span  className="serviceTxt"> Me</span></span>
            <br />
            <span class="servicdesc" style={{color:darkMode?'var(--lowWhite)':''}}>
            Hi, my name is Kaveesha Pathirana and I'm a driven and enthusiastic undergraduate student currently studying Business Information Systems at the University of Sri Jayewardenepura and Information Technology at Moratuwa University.<br/>

            Furthermore, I have practical experience in web development and desktop application development, with proficiency in programming languages such as Java and C#. <br/>

            I'm constantly seeking to improve my skills and stay up-to-date with the latest industry trends. My passion for technology has driven me to pursue a career in this field, and I'm excited to see what the future holds for me.

            </span>
            <br />
            <a href={Resume} download>     
                <button className="button s-button">
                    Download CV
                </button>
            </a>
            
        </div>
        <div className="cards">
           <div className="card-style3">
                <Card 
                    icon={LinkedIn}
                    emoji={Boy4}
                />
           </div>
           <div className="blur" >
                </div>
        </div>
        
            
    </div>
  )
}

export default Services