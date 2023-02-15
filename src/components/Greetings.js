import React from 'react'
import '../styles/greetings.scss'
import video from '../assets/videos/video.mp4'

const Greetings = () => {
  return (
    <div id='greetings' className='greetings'>
        <div className='invitation'>
          <h4>Start Learning For Free</h4>
          <h1>Build Data Skills <span>Online</span></h1>
          <p>Data Drives Everything. Get The Skills You Need For The Future Of Work</p>
          <div>
            <button className='joinButton'>Join For Free</button>
            <button className='findButton'>Find Courses</button>
          </div>
        </div>
        <div className='contentVideo'>
          <video className='video' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
            Sorry, your browser doesn't support videos.
          </video>
        </div>
    </div>
  )
}

export default Greetings