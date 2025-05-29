import React, { useEffect } from 'react'
import './index.css'

const SlideUpMulti = () => {
  useEffect(() => {
    const texts = document.querySelector(".multi-animate").children;
    const textLen = texts.length;
    let index = 0;

    function animateText() {
      for (let i = 0; i < textLen; i++) {
        texts[i].classList.remove("text-in", "text-out");
      }
      texts[index].classList.add("text-in");

      setTimeout(() => {
        texts[index].classList.add("text-out");
      }, 3800);

      setTimeout(() => {
        index = (index + 1) % textLen; 
        animateText();
      }, 4000);
    }

    animateText(); 
  }, []);
  return (
    <>
      <p className='multi-animate'>
        <span>Let's make miracles</span>
        <span>Open for Projects</span>
      </p>
    </>
  )
}

export default SlideUpMulti