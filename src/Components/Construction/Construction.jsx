import React from 'react'
import './Construction.css'
import image1 from '../../Assets/post-construction.jpeg'
import { Link } from 'react-router-dom'


const Construction = () => {
  return (
    <section className='construction'>
    <header>
      <img src={image1} alt="cleaning post-construction house" />
      <div className="content container">
        <div className="cardDiv">
          <h1>POST-CONSTRUCTION</h1>
        </div>
      </div>
    </header>

    <div className="content">
        <h3>Our knowledgeable crew will ensure that our 40-point post-construction cleaning checklist is completed at each and every visit. At New Haven Cleaners we pride ourselves in providing you with a stress-free experience. We know that timelines can be ever changing in the construction industry and we will always do our best to send our reliable crew on your requested dates.</h3>
        <p>Our post-construction is a complete top to bottom clean, covering all nooks and corners inside and out of all surfaces. We specialize in dust clean up! Our checklist is specifically designed to clean up all the dust left behind during construction.</p>
    </div>
    <div className="content">
            <h3>COMMON TASKS COMPLETED:</h3>
            <ul>
              <li>Swiffer all walls</li>
              <li>Dust and wipe down all baseboards/casing/doors</li>
              <li>Clean interior windows (screens, sills, glass and tracks)</li>
              <li>Clean interior and exterior cabinets throughout home</li>
              <li>Clean all interior and exterior of all appliances</li>
              <li>Dust and wipe down all light fixtures</li>
              <li>Wash, scrub all bathrooms, toilets, sinks</li>
              <li>Clean all mirrors and glass throughout home</li>
              <li>Sweep and vacuum all floors</li>
              <li>Vacuum and mop stairs going into basement (if needed)</li>
              <li>Wipe down any built ins, fireplaces, shelves</li>
            </ul>
            <p>Any thing else we find necessary to make it move-in (staging) ready</p>

    </div>
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

export default Construction