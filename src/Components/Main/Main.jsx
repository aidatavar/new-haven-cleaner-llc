import React, {useEffect} from 'react'
import './main.css'
import {BsFillHouseCheckFill} from 'react-icons/bs'
import {FaHandSparkles} from 'react-icons/fa'
import {BiHomeSmile} from 'react-icons/bi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const main = () => {



  return (
    <section className='main container'>
      <h1 className='title'>How it works?</h1>

      <div className='cardDiv'>
        <div className='item'>
          <BsFillHouseCheckFill className='icon'/>
        <h2 className='subtitle'>BOOK ESTIMATE</h2>
        <span className='small-text'>Select date and time you'd like us to come to your house and will tell you how much it'll cost</span>
        </div>

        <div className='item'>
          <FaHandSparkles className='icon'/>
        <h2 className='subtitle'>CLEAN</h2>

        <span className='small-text'>After we give an estimate professional cleaners will come and clean your home</span>
        </div>

        <div className='item'>
          <BiHomeSmile className='icon'/>
        <h2 className='subtitle'>HAPPY</h2>
        <span className='small-text'>Come to your home and be happy with what we've done to your place!</span>
        </div>
      </div>
    </section>
  )
}

export default main