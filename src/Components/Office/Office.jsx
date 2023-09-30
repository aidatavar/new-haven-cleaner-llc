import React from 'react'
import './office.css'
import image1 from '../../Assets/office.webp'


const Office = () => {
  return (
    <section className='office'>
    <header>
      <img src={image1} alt="a clean office" />
      <div className="content container">
        <div className="cardDiv">
          <h1>Office</h1>
          <p>Office cleaning services, customizable to suit your needs.</p>
        </div>
      </div>
    </header>

    <section className='two-col'>
      <div className='mainHeader'>
        <h2>Premium office clean</h2>
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
              Dust all surfaces throughout office
              Make beds
            </p>
          </div>
          <div className='paragraph'>
            <h3>ENTIRE OFFICE</h3>
            <p>Quick tidy and pick up
              Dust all surfaces throughout office
            </p>
            <p>Wet wipe all surfaces throughout office
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

  </section>

  )
}

export default Office