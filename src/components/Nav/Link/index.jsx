import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from '../animation';
import './index.css'


export default function Linkk({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className= 'link' 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className='indicator'>
        </motion.div>
        <Link href={href} to = {href}><span className={`${isActive ? 'bright' : 'light'}`}>{title}</span></Link>
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className='indicatorr'>
        </motion.div>
      </motion.div>
    )
}