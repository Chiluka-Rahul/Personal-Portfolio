import React from 'react'
import smile from '../../assets/smile.gif'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import './index.css'


const ListMenu = ({children}) => {
  const DURATION = 0.2;
  const STRAGGER = 0.025;
  return (
    <motion.li initial = "initial" whileHover = "hovered" className='text-hover-connect-button'>
      <div className='text-get-touch'>
        {children.split("").map((l,i) => {
          return <motion.span variants = {{initial: {y:0}, hovered: {y: "-100%"}}} transition={{ease : "easeInOut", duration : DURATION, delay: STRAGGER * i}} key={i} className='inline-span'>{l === ' ' ? '\u00A0' : l}</motion.span>
        })}
      </div>
      <div className='another-text-get-touch'>
        {children.split("").map((l,i) => {
          return <motion.span variants = {{initial: {y:"100%"}, hovered: {y: 0}}} transition={{ease : "easeInOut", duration : DURATION, delay: STRAGGER * i}} key={i} className='inline-span'>{l === ' ' ? '\u00A0' : l}</motion.span>
        })}
      </div>
    </motion.li>
  )
}


const Connect = () => {
  return (
    <div className='connect-container'>
      <div className='touch-container'>
        <div className='connect-inner-container'>
          <img src={smile} alt="smile" />
          <h1>Let's Connect</h1>
        </div>
        <hr className='hr-connect'/>
        <div className='connect-detail-container'>
          <div className='connect-in-detail'>
            <p>Email: <span>rrrchilukas@gmail.com</span></p>
            <p>Phone No: <span>+91 9381476757 / +91 9390237379</span></p>
          </div>
              <Link to={'/contact'}>
                <div className='gettouch-button'>
                  <ListMenu>
                      Get Touch
                  </ListMenu>
                </div>
              </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Connect