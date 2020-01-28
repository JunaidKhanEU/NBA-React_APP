import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import paths from '../utils/paths'

const sliderSetting = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const SliderComponent = () => {
  const [slides, setSlides] = useState([])
  useEffect(() => {
    const getSlides = async () => {
      try {
        const result = await axios.get(paths.URLSLIDES)
        setSlides(result.data)
      } catch (err) {
        console.log(err)
      }
    }
    getSlides()
  }, [])
  return (
    <>
      {
        slides &&
          <Slider {...sliderSetting}>
            {slides.map(slide => (
              <div key={slide.id}>
                <div className='item_slider' style={{ background: `url(/images/covers/${slide.cover})` }}>
                  <div className='caption-slider'>
                    <h4>{slide.topic}</h4>
                    <p>{slide.title}</p>
                  </div>
                </div>
              </div>))}
          </Slider>
      }

    </>
  )
}

export default SliderComponent
