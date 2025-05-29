import React, {useState, Fragment } from 'react'
import Navside from '../../../Nav/Navside/Navside';
import './index.css'
import { AnimatePresence, motion } from 'framer-motion';
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

const Project0 = () => {
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
          <div className='p-0-container'>
              <div className='p-0-top-container'>
                  <h1 className='p-0-name'>AI PDF NOTES SAAS</h1>
                  <ul className='p-0-list-items'>
                      <li className='p-0-list'>Web Development</li>
                      <li className='p-0-list'>Gemini AI</li>
                      <li className='p-0-list'>Web Design</li>
                  </ul>

              </div>
              <div className='p-0-overview'>
                  <div className='p-0-overview-heading'>
                      <span>Project Overview</span>
                  </div>
                  <div className='p-0-desc'>
                        <p>
                            The AI PDF Note Maker is a full-stack SaaS application that allows users to upload any PDF and generate concise, AI-powered notes using Google's Gemini Pro model. Designed for students, researchers, and professionals, the platform helps in quickly understanding large documents without reading them entirely.
                            <br /><br />
                            The platform is built using <strong>Next.js</strong> for server-side rendering, <strong>Tailwind CSS</strong> for responsive UI, <strong>Convex</strong> for real-time backend database operations, and <strong>Clerk</strong> for secure authentication. The integration with Gemini AI enables intelligent summarization and note extraction from PDFs.
                            <br /><br />
                            This project solves the problem of information overload by saving time and effort when processing academic papers, business reports, or eBooks. The AI ensures high-quality summaries that retain core ideas and structure. It also features a modern UI, secure user sessions, and real-time updates.
                        </p>                        
                        <div className='p-0-services'>
                          <div className='p-0-srv'>
                              <span>Time Period</span>
                              <p>3 Weeks/21 days</p>
                          </div>
                          <div className='p-0-srv'>
                              <span>Year</span>
                              <p>2023</p>
                          </div>
                          <div className='p-0-serv'>
                            <button className='p-0-site' onClick={() => window.open('https://ai-pdf-note-maker.vercel.app/', '_blank')}>Visit Site</button>

                          </div>
                      </div>
                  </div>
              </div>
              <div className='video-p-0-container'>
                  <video 
                      className="video-bg" 
                      src='/images/ProjectVideo(0).mp4'
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                  ></video>
              </div>
              <div className='p-0-skills-container'>
                <section className='p-0-infinite-anim'>
                    <div className='p-0-infinite-container'>
                        <motion.div
                            animate = {{
                                x:"-50%"
                            }}
                            transition={{
                                duration: 40,
                                ease : 'linear',
                                repeat : Infinity,
                            }}
                            className='p-0-bestof-container'>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Fragment key={i}>
                                {skills_list.map((item) => (
                                    <h2 key={item.id} className="p-0-bestoflist">
                                    {item.name}
                                    </h2>
                                ))}
                                </Fragment>
                            ))}
                        </motion.div>
                    </div>
                </section>
              </div>
          </div>
          <Connect />
          <Footer />
        
    </>
  )
}

export default Project0