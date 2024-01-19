import React from 'react'
import './footer.css'
import image from '../../Assets/clean-room.jpeg'
import logo from '../../Assets/logo.png'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";




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

             <div className='footerSocials flex'>
             <a href="https://www.instagram.com/newhavencleanersct/?igsh=czJjaGpjZWtlbDM2"><AiFillInstagram className='icon'/></a>
             <a href="https://www.instagram.com/newhavencleanersct/?igsh=czJjaGpjZWtlbDM2"><FaLinkedin className='icon'/></a>
             <a href="tel:(475) 224-1897">
              <BsFillTelephoneFill className="icon"/>
             </a>
             <a href="mailto:info@newhavencleaners.com"> <MdEmail className="icon"/> </a>
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
            
               <li className="footerList">
                <a href="tel:(475) 224-1897">
                 <BsFillTelephoneFill className="icon"/>
                 </a>
               </li>
               <li className="footerList">
                 <a href="mailto:info@newhavencleaners.com"> <MdEmail className="icon"/> </a>
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