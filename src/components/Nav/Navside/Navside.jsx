import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useLocation} from 'react-router-dom';
import {menuSlide} from '../animation'
import Linkk from '../Link'
import './Navside.css'

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projectFilter",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Navside() {

  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className= 'menu'
      >
       <div className= 'sidebar'>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className='nav'>
                    {
                      navItems.map( (data, index) => {
                        // console.log(data)
                        return <Linkk 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator === data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Linkk>
                      })
                    }
            </div>
            {/* <Footer /> */}
        </div>
    </motion.div>
  )
}