import React, {useRef} from 'react'
import './estimate.scss'
import emailjs from '@emailjs/browser';
import image1 from '../../Assets/swip.jpeg'


const Estimate = () => {

  const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d0ckj9a', 'template_x1v034p', form.current, '0iS0IZuVOS7m3DpsV')
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

    <section className='estimate'>

    <header>
          <img src={image1} alt="a clean apartment" />
          <div className="content container">
        <div className="cardDiv">
          <h1>GET AN ESTIMATE</h1>
          <p>Fill out the form, and we'll reach out to schedule a visit to assess your space and provide you with an estimated price.</p>
        </div>
      </div>
        </header>


<section className='form'>
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text"  name="to_name" id="to_name" placeholder='First name' required/>
  <label>Last Name</label>
  <input type="text"  name="to_last_name" id="to_last_name" placeholder='Last name' required/>
  <label>Phone</label>
  <input type="phone" name="phone" id="phone" placeholder='Phone Number' required/>
  <label>Email</label>
  <input type="email" name="email" id="email" placeholder='Email' required/>
  <label>Address</label>
  <input type="address" name="Address" id="Address" placeholder='physical address' required/>
  <label>Message</label>
  <textarea name="message" id="message" placeholder='Anything you would like us to know...' required/>
  <input type="submit" value="Send"/>
</form>
</section>
</section>
  )
}

export default Estimate