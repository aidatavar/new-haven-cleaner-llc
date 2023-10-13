import React from 'react'
import image1 from '../../Assets/book.jpeg'
import 'dayschedule-widget'
import './deposit.scss'

const Deposit = () => {
  return (
    <section className ='deposit'>

    <header >
    <img src={image1} alt="a clean office" />
    <div className="content container">
        <div className="cardDiv">
        <h2>How to Book with Us?</h2>
        </div>
        </div>
      </header>

      <section className='two-col'>
      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>First time client</h3>
            <p>Please complete the "Get a Quote" form below, and we'll schedule a visit to your house to provide a personalized service estimate. <br />
              <span>No required payment!</span> </p>
          </div>
        </div>
        <div className="col">
        <div className='paragraph'>
            <h3>Regular Client </h3>
            <p>Please fill out the deposit form to secure and confirm your appointment. The deposit amount will be deducted from the total cost of your service.</p>
          </div>
        </div>
      </div>
    </section>

   <div className="schedule">    
    <dayschedule-widget url="https://fernanda.dayschedule.com"></dayschedule-widget>
    </div> 

    </section>
  )
}

export default Deposit