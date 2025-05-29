import React,{useEffect, useState} from "react";
import {motion} from 'framer-motion'

export const slideBestUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.7, delay: 0.05 * (i - 1)}
    }),
  }
  
export const BestOflist = ({text}) => {
    
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimate(true); 
      }, 800);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <motion.div className='about-content'>
          <div className='para-box'>
            <div className='para-line'>
              <p>
                {text.split(" ").map((word,index) => {
                  return <span className='mask-1' key={index}><motion.span variants={slideBestUp} custom={index} animate={animate ? "open" : "initial"} initial = 'initial' key={index}>{word}</motion.span></span>
                })}
              </p>
            </div>
          </div>
        </motion.div>
    )
  }