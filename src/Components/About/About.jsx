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
          <p> Welcome to New Haven Cleaners LLC, where two sisters lead a dedicated team committed to delivering exceptional cleaning services. As co-owners, we bring our passion for cleanliness and attention to detail to every job. Our goal is to provide reliable, high quality cleaning services that exceed your expectations. With our flexible scheduling and attention to detail, you can rest assured that your home is in capable hands. Your happiness is our top priority. If there's ever anything you're not completely satisfied with, we'll go above and beyond to make it right. </p>
        </div>
      </div>
      </div>

      </div>
    </section>
  )
}

export default About