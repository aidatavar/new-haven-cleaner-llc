import React, {useEffect} from 'react'
import './hero.css'
import image from '../../Assets/clean-home.jpeg'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import { Link } from 'react-router-dom';


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // Scroll animation
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);



  return (
    <section className='hero'>
      <div className='overlay'></div>
      <img src={image} alt="a clean living room"/> 

    <div className='heroContent container'>
      <div className="textDiv">
        <span data-aos="fade-up" className="smallText">
          Our Services
        </span>
        <h1 data-aos="fade-up" className="heroTitle">
          High Quality Home Cleaning Service
        </h1>
      </div>

      <div data-aos="fade-up" className='cardDiv grid'>
            <div className="estimate">
            <h3>Get started with your free estimate</h3>
            <button className='btn'>
              <Link to="/Book">ESTIMATE</Link>
              </button>
            </div>
            <div className="vertical-line"></div>
            <div className="book">
              <h3 >Book with us</h3>
              
            <button className='btn'>
              <a href='https://newhavencleanersllc.simplybook.me/v2/' target="_blank">START BOOKING</a>
              </button>
            </div>

      </div>

    <div data-aos="fade-up" className='heroFooterIcons flex'>
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