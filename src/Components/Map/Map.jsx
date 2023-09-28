import React from 'react'
import './map.css'
import image from '../../Assets/map.png'

const Map = () => {
  return (

    <section className='map grid'>
    <div className="setContent">
    <div className="column">
    <img src={image} alt="new haven map" />
    </div>
    <div className="column">
    <div className="mapContent">
      <h2 >Areas We Serve </h2>
      <div className="listDiv">
          <div className="list">
          <ul>
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
            <li>Surrounding Areas</li>
        </ul>
          </div>
      </div>
    </div>
    </div>

    </div>
  </section>
  )
}

export default Map