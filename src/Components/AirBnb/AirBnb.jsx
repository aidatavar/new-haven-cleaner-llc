import React from 'react'
import './airBnb.css'
import image01 from '../../Assets/Airbnb.jpeg'
import { Link } from 'react-router-dom'
import image from '../../Assets/apartment.jpeg'
import image2 from '../../Assets/fridgeClean.jpeg'
import image3 from '../../Assets/interiorOven.jpeg'
import image4 from '../../Assets/windowClean.jpeg'

const Airbnb = () => {
  return (
    <section className='airbnb'>
    <header>
      <img src={image01} alt="a clean Airbnb" />
      <div className="content container">
        <div className="cardDiv">
          <h1>MOVE IN / MOVE OUT CLEANING</h1>

        </div>
      </div>
    </header>

    <section className='two-col'>

      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>KITCHEN</h3>
            <ul>
                <li>Clean inside and outside of all appliances</li>
                <li>Clean inside and outside of cabinets and drawers</li>
                <li>Scrub countertops and backsplash</li>
                <li>Clean sink and polish faucet</li>
                <li>Clean interior and exterior fridge (shelves, drawers and walls)</li>
                <li>Clean oven (glass and oven walls)</li>
                <li>Clean interior windows (windows sills, screen, glass and tracks)</li>
                <li>Empty trash bin and replace liner</li>
                <li>Sweep and mop floors</li>
              </ul>
          </div>

          <div className='paragraph'>
              <h3>LIVING ROOM:</h3>
              <ul>
                <li>Dust wall and clean baseboards</li>
                <li>Dust all surfaces</li>
                <li>Sweep and mop hard floors</li>
                <li>Clean light fixtures and ceilings fans</li>
              </ul>

            </div>

        </div>

        <div className='col'>
        <div className='paragraph'>
            <h3>BATHROOM</h3>
            <ul>
            <li>Dust walls and clean baseboards</li>
              <li>Dust walls and dust baseboards</li>
              <li>Clean countertops and faucets</li>
              <li>Clean and disinfect toilets</li>
              <li>Scrub shower and tubs</li>
              <li>Wipe down mirrors</li>
              <li>Clean and shine fixtures</li>
              <li>Sweep and mop floors</li>
              <li>Empty trash bin and replace liner</li>
              </ul>
          </div>

          <div className='paragraph'>
            <h3>BEDROOMS</h3>
            <ul>
                <li>Dust wall and clean baseboards</li>
                <li>Dust all surfaces</li>
                <li>Dust all surfaces</li>
                <li>Vacuum carpets</li>
                <li>Sweep and mop hard floors</li>
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
        <h4>Customize your apartment cleaning</h4>
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
      <h4>Let our certified staff sweat the details so you don’t have to.</h4>

      <button className='btn'>
      <Link to="/Estimate">GET AN ESTIMATE</Link>
      </button>
</div>

  </section>


  )
}

export default Airbnb