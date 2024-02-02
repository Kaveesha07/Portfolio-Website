import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Shoeorder from '../../assets/img/Shoeorder.png'
import Ecommerce from '../../assets/img/Ecommerce.png'
import Attendacne from '../../assets/img/StaffManagementSystem.png'
import Inventory from '../../assets/img/Inventory.png'
import Railway from '../../assets/img/Railway.png'
import Githubblack from '../../assets/img/githubblack.png'

import { themeContext } from '../../Context.jsx';
import { useContext } from 'react';

import 'swiper/css'

function Portfolio() {
    const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="portfolio" id='portfolio'>
        <span style={{color:darkMode?'white':''}}>Recent Project</span>
        <span>Portfolio</span>
        <Swiper 
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >

            <SwiperSlide>
                <a href="./">
                <img src={Attendacne} alt="" />
                </a>
                <span className='title-project' style={{color:darkMode?'white':''}}>Staff Management System <a href="https://github.com/Kaveesha07/attendance_project" target="_blank"><button className='button s-button'><img src={Githubblack} alt="" />View Source Code</button></a></span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="./">
                <img src={Inventory} alt="" />
               </a> 
               <span className='title-project'style={{color:darkMode?'white':''}}>Inventory Management System  <a href="https://github.com/Kaveesha07/Dilma_System" target="_blank"><button className='button s-button'><img src={Githubblack} alt="" />View Source Code</button></a></span>
            </SwiperSlide>
            
            <SwiperSlide>
            <a href="./">
                <img src={Ecommerce} alt="" />
                </a>
                <span className='title-project'style={{color:darkMode?'white':''}}>Ecommerce System <a href="https://github.com/ShoeProject/ShoeProject_1" target="_blank"><button className='button s-button'><img src={Githubblack} alt="" />View Source Code</button></a></span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="./">
                <img src={Railway} alt="" />
                </a>
                <span className='title-project'style={{color:darkMode?'white':''}}>Railway Ticket Management System <a href="https://github.com/Kaveesha07/Railway-Management-System" target="_blank"><button className='button s-button'><img src={Githubblack} alt="" />View Source Code</button></a></span>
                <span className="desc"></span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="./">
                <img src={Shoeorder} alt="" />
                </a>
                <span className='title-project'style={{color:darkMode?'white  ':''}}>Shoe Order Management System <a href="https://github.com/Kaveesha07/Shoe-s-Ordering-System" target="_blank"><button className='button s-button'><img src={Githubblack} alt="" />View Source Code</button></a></span>
                <span className="desc"></span>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Portfolio