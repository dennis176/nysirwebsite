import React, { useState } from 'react';
import "../slider/slider.scss"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import SliderData from './SliderData';


const Slider = (slides) => {

  const [current, setCurrent] = useState(0)
  const length = slides.length;

  const nextslide = () => {
    setCurrent(current === length - 1 ? 0 : current +1)
  }

  const prevslide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevslide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextslide} />
      {SliderData.map((slide, index) => {
          
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            { current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
      })} 

    </section>
  )
}

export default Slider