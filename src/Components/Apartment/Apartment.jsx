import React from 'react'
import './apartment.scss'
import image1 from '../../Assets/apartment.jpeg'
import image2 from '../../Assets/fridgeClean.jpeg'
import image3 from '../../Assets/interiorOven.jpeg'
import image4 from '../../Assets/windowClean.jpeg'
import { Link } from 'react-router-dom'


const Apartment = () => {
  return (
    <section className='apartment'>
    <header>
      <img src={image1} alt="a clean apartment" />
      <div className="content container">
        <div className="cardDiv">
          <h1>Apartment</h1>
          <p>Apartment and Moving cleaning services, customizable to suit your needs.</p>
        </div>
      </div>
    </header>

    <section className='two-col'>
      <div className='mainHeader'>
        <h2>Premium apartment clean</h2>
        <p>Weekly, Biweekly, Monthly or One-Time Cleaning Visits Available</p>
      </div>
      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>KITCHEN</h3>
            <p>Sanitize countertops, sink and backsplash
              Wash exterior of appliances and interior microwave
              Wash any dirty dishes</p>
            <p>Wipe down table legs, chairs, barstools
              Wipe down cabinet exterior
              Wash under sink by garbage
            </p>
          </div>
          <div className='paragraph'>
            <h3>BATHROOM</h3>
            <p>Wipe-wash-polish sinks, tub/shower
              Wipe-wash-polish toilets, base and bowl
              Clean mirrors</p>
            <p>Wipe down cabinet exterior
              Polish all chrome surfaces
              Wipe down baseboards
            </p>
          </div>
        </div>

        <div className='col'>
          <div className='paragraph'>
            <h3>BEDROOMS</h3>
            <p>Quick tidy and pick up
              Dust all surfaces throughout apartment
              Make beds
            </p>
          </div>
          <div className='paragraph'>
            <h3>ENTIRE APARTMENT</h3>
            <p>Quick tidy and pick up
              Dust all surfaces throughout apartment
            </p>
            <p>Wet wipe all surfaces throughout apartment
              Sanitize door knobs and light switches
              Empty All Garbages
              Sweep/Vacuum and Wash All Floors</p>
          </div>
          <div className='paragraph'>
            <h3>PLUS:</h3>
            <p>Wipe down windowsills
              Spot wash interior windows</p>
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

    <section className='two-col'>
      <div className='mainHeader'>
        <h2>MOVING CLEAN</h2>
      </div>
      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>KITCHEN</h3>
            <p>Sanitize countertops, sink and backsplash
              Wash exterior of appliances and interior microwave</p>

          </div>
          <div className='paragraph'>
            <h3>BATHROOM</h3>
            <p>Wipe-wash-polish sinks, tub/shower
              Wipe-wash-polish toilets, base and bowl
              Clean mirrors</p>
          </div>
          <div className='paragraph'>
            <h3>ENTIRE APARTMENT</h3>
            <p>Quick tidy and pick up
              Dust throughout apartment
              Sanitize door knobs and light switches
              Empty All Garbages
              Sweep/Vacuum and Wash All Floors
            </p>
          </div>
          <div className='paragraph'>
            <h3>DEEP CLEANING TASKS</h3>
            <p>Wash reachable light fixtures
              Wash visible baseboards, trim and doors
              Clean floors underneath lightweight furniture
            </p>
          </div>
          <div className='paragraph'>
            <h3>MOVING CLEANING TASKS</h3>
            <p>Wash all vents/wall grates
              Wash interior of all cabinets and drawers
              Wash interior vanities, louvres and closets
            </p>
          </div>
        </div>

        <div className='col'>
        <div className='paragraph'>
            <h3>PLUS:</h3>
            <p>Wipe down table legs, chairs, barstools
              Wipe down cabinet exterior
              Wash under sink by garbage</p>
          </div>

          <div className='paragraph'>
            <h3>PLUS:</h3>
            <p>Wipe down cabinet exterior
              Polish all chrome surfaces
              Wipe down baseboards
            </p>
          </div>

          <div className='paragraph'>
            <h3>PLUS:</h3>
            <p>Wipe down windowsills
              Spot wash walls
              Spot wash interior windows
            </p>
          </div>

          <div className='paragraph'>
            <h3>Recommended Add-ons::</h3>
            <p>Interior Oven Clean
            Interior Fridge Clean
            Complete Interior Window Clean
            </p>
            <p>Maximum height – as far as we can reach with 2-step ladder</p>
          </div>
        </div>
      </div>
    </section>

    <div className="content">
        <h3>GOOD THINGS TO KNOW:</h3>
        <p>Reliable and friendly staff <br />
    No contract required <br />
    Easy payment options! cash or cheque <br />
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

export default Apartment