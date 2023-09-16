import React from 'react'
import './about.css'
import image from '../../Assets/about.jpeg'

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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eos totam nisi, nulla fuga doloremque numquam debitis veritatis vel officiis commodi sit repellat exercitationem corrupti quae? Officia maxime aliquam eum!</p>
        </div>
      </div>
      </div>

      </div>
    </section>
  )
}

export default About