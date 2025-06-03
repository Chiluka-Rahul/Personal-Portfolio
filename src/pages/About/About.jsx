import React,{useState, useEffect, useRef} from 'react'
import Navside from '../../components/Nav/Navside/Navside'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import Services from '../../components/Services/Services'
import Profile from '../../assets/Profile.jpg'
import Connect from '../.././components/Connect/index'
import Footer from '../.././components/Footer/index'
import './About.css'



export const slideUp = {
  initial: {
      y: "100%"
  },
  open: (i) => ({
      y: "0%",
      transition: {duration: 0.7, delay: 0.05 * (i - 1)}
  }),
}

const AboutParaSec = () => {
    const aboutPara = `I'm Chiluka Rahul, a developer who enjoys turning ideas into digital experiences. I care about clean code, meaningful design, and small details that make a big difference.

Whether I’m building interfaces, exploring new frameworks, or just experimenting, I’m always learning. I like keeping things minimal, fast, and human.

Currently, exploring new ways to bring design and code together — always up for a challenge.
`;
  

  
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
              {aboutPara.split(" ").map((word,index) => {
                return <span className='mask-1' key={index}><motion.span variants={slideUp} custom={index} animate={animate ? "open" : "initial"} initial = 'initial'>{word}</motion.span></span>
              })}
            </p>
          </div>
        </div>
      </motion.div>
  )
}

const ImagePhoto = () => {
  const imageContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -150]); 

  return (
    <div
      ref={imageContainerRef}
      className="ecomm-image-container"
    >
      <div className="ecomm-image-inner-container">
        <motion.div style={{ y: translateY }} className="ecomm-image">
          <img src={`${Profile}`} alt="Profile photo of Chiluka Rahul" />
        </motion.div>
      </div>
    </div>
  );
}

const About = () => {
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
      <section className='abut-cont'>
        <div className='about-title'>
          <div className="about-heading">About</div>
        </div>
        <div className='about-paragraph-container'>
          <div className='about-para'>
            <AboutParaSec />
          </div>
          <div className='about-image'>
            <ImagePhoto />
          </div>
        </div>
          <Services />
          <Connect />
          <Footer />
      </section>
    </>
  )
}

export default About