import React from 'react'
import './Construction.css'
import image1 from '../../Assets/post-construction.jpeg'

const Construction = () => {
  return (
    <section className='construction'>
    <header>
      <img src={image1} alt="cleaning post-construction house" />
      <div className="content container">
        <div className="cardDiv">
          <h1>Post-construction</h1>
          <p>A contractor in need of cleaning a new-build or a home owner fighting with reno dust we are ready to make your work shine.</p>
        </div>
      </div>
    </header>

    <div className="content">
        <h3>Our knowledgeable crew will ensure that our 40-point post-construction cleaning checklist is completed at each and every visit. At New Haven Cleaners we pride ourselves in providing you with a stress-free experience. We know that timelines can be ever changing in the construction industry and we will always do our best to send our reliable crew on your requested dates.</h3>
        <p>Our post-construction is a complete top to bottom clean, covering all nooks and corners inside and out of all surfaces. We specialize in dust clean up! Our checklist is specifically designed to clean up all the dust left behind during construction.</p>
    </div>
    <div className="content">
            <h3>COMMON TASKS COMPLETED:</h3>
            <p>
            Swifter all walls (dry mop) <br />
            Dust and wipe down all baseboards/casing/doors <br />
            Clean interior windows (screens, sills, glass and tracks) <br />
            Clean interior and exterior cabinets throughout home <br />
            Clean all interior and exterior of all appliances <br />
            Dust and wipe down all light fixtures <br />
            Wash, scrub and sanitize all bathrooms (toilets, baths, sinks) <br />
            Clean all mirrors and glass throughout home <br />
            Sweep/vacuum and wash all floors <br />
            Vacuum and mop stairs going into basement (if needed) <br />
            Wipe down any louvres, fireplaces, shelves, built-ins etc. <br />

           Any thing else we find necessary to make it move-in (staging) ready</p>

    </div>
    <div className="content">
        <h3>GOOD THINGS TO KNOW:</h3>
        <p>Reliable and friendly staff <br />
    No contract required <br />
    Easy payment options! credit card (auto-charge available), cash or cheque <br />
    We can provide the supplies and equipment or you can! Up to you!</p>
    </div>
    </section>
  )
}

export default Construction