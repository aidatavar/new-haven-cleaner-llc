import React from 'react'
import './map.css'


const Map = () => {
  return (
    <section className='map grid'>
    <div className="setContent">

    <div className="column">
    <div className="mapContent">
      <h2 >Areas We Serve </h2>
      <div className="listDiv">
          <div className="list">
          <ul>
            <li>New Haven</li>
            <li>East Haven</li>
            <li>West Haven</li>
            <li>Branford</li>
            <li>North Branford</li>
            <li>Guilford</li>
            <li>Madison</li>
            <li>Clinton</li>
            <li>Westbrook</li>
            <li>Stratford</li>
            <li>Fairfield </li>
            <li>Waterbury</li>
        </ul>
          </div>
        
          <div className="list">
          <ul>
            <li>North Haven</li>
            <li>Hamden</li>
            <li>Wallingford</li>
            <li>Northford</li>
            <li>Milford</li>
            <li>Orange</li>
            <li>Shelton</li>
            <li>Derby</li>
            <li>Woodbridge</li>
            <li>Trumbull</li>
            <li>Easton</li>
            <li>Surrounding Areas</li>

        </ul>
          </div>
      </div>
    </div>
    </div>

    <div className="column2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d316989.13455786277!2d-73.24827602968497!3d41.404418306916995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sConnecticut%20cities!5e0!3m2!1sen!2sus!4v1706998482352!5m2!1sen!2sus" 
    width="750" 
    height="450" 
    style={{border:0}}
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
  </section>

  )
}

export default Map