import React, {useRef} from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';
import image1 from '../../Assets/windowClean.jpeg'


const Contact = () => {

      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d0ckj9a', 'template_wo7g32p', form.current, '0iS0IZuVOS7m3DpsV')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
              window.location.reload(false)
          }, (error) => {
              console.log(error.text);
              alert('Failed to send message, please try again');
          });
      };

    
      return (
        <section className='contact'>
           
            
            <header>
          <img src={image1} alt="a clean apartment" />
          <div className="content container">
        <div className="cardDiv">
        <h1>Contact Us</h1>
        </div>
      </div>
        </header>

      <section className='form'>

      <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text"  name="to_name" id="to_name" required/>
          <label>Email</label>
          <input type="email" name="from_name" id="from_name" required/>
          <label>Message</label>
          <textarea name="message" id="message" required/>
          <input type="submit" value="Send"/>
        </form>
      </section>
    
        </section>
      );
    };

export default Contact

