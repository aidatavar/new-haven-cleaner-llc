import React from 'react'
import './footer.css'
import image from '../../Assets/clean-room.jpeg'
import logo from '../../Assets/logo.png'
import { FiSend } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'



const Footer = () => {
  return (
    <section className='footer'>
      <div className="imageDiv">
        <img src={image} alt=" a clean leaving room and kitchen" />
      </div>

      <div className="setContent container">

         <div className="footerCard flex">
           <div className="footerIntro flex">
             <div className="logoDiv">
               <a href="#" className='logo flex'>
                 <img src={logo} alt="logo" />
                  New Haven Cleaners LLC
               </a>
             </div>

             <div className='footerSocials flex\'>
             <AiOutlineTwitter className='icon' /> 
             <FaTiktok className='icon' />
             <BiLogoFacebook className='icon' />
             <AiFillInstagram className='icon' />
             </div>
           </div>

           <div className="footerLinks">
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
                 <BsFillTelephoneFill className="icon"/><span>(475) 224-1897</span>
               </li>
               <li className="footerList flex">
                 <MdEmail className="icon"/> <span>info@newhavencleaners.com</span>
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