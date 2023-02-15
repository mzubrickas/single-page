import React from 'react'
import '../styles/courses.scss'
import { Slider } from './Slider'

const Courses = () => {
  return (
    <div id='courses' className='courses'>
      <div className='sliderTitle'>
        <div>
          <h2>Our Most Popular Courses</h2>
          <p>10,000+ unique online course list designs</p>
        </div>
        <div>
          <button className='sliderButton'>All Courses </button>
        </div>
      </div>
      <Slider />
   </div>
  )
}

export default Courses