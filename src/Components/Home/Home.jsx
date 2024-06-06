import React from 'react'
import image1 from '../../Assets/home.jpeg'
import image2 from '../../Assets/IMG_5201.jpg'
import image3 from '../../Assets/IMG_5051.jpg'
import image4 from '../../Assets/windowClean.jpeg'
import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {
  return (
    <section className='home'>
      <header>
        <img src={image1} alt="a clean home" />
        <div className="content container">
          <div className="cardDiv">
            <h1>RESIDENTIAL DEEP CLEANING</h1>
          </div>
        </div>
      </header>

      <section className='two-col'>
        <div className='mainContent'>
          <div className='col'>
            <div className='paragraph'>
              <h3>KITCHEN</h3>
              <ul>
                <li>Clean countertops and backsplash</li>
                <li>Wipe down all exterior surfaces of appliances (fridge, stove, microwave, dishwasher)</li>
                <li>Clean sink and polish faucet</li>
                <li>Wipe down cabinet exteriors</li>
                <li>Clean inside and outside of microwave</li>
                <li>Clean range hood and filters</li>
                <li>Wipe down table legs, chairs, barstools</li>
                <li>Sweep and mop floors</li>
                <li>Empty trash bin and replace liner</li>
                <li>Clean baseboards</li>
                <li>Clean light fixtures</li>
                
              </ul>

            </div>

            <div className='paragraph'>
              <h3>LIVING ROOM:</h3>
              <ul>
                <li>Clean under and behind furniture</li>
                <li>Swiffer walls and clean baseboards</li>
                <li>Dust all surfaces (furniture, shelves, decor items)</li>
                <li>Vacuum carpets and rugs</li>
                <li>Sweep and mop hard floors</li>
                <li>Clean glass surfaces (tables, mirrors)</li>
                <li>Fluff and strengthen cushions</li>
                <li>Clean light fixtures and ceilings fans</li>
      
                
              </ul>

            </div>

           
          </div>

          <div className='col'>
            <div className='paragraph'>
              <h3>BEDROOMS</h3>
              <ul>
                <li>Clean under and behind furniture</li>
                <li>Dust wall and clean baseboards</li>
                <li>Dust all surfaces (furniture, shelves, decor items)</li>
                <li>Vacuum carpets and rugs</li>
                <li>Sweep and mop hard floors</li>
                <li>Make beds (change liners if agreed with client)</li>
                <li>Clean mirrors</li>
                <li>Empty trash bins</li>
              </ul>
            </div>

            <div className='paragraph'>
              <h3>BATHROOM</h3>
            <ul>
              <li>Clean under and behind furniture</li>
              <li>Dust walls and clean baseboards</li>
              <li>Clean counter tops and faucets</li>
              <li>Wash and disinfect toilets</li>
              <li>Scrub shower and tubs</li>
              <li>Wipe down mirrors</li>
              <li>Clean and shine fixtures</li>
              <li>Sweep and mop floors</li>
              <li>Empty trash bin and replace liner</li>

            </ul>
            </div>

            <div className='paragraph'>
              <h3>ADDITIONAL SERVICE:</h3>
              <p>Laundry</p>
            </div>
           
          </div>
        </div>
      </section>

      <section className='threeCol'>
        <div className='headingCustomize'>
          <h4>Customize your home cleaning</h4>
          <hr />
          <p>Choose Add-ons to supplement your cleaning visits. Now or later, you can enjoy any of these add-ons at any visit</p>
        </div>

        <div className='colContent'>
        <div className='col2'>
          <img src={image3} alt="cleaning an Oven" />
          <h5>Interior Oven Clean</h5>
          <p>Clean all racks, glass and oven walls</p>
        </div>
        <div className='col2'>
          <img src={image2} alt="cleaning a fridge" />
          <h5>Interior Fridge Clean</h5>
          <p>Clean all shelves, drawers and walls</p>
        </div>
        <div className='col2'>
          <img src={image4} alt="cleaning a window" />
          <h5>Interior Window Clean</h5>
          <p>Clean window sills, screens, glass and tracks</p>
        </div>
        </div>
        <hr />
      </section>


      <div className="content">
        <h3>GOOD THINGS TO KNOW:</h3>
        <p>Reliable and friendly staff <br />
    No contract required <br />
    Easy payment options! cash or check <br />
    We can provide the supplies and equipment or you can! Up to you!</p>
    </div>


      <div className='quote '>
      <h3>Let our certified staff sweat the details so you don’t have to.</h3>

      <button className='btn'>
      <Link to="/Estimate">GET AN ESTIMATE</Link>
      </button>

    </div>

    </section>


  )
}

export default Home