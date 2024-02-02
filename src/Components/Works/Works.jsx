import React from "react";
import './Works.css'
import Reactlg from '../../assets/img/react.png';
import Csharp from '../../assets/img/Csharp.png';
import Mongo from '../../assets/img/mongodb.png';
import AWS from '../../assets/img/aws.png';
import Docker from '../../assets/img/docker.png';
import Java from '../../assets/img/java.png';
import PHP from '../../assets/img/php.png';
import Javascript from '../../assets/img/javascript.png';
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';
import {motion, spring} from 'framer-motion'

function Works() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;

  return (
    <div className="works">
      <div className="s-awsomes">
      <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "55rem",
            width: "21rem",
            height: "-11rem",
            left: "-12rem",
          }}
        ></div>
        <span class="w-title" style={{color:darkMode?'white':''}}>My <span className="title2">Expertise</span></span>
        <div className="skills">
          <div className="skill programing-skills"><span style={{color:darkMode?'white':''}}>Programming <span> Skills</span></span>
            <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}> </span>
              <div className="p-skill">
                <div className="skillname react">
                  <img src={Reactlg} alt="" /><span>React JS</span>
                </div>
                <div className="progressbar react">
                  <span></span>
                </div>
              </div>
              <div className="p-skill">
                <div className="skillname csharp">
                  <img src={Csharp} alt="" /><span>C#</span>
                </div>
                <div className="progressbar csharp">
                <span></span>
                </div>
              </div>
              <div className="p-skill">
                <div className="skillname php">
                  <img src={PHP} alt="" /><span>PHP</span>
                </div>
                <div className="progressbar php">
                <span></span>
                </div>
              </div>
              <div className="p-skill">
                <div className="skillname java">
                  <img src={Java} alt="" /><span>Java</span>
                </div>
                <div className="progressbar java">
                <span></span>
                </div>
              </div>
              <div className="p-skill">
                <div className="skillname python">
                  <img src={AWS} alt="" /><span>Python</span>
                </div>
                <div className="progressbar python">
                <span></span>
                </div>
              </div>
              <div className="p-skill">
                <div className="skillname javascript">
                  <img src={Javascript} alt="" /><span>Javascript</span>
                </div>
                <div className="progressbar javascript">
                <span></span>
                </div>
              </div>
           
          </div>
        <div className="tools-tech">
          <span>Software Tools and Technologies</span>
          <div className="tools">
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>Microsoft Azure</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>AWS</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>JIRA</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>Selenium</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>JMeter</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>Docker</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>Android Studio</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>MySQL</span>
            </div>
          </div>
          <div className="tool">
            <div className="title">
              <span className="desc" style={{color:darkMode?'var(--whitelow)':''}}>MongoDB</span>
            </div>
          </div>
          </div>
        </div>
        <div className="soft-skills">
            <div className="s-title"><span>Soft skills</span></div>
          <div className="s-skills">
            <div className="skill">
              <span className="skill-desc" style={{color:darkMode?'var(--whitelow)':''}}>
              Leadership Skills</span>
            </div>
            <div className="skill">
              <span className="skill-desc" style={{color:darkMode?'var(--whitelow)':''}}>
              Critical Thinking</span>
            </div>
            <div className="skill">
              <span className="skill-desc" style={{color:darkMode?'var(--whitelow)':''}}>
              Good Team Player</span>
            </div>
            <div className="skill">
              <span className="skill-desc" style={{color:darkMode?'var(--whitelow)':''}}>
              Time Management</span>
            </div>
            <div className="skill">
              <span className="skill-desc" style={{color:darkMode?'var(--whitelow)':''}}>
              Problem Solving
              </span>
            </div>
        </div>
        </div>
        </div>
      </div>
      <div className="w-right" id="work">
        <motion.div 
        initial={{rotate:60}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-mainCircle">
            <div className="secondaryCircle">
              <img src={Csharp} alt="" />
            </div>
            <div className="secondaryCircle">
              <img src={Reactlg} alt="" />
            </div>
            <div className="secondaryCircle">
              <img src={Java} alt="" />
            </div>
            <div className="secondaryCircle">
              <img src={AWS} alt="" />
            </div>
            <div className="secondaryCircle">
              <img src={PHP} alt="" />
            </div>
        </motion.div>
        <div className="w-backCircle blue"></div>
        <div className="w-backCircle yellow"></div>
      </div>
    </div>
 
  );
}

export default Works;
