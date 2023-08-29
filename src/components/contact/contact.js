import React, { useRef } from 'react';
import './contact.css';
import Img1 from '../../assets/walmart.png';
import Img2 from '../../assets/adobe.png';
import Img3 from '../../assets/microsoft.png';
import Img4 from '../../assets/facebook 1.png';
import ImgY from '../../assets/youtube.png';
import ImgF from '../../assets/facebook.png';
import ImgT from '../../assets/twitter.png';
import ImgI from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_geytyak', 'template_q9oe6pn', form.current, 'T6aJVCHRf1wZ12f2vrsl9')
           .then((result) => {
              console.log(result.text);
              alert('Email sent successfully');
              e.target.reset();
           }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDescription">I have the opeertunity to work with
            a diverse group of companies.Some of the notable companies I have worked with 
            includes,</p>

            <div className="clientImgs">
                <img src={Img1} alt="client" className="clientImg" />
                <img src={Img2} alt="client" className="clientImg" />
                <img src={Img3} alt="client" className="clientImg" />
                <img src={Img4} alt="client" className="clientImg" />
            </div>

        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDiscription'>Please fill out the form below
            to discuss any work oppertunities</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name='your_email' />
                <textarea name="message" rows="5" placeholder='Your Message' className='msg' ></textarea>
                <button type='Submit' value='Send' className="submitBtn">Submit</button>

                <div className="links">
                <img src={ImgF} alt="" className="link" />
                <img src={ImgT} alt="" className="link" />
                <img src={ImgY} alt="" className="link" />
                <img src={ImgI} alt="" className="link" />
                </div>
            </form>

        </div>

    </section>
  );
}

export default Contact;
