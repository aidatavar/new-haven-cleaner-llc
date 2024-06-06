import React, {useEffect} from 'react'
import './hero.css'
import image from '../../Assets/clean-home.jpeg'
import {BsInstagram} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import { FaLinkedin } from "react-icons/fa6";
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
            <Link to="/Estimate">Estimate</Link>
              </button>
            </div>
            <div className="vertical-line"></div>
            <div className="book">
              <h3 >Book with us</h3>
              
            <button className='btn'>
            <a href='https://clienthub.getjobber.com/booking/28438908-1057-463e-b68e-cd396c73af59' target="_blank">START BOOKING</a>

              </button>
            </div>

      </div>

    <div data-aos="fade-up" className='heroFooterIcons flex'>
      <div className='rightIcons'>
      <a href="https://www.instagram.com/newhavencleanersct/?igsh=czJjaGpjZWtlbDM2" target="_blank"><BsInstagram className='icon'/></a>
             <a href="https://www.linkedin.com/in/new-haven-cleaners-b8b6282a8/" target="_blank"><FaLinkedin className='icon'/></a>

      </div>

      <div className='leftIcons'>
      <a href="tel:(475) 224-1897">
              <AiOutlinePhone className="icon"/>
             </a>
             <a href="mailto:info@newhavencleaners.com"> <AiTwotoneMail className="icon"/> </a>
      </div>
    </div>

    </div>
    </section>
  )
}

export default Home;