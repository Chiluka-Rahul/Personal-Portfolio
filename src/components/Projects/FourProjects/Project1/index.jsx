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



const Project1 = () => {
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
                            <button className='p-2-site' type='button'>
                                <a href=''>
                                    Visit Site
                                </a>
                            </button>
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

export default Project1