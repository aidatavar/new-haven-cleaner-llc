import React, {useState} from 'react'
import './work.scss'
import {images} from "../Helper/galleryData"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";


const Work = () => {

  const[ slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // previews image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber(images.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  };

  // next image
  const nextSlide = () => {
    slideNumber + 1 === images.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  };


  return (

          <body className='work'>
      <header>
        <h1>Before and after cleaning pictures</h1>
      </header>

      <section >

        <div className='paragraph'>
          <p>Below you will see some examples of the work performed by New Haven Cleaners LLC. Please browse our portfolio of these before and after images to see how New Haven Cleaners LLC can make your living space pristine!

          </p>
        </div>

        {openModal && 
          <div className="sliderWrap">
            <FaRegCircleXmark className='btnClose'onClick={handleCloseModal}/>
            <FaAngleLeft className="btnPrev" onClick={prevSlide}/>
            <FaAngleRight className="btnNext" onClick={nextSlide}/>
            <div className="fullScreenImage" >
              <img src={images[slideNumber].img} alt="" />
            </div>
          </div>

        }

        <div className="gallery flex">
        {
          images && images.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
        </div>

    </section>
    </body>
  )
}

export default Work