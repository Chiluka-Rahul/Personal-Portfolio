import React, {useState, Fragment } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Navside from '../../../Nav/Navside/Navside';
import './index.css'
import Connect from '../../../Connect'
import Footer from '../../../Footer'

const skills_list = [
    {
        id: 1,
        name: "Next JS"
    },
    {
        id: 2,
        name: "Gemini AI"
    },
    {
        id: 3,
        name: "Convex"
    },
    {
        id: 4,
        name: "Clerk"
    },
    {
        id: 5,
        name: "Tailwind CSS"
    },
    {
        id: 6,
        name: "React JS"
    }
]



const Project2 = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <>
        <div className='headerButtonContainerr'>
            <div onClick={() => {setIsActive(!isActive)}} className='buttonn'>
                <div className={`burgerr ${isActive ? 'burgerActivee' : ""}`}>
                </div>
            </div>
        </div>
        <AnimatePresence mode="wait">
        {isActive && <Navside />}
        </AnimatePresence>
          <div className='p-2-container'>
              <div className='p-2-top-container'>
                  <h1 className='p-2-name'>Apple 15 Pro Clone Website</h1>
                  <ul className='p-2-list-items'>
                      <li className='p-2-list'>Three.js</li>
                      <li className='p-2-list'>React JS</li>
                      <li className='p-2-list'>Web Development</li>
                      <li className='p-2-list'>Framer</li>
                  </ul>

              </div>
              <div className='p-2-overview'>
                  <div className='p-2-overview-heading'>
                      <span>Project Overview</span>
                  </div>
                  <div className='p-2-desc'>
                        <p>
                        The Apple 15 Pro Clone Website is a high-fidelity, front-end project that replicates Apple's official product launch page using modern web technologies. This immersive web experience was built to demonstrate mastery of 3D rendering, fluid animations, and responsive design.
                        <br /><br />
                        Powered by <strong>React JS</strong> and animated with <strong>Framer Motion</strong>, the site brings Apple's design language to life with seamless transitions and parallax effects. The highlight of the project is the integration of <strong>Three.js</strong> to render an interactive 3D model of the iPhone 15 Pro, allowing users to rotate and view the device dynamically.
                        <br /><br />
                        The site is fully responsive and optimized for performance. It replicates Apple’s unique storytelling layout and product showcase approach with scroll-based animation, section reveals, and high-quality video segments to mimic Apple's production style.
                        </p>
                        <div className='p-2-services'>
                          <div className='p-2-srv'>
                              <span>Time Period</span>
                              <p>2 Weeks/14 days</p>
                          </div>
                          <div className='p-2-srv'>
                              <span>Year</span>
                              <p>2023</p>
                          </div>
                          <div className='p-2-serv'>
                             <button className='p-2-site' onClick={() => window.open('https://apple15proclone.netlify.app/', '_blank')}>Visit Site</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='video-p-2-container'>
                  <video 
                      className="video-bg" 
                      src='/images/ProjectVideo(2).mp4'
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                  ></video>
              </div>
            <div className='p-2-highlights-container'>
                <div className='p-2-h-1'>
                    <video 
                        className="video-bg-1" 
                        src='/images/ProjectVideo(2)Highlights.mp4'
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    ></video>
                </div>
                <div className='p-2-h-2'>
                    <video 
                        className="video-bg-2" 
                        src='/images/ProjectVideo(2)Threejs.mp4'
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    ></video>
                </div>
            </div>
              
          </div>
          <Connect />
          <Footer />
    </>
  )
}

export default Project2