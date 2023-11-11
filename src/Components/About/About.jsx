import React from 'react'
import './about.css'
import image from '../../Assets/house-cleaning-service.jpeg'

const About = () => {
  return (
    <section className='about grid'>
      <div className="setContent">
        <div className="column">
      <img src={image} alt="detergent in a basket" />
      </div>

      <div className="column">
      <div className="aboutContent">
        <h2 >About Us</h2>
        <div className="textDiv">
          <p>Welcome to New Haven Cleaners LLC your space, our expertise. With a commitment to excellence, we turn spaces into pristine sanctuaries. Our reliable team prioritizes punctuality, environmental responsibility, and, above all, your satisfaction. Let us handle the cleaning, so you can focus on what matters most. Trust New Haven Cleaners LLC for a spotless, stress-free environment.</p>
        </div>
      </div>
      </div>

      </div>
    </section>
  )
}

export default About