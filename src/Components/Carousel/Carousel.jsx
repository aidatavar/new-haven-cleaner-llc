import React, {useState, useEffect} from 'react'
import './carousel.css'
import { images } from '../Helper/carouselData'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'

const Carousel = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      if (currentImg === images.length - 1) {
          setCurrentImg(0);  
          // Go back to the first image when the end is reached
      } else {
          setCurrentImg(currentImg + 1);
      }
  }

  const prevSlide = () => {
    if (currentImg === 0) {
        setCurrentImg(images.length - 1);  
        // Go to the last image when the beginning is reached
    } else {
        setCurrentImg(currentImg - 1);
    }
}
  
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

    useEffect(() => {
      setCurrentImg(0)
    }, [])

    useEffect(() => {
      if (autoScroll) {
        auto()
      }
      return () => clearInterval(slideInterval)
    }, [currentImg])

  return (
    <div className='carousel flex'>

        <div className="carouselInner" style={{backgroundImage: `url(${images[currentImg].img})`}}>

            <div className="left grid"
             onClick={prevSlide}>

              <AiOutlineLeft className='icon'/>
            </div>
            <div className='spaceBetween'>
            <div className="center">
              <div className="cardDiv">
              <h1>{images[currentImg].title}</h1>
              <p>{images[currentImg].paragraph}</p>
              <button className='btn'>{images[currentImg].button}</button>
              </div>
            </div>
            </div>
            <div className="right grid"
              onClick={nextSlide}>

              <AiOutlineRight className='icon'/>
            </div>
        </div>

    </div>
  )
}

export default Carousel
