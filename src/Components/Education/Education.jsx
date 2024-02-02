import React from 'react'
import './Education.css'
import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';
import hat from '../../assets/img/education.png'
import work from '../../assets/img/work.png'
import { color } from 'framer-motion';

function Education() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;

  var eduObj =[
    {   title:"Bachelor of Information Technology",
        university:"University of Moratuwa Sri Lanka",
        year :"2020-2024" },

    {   title:"BSc .Business Information Systems(Special)",
        university:"University of Sri Jayewardenepura Sri Lanka",
        year :"2020-2024" },

    {   title:"Institute of Chartered Accountants of Sri Lanka",
        university:"Completed Business Level",
        year :"2019-2021" },

    {   title:"G.C.E Advanced Level - Commerce",
        university:"Rahula College Matara",
        year :"2019" },

  ]


  return (
    <div className='education'>
       <div className="educ-Academic">
                <span  className="Education-Title" style={{color:darkMode?'white':''}}> Education 
                <span className="Education-Title2">  Qualification</span></span>
                <div className="box">
                    <img src={hat} alt="" />
                    <div className="edu-content">
                        <span className="degreetitle">Bachelor of Information Technology
    (External)</span>
                        <span className="university">University of Moratuwa Sri Lanka</span>
                        <span className="year">2020-2023</span>
                        <div className="breakline"></div>
                    </div>
                    <div className="edu-content">
                        <span className="degreetitle">BSc .Business Information Systems(Special)</span>
                        <span className="university">University of Sri Jayewardenepura Sri Lanka</span>
                        <span className="year">2020-2023</span>
                        <div className="breakline"></div>
                    </div>
                    <div className="edu-content">
                        <span className="degreetitle">Institute of Chartered Accountants of Sri Lanka</span>
                        <span className="university">Completed Business Level</span>
                        <span className="year">2019-2021</span>
                        <div className="breakline"></div>
                    </div>
                    <div className="edu-content">
                        <span className="degreetitle">G.C.E Advanced Level - Commerce</span>
                        <span className="university">Rahula College Matara</span>
                        <span className="year">2019</span>
                        
                    </div>
                </div>
       </div>
       <div className="educ-Expirience">
            <span style={{color:darkMode?'white':''}} className="Education-Title workTitle">Work 
            <span  className="Education-Title2"> Expirience</span></span>
            <div className="box">
                    <img src={work} alt="" />
                    <div className="work-content">
                        <span className="degreetitle Jobtitle">Junior Auditor</span>
                        <span className="university">Ernst & Young Sri Lanka</span>
                        <span className="year">2019 – 2021</span>
                       
                    </div>
                </div>
       </div>
    </div>
  )
}

export default Education