import React from 'react'
import './office.css'
import image1 from '../../Assets/office.webp'
import { Link } from 'react-router-dom'


const Office = () => {
  return (
    <section className='office'>
    <header>
      <img src={image1} alt="a clean office" />
      <div className="content container">
        <div className="cardDiv">
          <h1>OFFICE</h1>
        </div>
      </div>
    </header>

    <section className='two-col'>
      <div className='mainHeader'>
        <h2>Our skilled team is committed to fulfilling your tailored task list with each visit. At New Haven Cleaners LLC, we prioritize delivering a stress-free experience. Our dependable and friendly staff is available for daily, weekly, biweekly, or monthly cleaning, based on your preferences.</h2>
        <p>Upon submitting a quote request, we will contact you to perform a walk-through of your space. The walk-through will help us customize your cleaning tasks to suit your office needs.</p>
      </div>
      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>COMMON TASKS COMPLETED:</h3>
            <p>Dust & wipe down all surfaces throughout building (inc. entrances, offices & all other areas)
            Clean & disinfect all staff & client bathrooms
            Disinfect & clean kitchen, if applicable
            Sweep, vacuum & wash floors throughout the building
            Spot wash any noticeable mess on walls, doors etc.
            Windex any fingerprints on windows/doors
            Plus any other essentials we feel are necessary to make your offices shine.
            The cleaning task list will be customized to your space.</p>
          
          </div>
        </div>

        <div className='col'>
          <div className='paragraph'>
            <h3>DEEP CLEANING TASKS:</h3>
            <p>Clean interior windows,
              carpet cleaning, available by request
              Wipe down computer chairs/desk legs.
              Deep Kitchen clean
              Baseboards/casings & doors
            </p>
          </div>
        </div>
      </div>
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

export default Office