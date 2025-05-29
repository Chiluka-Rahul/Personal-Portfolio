import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import {  AnimatePresence } from 'framer-motion';
import Navside from './Navside/Navside';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, Link } from 'react-router-dom';
import './Nav.css'
import SlideUpMulti from './SlideUpMulti';

const Nav = () => {
  const [isActive, setIsActive] = useState(false)
    const location = useLocation();
    const pathname = location.pathname;
    const header = useRef(null);
    const button = useRef(null);
    
    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
      if (!button.current) return;
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out", onComplete: () => setIsActive(false)});}
            }
        })
    }, [])
  return (
    <>
      <div ref={header} className='nav-container'>
        <div className='nav-side-container'>
          <span className='square'></span>
            <SlideUpMulti />
          
        </div>
        <div className='list-container'>
          <ul className='list-items'>
            <li className='list'><span className='list-square'></span><Link to='/about'>About</Link></li>
            <li className='list'><span className='list-square'></span><Link to='/projectFilter'>Projects</Link></li>
            <li className='list'><span className='list-square'></span><Link to='/contact'>Contact Me</Link></li>
          </ul>
        </div>
      </div>
      <div ref={button} className='headerButtonContainer'>
            <div onClick={() => {setIsActive(!isActive)}} className='button'>
                <div className={`burger ${isActive ? 'burgerActive' : ""}`}>
                </div>
            </div>
      </div>
      <AnimatePresence mode="wait">
          {isActive && <Navside />}
      </AnimatePresence>
    </>
    
  )
}

export default Nav