import React, {useRef} from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';


const Contact = () => {

      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d0ckj9a', 'template_wo7g32p', form.current, '0iS0IZuVOS7m3DpsV')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };
    
      return (
        <section className='contact'>
            <h1>Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text"  name="to_name" id="to_name"/>
          <label>Email</label>
          <input type="email" name="from_name" id="from_name"/>
          <label>Message</label>
          <textarea name="message" id="message" />
          <input type="submit" value="Send" />
        </form>
        </section>
      );
    };

export default Contact

