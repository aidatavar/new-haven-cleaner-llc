import React from 'react'
import './footer.css'
import image from '../../Assets/clean-room.jpeg'
import { FiSend } from 'react-icons/fi'
import { GiVacuumCleaner } from 'react-icons/gi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'



const Footer = () => {
  return (
    <section className='footer'>
      <div className="imageDiv">
        <img src={image} alt=" a clean leaving room and kitchen" />
      </div>

      <div className="setContent container">
         <div className="contactDiv flex">
           <div className='text'>
             <small>KEEP IN TOUCH</small>
             <h2>Contact us</h2>
           </div>

           <div className="inputDiv flex">
             <input type="text" placeholder='Enter email address'/>
             <button className='btn flex' type='submit'>
               SEND
               <FiSend className="icon"/>
             </button>
           </div>
         </div>

         <div className="footerCard flex">
           <div className="footerIntro flex">
             <div className="logoDiv">
               <a href="#" className='logo flex'>
                 <GiVacuumCleaner className='icon' /> New Haven Cleaners LLC
               </a>
             </div>

             <div className='footerSocials flex'>
             <AiOutlineTwitter className='icon' /> 
             <FaTiktok className='icon' />
             <BiLogoFacebook className='icon' />
             <AiFillInstagram className='icon' />
             </div>
           </div>

           <div className="footerLinks grid">
             {/* Group One */}
             <div className="linkGroup">
               <span className='groupTitle'>
                 ABOUT THE COMPANY
               </span>

               <p>Discover the joy of a spotless space with New Haven Cleaners LLC. Elevate your environment with our expert cleaning services – where excellence meets cleanliness. Experience the difference today!</p>
             </div>
             
            {/* Group two */}
            <div className="linkGroup">
               <span className='groupTitle'>
                 QUICK LINKS
               </span>

               <li className="footerList flex">
                 <FaLocationDot className="icon"/> 51 E Pearl st New Haven, CT 
               </li>
               <li className="footerList flex">
                 <BsFillTelephoneFill className="icon"/>(475) 224-1897
               </li>
               <li className="footerList flex">
                 <MdEmail className="icon"/> info@newhavencleaners.com
               </li>
             </div>
           </div>

           <div className="footerDiv flex">
             <small>COPYRIGHTS RESERVED - AIDA TAVAREZ 2023</small>
           </div>
         </div>
      </div>
    </section>
  )
}

export default Footer 