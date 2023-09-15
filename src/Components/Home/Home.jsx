import React, {useEffect} from 'react'
import './home.css'
import image from '../../Assets/clean-home.jpeg'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // Scroll animation
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);



  return (
    <section className='home'>
      <div className='overlay'></div>
      <img src={image} alt="a clean living room"/> 

    <div className='homeContent container'>
      <div className="textDiv">
        <span data-aos="fade-up" className="smallText">
          Our Services
        </span>
        <h1 data-aos="fade-up" className="homeTitle">
          High Quality Home Cleaning Service
        </h1>
      </div>

      <div data-aos="fade-up" className='cardDiv grid'>
            <div className="destinationInput">
              <label htmlFor="city">Search your city:</label>
              <div className='input flex'>
                <input type="text" placeholder='Enter your city here...' />
                <GrLocation className='icon'/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="city">Select your date:</label>
              <div className='input flex'>
                <input type="date" />
              </div>
            </div>

            <button className='btn'>
              <a href="#">START BOOKING</a>
              </button>
      </div>

    <div data-aos="fade-up" className='homeFooterIcons flex'>
      <div className='rightIcons'>
        <FiFacebook className='icon'/>
        <BsInstagram className='icon'/>
      </div>

      <div className='leftIcons'>
      <AiTwotoneMail className='icon'/>
        <AiOutlinePhone className='icon'/>
      </div>
    </div>

    </div>
    </section>
  )
}

export default Home;