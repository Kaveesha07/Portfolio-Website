import React from 'react';
import './Intro.css';
import Github from '../../assets/img/github.png'
import LinkedIn from '../../assets/img/linkedin.png'
import Instagram from '../../assets/img/instagram.png'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector3.png'
import boy from '../../assets/img/boy3.png'
import thumbup from '../../assets/img/thumbup.png'
import crown from '../../assets/img/crown.png'
import glassesimoji from '../../assets/img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';
import {motion} from 'framer-motion';

function Intro() {
    const transition = {duration :2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hello ,It's Me</span>
                <span>Kaveesha Pathirana</span>
                <span style={{color:darkMode?'var(--lowWhite)':''}}>Undergraduate student | Skills in | ReactJS | PHP | C# | JAVA |</span>
            </div>
            <a href="tel:+94705044501"><button className="button i-button">
                Hire Me
            </button></a>
            <div className="i-icons">
                <a href="https://github.com/Kaveesha07">
                <img src={Github} alt="Github.png" /></a>
                <a href="https://www.linkedin.com/in/kaveesha-pathirana/">
                <img src={LinkedIn} alt="Linkdin.png" /></a>
                <a href="https://www.facebook.com/people/Kaveesha ">
                <img src={Instagram} alt="instagram.png" /></a>
            </div>
        </div>
        <div className="i-right" id='home'>
                <img 
                 src={Vector1} alt="" />
                <img 
                src={Vector2} alt="" />
                <img 
                src={boy} alt="" />
                <motion.img
                    initial={{left:'-36%'}}
                    whileInView={{left:'-24%'}}
                    transition={transition}
                src={glassesimoji} alt="" />
                
                <motion.div
                    initial={{top:'-4%',left:'74%'}}
                    whileInView={{left:'68%'}}
                    transition={transition}
                style={{top:'-15%', left:'68%',color:darkMode?'var(--black)':''}} className='floating-div'>
                    <FloatingDiv image={crown} text1='Web' text2='Developer' />
                </motion.div>
                <motion.div 
                initial={{top:'18rem',left:'-8rem'}}
                whileInView={{left:'-4rem'}}
                transition={transition}
                style={{top:'65%', left:'-20%',color:darkMode?'var(--black)':''}} className='floating-div'>
                    <FloatingDiv image={thumbup} text1='Better' text2='Service'/>
                </motion.div>
                <div className="blur" >
                </div>
                <div className="blur" style={{
                    background:'#C1F5FF',
                    top:'15rem',
                    width:'21rem',
                    height:'-11rem',
                    left:'-12rem'
                }} >
                </div>
        </div>
    </div>
  )
}

export default Intro