import React from 'react'
import './index.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-inner-container'>
            <div className='footer-copyright'>
                <span>@2024 Copyright Chiluka Rahul</span>
            </div>
            <div className='footer-side-links'>
                <a href='https://www.linkedin.com/in/chiluka-rahul-0a255b231/' className='footer-inner-links'>LinkedIn</a>
                <a href='https://github.com/Chiluka-Rahul' className='footer-inner-links'>Github</a>
                <a href='https://www.behance.net/rahulchiluka' className='footer-inner-links'>Behance</a>
                <a href='https://codeforces.com/profile/_rahul11_' className='footer-inner-links'>Codeforces</a>
                <a href='https://leetcode.com/u/rahulchiluka2511/' className='footer-inner-links'>Leetcode</a>
            </div>
        </div>
    </div>
  )
}

export default Footer