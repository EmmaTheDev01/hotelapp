import React from 'react'
import FooterWhite from './FooterWhite'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <div className='subscribe-section'>
          <div className='contents'>
            <h2>Subscribe to get our best deals</h2>
            <p>Get discounts, deals,updates, rates and tips right into your inbox </p>
            <div className='subscribe-inputs'>
            <input type='text' className='subscribe-field' placeholder='Email address' />
            <button className='subscribe-btn' type='submit'>Subscribe</button>
            </div>
          </div>
      </div>
      <FooterWhite/>
    </div>
  )
}

export default Footer