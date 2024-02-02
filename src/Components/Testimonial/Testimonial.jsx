import React from 'react'
import './Testimonial.css';
import {Swiper,SwiperSlide} from 'swiper/react'
import profilePic1 from '../../assets/img/profile1.jpg'
import profilePic2 from '../../assets/img/profile2.jpg'
import profilePic3 from '../../assets/img/profile3.jpg'
import profilePic4 from '../../assets/img/profile4.jpg'
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonial() {
    const clients=[
    {
        img:profilePic1,
        reveiew : "Lorem ipsum dolor sit am"
    },
    {
        img:profilePic2,
        reveiew : "Lorem ipsum dolor sit am"
    },
    {
        img:profilePic3,
        reveiew : "Lorem ipsum dolor sit am"
    },
    {
        img:profilePic4,
        reveiew : "Lorem ipsum dolor sit am"
    },
]
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients alwyas get </span>
            <span> Exceptional work </span>
            <span>from me...</span>
            <div className="blur tBlur1"></div>
            <div className="blur tBlur2" style={{
                    background:'#C1F5FF',
                    top:'0',    
                    width:'21rem',
                    height:'-11rem',
                
                }} >
            </div>
        </div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            {clients.map((client,index) =>{ 
            return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.reveiew}</span>
                    </div>
                </SwiperSlide>
            )})}
        </Swiper>
    </div>
  )
}

export default Testimonial