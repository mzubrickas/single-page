import React from 'react'
import '../styles/footer.scss'
import { SlGraduation } from 'react-icons/sl'
import { BsApple } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'
import { CgFacebook } from 'react-icons/cg'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='subscribe'>
          <div className='input'>
          <h4>GET IN TOUCH</h4>
          <form>
            <input type="search" placeholder="Your Email"/>
            <button type="submit">Search</button>
          </form>
          </div>
          <div className='allCategories'>
            <div className='list'>
              <h4>ABOUT</h4>
              <ul>
                <li>About Us</li>
                <li>Learner Stories</li>
                <li>Careers</li>
                <li>Presss</li>
                <li>Leadership</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='list'>
              <h4>CATEGORIES</h4>
              <ul>
                <li>Development</li>
                <li>Business</li>
                <li className='link'>Finance & Accounting</li>
                <li>IT & Software</li>
                <li>Office Productivity</li>
                <li>Design</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className='list'>
              <h4 className='hidden'>...</h4>
              <ul>
                <li>Lifestyle</li>
                <li>Photography & Video</li>
                <li>Health & Fitness</li>
                <li>Music</li>
                <li>UX Design</li>
                <li>Seo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='contacts'>
          <div>
            <ul>
              <li className='logo'>
              <SlGraduation />
              </li>
              <li className='brand'>Educrat</li>
            </ul>
          </div>
          <div className='numbers'>
            <div>
              <p>Toll Free Customer Care</p>
              <h4 className='details'>+(1) 123 456 7890</h4>
            </div>
            <div>
              <p>Need live support?</p>
              <h4 className='details'>hi@eduract.com</h4>
            </div>
          </div>
          <div className='stores'>
            <h3>TAKE YOUR LEARNING WITH YOU</h3>
            <div className='center'>
              <div className='storeButton'>
                <div className='logoBrand'><BsApple /></div>
                <div className='logoDetails'>
                  <p>Download on the</p>
                  <h4>Apple Store</h4>
                </div>
              </div>
              <div className='storeButton'>
                <div className='logoBrand'><FaGooglePlay /></div>
                <div className='logoDetails'>
                  <p>Download on the</p>
                  <h4>Apple Store</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='socialMedia'>
            <h3>FOLLOW US ON SOCIAL MEDIA</h3>
            <div className='socialIcons'>
              <div><CgFacebook /></div>
              <div className='special'><BsTwitter /></div>
              <div><AiOutlineInstagram /></div>
              <div><RiLinkedinFill /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer