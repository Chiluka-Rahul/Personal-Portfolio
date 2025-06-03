import React, { Fragment, useRef, useEffect, useLayoutEffect } from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import {useInView, motion} from 'framer-motion'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills'
import Connect from '../../components/Connect'
import Footer from '../../components/Footer'
import Block from './Block'

const bestOf = [
  { id: 1, name: 'web designer'},
  { id: 2, name: 'ui/ux designer'},
  { id: 3, name: 'front-end developer'},
  { id: 4, name: 'full stack developer'},


]

export const slideUp = {
  initial: {
      y: "100%"
  },
  open: (i) => ({
      y: "0%",
      transition: {duration: 0.7, delay: 0.01 * i}
  }),
  closed: {
      y: "100%",
      transition: {duration: 0.7}
  }
}


const Section2 = () => {
  const abouttext = "Multidisciplinary developer who blends engineering precision with creative storytelling. I craft modern web experiences for forward-thinking brands, products, and people. Whether it’s a dynamic e-commerce app or an AI-driven tool, I build with performance, elegance, and intent";

  const description = useRef(null);
  const isInView = useInView(description)
  return (
    <motion.div className='about-container'>
        <div className='detailed-box'>
          <div ref={description} className='para-text'>
            <p>
              {abouttext.split(" ").map((word,index) => {
                return <span className='mask' key={index}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
              })}
            </p>
          </div>
        </div>
      </motion.div>
  )
}





const Home = () => {
  useEffect(() => {
    const listItems = [...document.querySelectorAll(".listt")];

    const options = {
      rootMargin: "10px", 
      threshold: 0.08,   
    };

    const observer = new IntersectionObserver(showItems, options);

    function showItems(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letters = [...entry.target.querySelectorAll(".spann")];

          letters.forEach((letter, idx) => {
            setTimeout(() => {
              letter.classList.add("active-1");
            }, idx * 30); 
          });

          entry.target.classList.add("active-1");
          observer.unobserve(entry.target); 
        }
      });
    }

    listItems.forEach((item) => {
      const itemText = item.innerText || ""; 
      if (!itemText) {
        console.warn("Empty or invalid text in:", item);
        return;
      }

      const strongWords = ["GREAT"];

      const newString = itemText
        .split(" ")
        .map(word => {
          const isStrong = strongWords.includes(word.replace(/[^\w]/g, ""));
          return word.split("").map(char => {
            const spanClass = `spann${isStrong ? ' strong' : ''}`;
            return char === " " 
              ? `<span class="gap">&nbsp;</span>` 
              : `<span class="${spanClass}">${char}</span>`;
          }).join("") + `<span class="gap">&nbsp;</span>`; // add space between words
        })
        .join("");


        setTimeout(() => {
          requestAnimationFrame(() => {
            item.innerHTML = newString;
            item.classList.add("ready");
            observer.observe(item); 
          });
        }, 30);
    });

    return () => observer.disconnect();
  }, []);
  

  useLayoutEffect(() => {
    const text = document.querySelector('.text-cont-resume p');
    const chars = text.innerText.split("");
    const degreePerChar = 360 / chars.length;

    text.innerHTML = chars.map((char, i) =>
      `<span style="transform:rotate(${i * degreePerChar}deg)">${char}</span>`
    ).join("");
  }, []);


  return (
    <>
        {/* <Block /> */}
        <div className='content-1'>
          <Nav />
          <section className="home-container">
          <video 
            className="video-bg-bg" 
            src="https://framerusercontent.com/assets/J374OfA0ykvehAcL9mdNIaWQv5g.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
          ></video>
            <div className="inner-container">
              <div className='title-home-container'>
                  <ul className="home-list">
                    <div className='home-list-first'>
                      <li className="listt">YOU’VE GOT</li>
                      <li className="listt">THE IDEA, GREAT . .</li>
                    </div>
                    <div>
                      <li className="listt small">
                        - LEAVE THE REST TO ME ! !
                      </li>
                    </div>

                  </ul>

              </div>
              <div className='hme-list-cnter'>
                <div className='none'>
                  <span></span>
                </div>
              <div className='circle-resume'>
                <div className='icon-resume'>
                  <a href='#' className='link-resume'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    style={{
                      width: "30px",
                      height: "28px",
                      display: "inline-block",
                      color: "white"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>

                  </a>

                </div>

                <div className='text-cont-resume'>
                  <p>resume-resume-resume-</p>
                </div>
              </div>
                <div className='bstof-cont'>
                  <ul className='bestof-container'>
                    {bestOf.map((expert, i) => {
                      return(
                        <li key={i} className='bestof-list'>
                            {expert.name}
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Section2 />
          <Projects />
          <Skills />
          <Connect />
          <Footer />
        </div>        
    </>
  )
}

export default Home