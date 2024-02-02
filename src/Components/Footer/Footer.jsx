import React from 'react'
import './Footer.css'
import uparrow from '../../assets/img/uparrow.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import {Link} from 'react-scroll'

function Footer() {
  return (
    <div className="footer">
        {/* <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
        <a href="mailto:kaveeshasn@gmail.com"><span >kaveeshasn@gmail.com</span></a>
            <div className="f-icons">
            <a href="https://www.facebook.com/people/Kaveesha ">
            <Facebook color='white' size='3rem'/></a>
            <a href="https://github.com/Kaveesha07">
            <Github color='white' size='3rem'/></a>
            <a href="https://www.linkedin.com/in/kaveesha-pathirana/">
            <Linkdin color='white' size='3rem'/></a>
            </div>

        </div> */}

          <div className="footer-text">
            <p>Copyright   &copy; 2023  by  Kaveesha Pathirana  |  All rights Reserved.</p>
          </div>
          <div class="footer-iconTop">
          <Link spy={true} to={'n-list'} smooth={true} activeClass='active'><img src={uparrow} alt="" /></Link>
          </div>


    </div>
  )
}

export default Footer