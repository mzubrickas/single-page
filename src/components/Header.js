import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-scroll'
import { SlGraduation } from 'react-icons/sl'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RiArrowDownSLine } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='header'>
      <nav className='navBar'>
        <ul>
          <li className='logo'>
           <SlGraduation />
          </li>
          <li className='brand'>Educrat</li>
          <li className='explore'></li>
          <li>Explore</li>
        </ul>
        <ul className='mainMenu'>
			    <li>
            <Link
              to='greetings'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home 
            </Link>
          </li>
          <li className='arrowDown'>
            <RiArrowDownSLine />
          </li>
          <li>
            <Link
              to='courses'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Courses
            </Link>
          </li>
          <li className='arrowDown'>
            <RiArrowDownSLine />
          </li>
          <li>
            <Link
              to='posibillities'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Events
            </Link>
          </li>
          <li className='arrowDown'>
            <RiArrowDownSLine />
          </li>
          <li>
            <Link
              to='learning'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Blog
            </Link>
          </li>
          <li className='arrowDown'>
            <RiArrowDownSLine />
          </li>
          <li>
            <Link
              to='categories'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Pages
            </Link>
          </li>
          <li className='arrowDown'>
            <RiArrowDownSLine />
          </li>
          <li>
            <Link
              to='footer'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
		    </ul>
        <ul className='register'>
          <li className='searchParcel'>
            <FiSearch />
          </li>
          <li className='searchParcel'>
            <HiOutlineShoppingBag />
          </li>
          <button id='logIn'>Log in</button>
          <button id='signUp'>Sign Up</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header