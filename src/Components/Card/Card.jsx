import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className="card">
        <img src={props.emoji} alt="" />
        {/* <span>{props.heading}</span>
        <span>{props.detail}</span> */}
        <a href="https://www.linkedin.com/in/kaveesha-pathirana/"><button class="button"><img src={props.icon} alt="" className="l-icon"/>LinkedIn</button></a>
    </div>
  )
}

export default Card