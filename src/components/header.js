import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-container1">
            <Link to="/" className="header-navlink">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header-image"
              />
            </Link>
            <Link to="/" className="header-navlink01">
              Merkaba Mushrooms
            </Link>
          </div>
          <div className="header-menu">
            <Link to="/about-us" className="header-navlink02">
              <span className="Large header-text">About Us</span>
              <br className=""></br>
            </Link>
            <Link to="/coming-soon" className="header-navlink03 Large">
              Coming Soon
            </Link>
            <Link to="/learn" className="header-navlink04 Large">
              Learn
            </Link>
            <Link to="/shop" className="header-navlink05">
              <span className="Large header-text2">Shop</span>
              <br className=""></br>
            </Link>
          </div>
          <div className="header-container2">
            <div className="header-container3">
              <Link to="/shop" className="header-navlink06">
                <PrimaryPinkButton
                  button="buy now"
                  className="header-component"
                ></PrimaryPinkButton>
              </Link>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink07 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink08 Large">
              Home
            </Link>
            <Link to="/about-us" className="header-navlink09 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink10 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_src: '/playground_assets/merkaba%20mushrooms%20logo-200w.png',
  image_alt: 'image',
  rootClassName: '',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
