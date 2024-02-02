import React,{useState} from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  
    const form = useRef();
    const [done,setDone] =useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bqxda3j', 'template_ksgyzsl', form.current, '9tcg6G5nQgbYJye-A')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  

  return (
    <div className="contact-form" id="contact">
      <div className="c-left t-heading">
        <span>Get in touch</span>
        <span>Contact Me</span>
        <div className="blur CBlur1"></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" className='user' placeholder='Name' />
          <input type="email" name="from_name" className='user' placeholder='Email' />
          <textarea name="message" className='user' placeholder='Message' />
          <input type="submit" value="Send" className='button' />
          <span className='thanksmessage'>{done && "Thanks for contacting me"}</span>
          <div className="blur CBlur2" style={{
                    background:'#C1F5FF',
                    top:'0',    
                    width:'21rem',
                    height:'-11rem',
                
                }} >
            </div>
        </form>
      </div>
    </div>

  )
}

export default Contact