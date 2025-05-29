import React, {useState, useRef} from 'react'
import Navside from '../../../Nav/Navside/Navside';
import './index.css'
import { AnimatePresence, useScroll, useTransform, motion } from 'framer-motion';
import AppBg1 from '../../../../assets/AppBg1.png'
import AppFrame from '../../../../assets/AppFrame.png'
import LogoImg from '../../../../assets/LogoImg.png'
import VideoApp from '../../../../assets/VideoApp.mp4'



const ImagePhoto = ({src, scale, top}) => {
    const imageContainerRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: imageContainerRef,
      offset: ['start end', 'end start'],
    });
  
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -scale]); 
  
    return (
      <div
        ref={imageContainerRef}
        className="p-3-image-container"
      >
        <div className="p-3-image-inner-container">
          <motion.div style={{ y: translateY, top : `-${top}px`, position: 'absolute',left: "0",
    width: "100%",
    height: "100%"}} className="p-3-image">
            <img src={src} alt="imagePhoto-1" />
          </motion.div>
        </div>
      </div>
    );
  }


const Project3 = () => {
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
        <div className='p-3-container'>
            <div className='p-3-top-container'>
                <h1 className='p-3-name'>Fresh price App</h1>
                <ul className='p-3-list-items'>
                    <li className='p-3-list'>UI/UX Design</li>
                    <li className='p-3-list'>Figma</li>
                    <li className='p-3-list'>Visual Design</li>
                </ul>

            </div>
            <div className='pr-3-image'>
                <ImagePhoto src={AppBg1} scale = {300} top={10}/>
            </div>
            <div className='p-3-overview'>
                <div className='p-3-overview-heading'>
                    <span>Project Overview</span>
                </div>
                <div className='p-3-desc'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className='p-3-services'>
                        <div className='p-3-srv'>
                            <span>My Role</span>
                            <p>User Interface Designer</p>
                        </div>
                        <div className='p-3-srv'>
                            <span>Time Period</span>
                            <p>2 Weeks/14 days</p>
                        </div>
                        <div className='p-3-srv'>
                            <span>Year</span>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-3-sideBy-containers'>
              <div className='p-3-video-container'>
                <video
                className='p-3-video'
                  autoPlay
                  muted
                  loop
                  playsInline 
                  disablePictureInPicture 
                  controlsList="nodownload nofullscreen noremoteplayback"
                >
                  <source src={VideoApp} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='p-3-col-image-container'>
                <ImagePhoto src = {AppFrame} scale = {150} top={100}/>
              </div>
            </div>
            <div className='p-3-logo-container' >
              <ImagePhoto src={LogoImg} scale = {100} top={5}/>
            </div>
            <div className='p-3-more-info'>
              <button className = "p-3-more-button">More Info</button>
            </div>
        </div>
    </>
  )
}

export default Project3