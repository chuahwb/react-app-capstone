import React from 'react'
import '../App.css'
import logo from '../assets/Logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomLink from './CustomLink';

const Footer = (props) => {
  const stylePos = {
    position: "fixed",
    bottom: "0",
    left: "0",
  }

  const stylePad = {
    padding: "1rem 0"
  }

  return (
    <footer>
      <div className='section-footer' style={props.spa ? stylePos : {}}>
        <div className='wrapper'>
          <div className='section-footer-main' style={props.spa ? stylePad : {}}>
            <img src={logo} alt='footer logo' className='footer-logo' />
            <div className='footer-nav-category'>
              <h4 className='category-heading'>Doormat Navigations</h4>
              <CustomLink to="/" className='footer-nav-item'>Home</CustomLink>
              <a href='#about' className='footer-nav-item'>About</a>
              <a href='#menu' className='footer-nav-item'>Menu</a>
              <CustomLink to="/reservations" className='footer-nav-item'>Reservations</CustomLink>
              <CustomLink to="/order-online" className='footer-nav-item'>Order Online</CustomLink>
              <a href='#login' className='footer-nav-item'>Login</a>
            </div>
            <div className='footer-nav-category'>
              <h4 className='category-heading'>Contact</h4>
              <h5>Address</h5>
              <h5>Phone Number</h5>
              <h5>Email</h5>
            </div>
            <div className='footer-nav-category'>
              <h4 className='category-heading'>Social Media Links</h4>
              <div className='footer-icons'>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer