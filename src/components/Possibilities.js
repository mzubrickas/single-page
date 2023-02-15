import React from 'react'
import '../styles/possibilities.scss'
import account from '../assets/icons/account.png'
import pointer from '../assets/icons/pointer.png'
import play from '../assets/icons/play.png'
import star from '../assets/icons/star.png'

const Possibilities = () => {
  return (
    <div id='posibillities' className='possibilities'>
        <div className='instructions'>

          <div className='title'>
            <h1>How it <span className='special'>Works</span></h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi urna, condimentum nec porta vitae, dictum sit amet velit. Phasellus scelerisque.</p>
          </div>

          <div className='steps'>
            <div className='stepsIcon'>
              <img src={account} alt='account-creation-icon'/>
            </div>
            <div className='stepsText'>
              <h4>Create Account</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi urna, condimentum nec porta vitae.</p>
            </div>
          </div>

          <div className='steps'>
            <div className='stepsIcon'>
              <img src={pointer} alt='pointer-icon'/>
            </div>
            <div className='stepsText'>
              <h4>Select Courses</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi urna, condimentum nec porta vitae.</p>
            </div>
          </div>

          <div className='steps'>
            <div className='stepsIcon'>
              <img src={play} alt='laptop-play-video-icon'/>
            </div>
            <div className='stepsText'>
              <h4>Select Courses</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi urna, condimentum nec porta vitae.</p>
            </div>
          </div>

        </div>
        <div className='information'>
          <div className='bigCircle'>
            <div className='female'>
              <div className='cardFemale'>
                <div className='circleFe'></div>
                <div>
                  <h4>3000 +</h4>
                  <p> Free Courses</p>
                </div>
              </div>
              <div className='male'>
              <div className='cardMale'>
                <div className='circleMe'>
                </div>
                <div>
                  <h4>Ali Tufan</h4>
                  <p>UX/UI Designer</p>
                  <div>
                    <img className='star' src={star} alt='star-icon'/>
                    <img className='star' src={star} alt='star-icon'/>
                    <img className='star' src={star} alt='star-icon'/>
                    <img className='star' src={star} alt='star-icon'/>
                    <img className='star' src={star} alt='star-icon'/>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className='cardOutside'>
                  <div className='circle'></div>
                  <div className='content'>
                    <h4>Congrats!</h4>
                    <p>Your Admission Completed</p>
                  </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Possibilities