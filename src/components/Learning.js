import React from 'react'
import '../styles/learning.scss'
import experts from '../assets/icons/experts.png'
import react from '../assets/icons/react.png'
import education from '../assets/icons/education.png'
import certificate from '../assets/icons/certificate.png'

const Learning = () => {
  return (
    <div id='learning' className='learning'>
      <div className='learningTitle'>
        <h1>Start your Learning Journey Today!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className='cards'>
        <div className='card'>
          <div>
            <img src={experts} alt="three-experts-icon-with-star"/>
          </div>
          <h3>Learn with Experts</h3>
          <p>Etiam ultrices nec felis quis semper. Ut imperdiet leo.</p>
        </div>
        <div className='card'>
          <div>
            <img src={react} alt="react-icon"/>
          </div>
          <h3>Learn Anything</h3>
          <p>Etiam ultrices nec felis quis semper. Ut imperdiet leo.</p>
        </div>
        <div className='card'>
          <div>
            <img src={education} alt="one-person-learning-from-computer-icon" />
          </div>
          <h3>Flexible Learning</h3>
          <p>Etiam ultrices nec felis quis semper. Ut imperdiet leo.</p>
        </div>
        <div className='card'>
          <div>
            <img src={certificate} alt="certificate-icon"/>
          </div>
          <h3>Industrial Standart</h3>
          <p>Etiam ultrices nec felis quis semper. Ut imperdiet leo.</p>
        </div>
      </div>
    </div>
  )
}

export default Learning