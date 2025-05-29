import React, { useEffect, useRef } from 'react';

const TextAnimation = ({ text, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;

    if (target) {
      const chars = [...target.innerText];
      const newText = chars
        .map((char) =>
          char === " "
            ? `<span class="gap">&nbsp;</span>`
            : `<span class="spann">${char}</span>`
        )
        .join("");

      target.innerHTML = newText;

      const letters = [...target.querySelectorAll(".spann")];
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          letter.classList.add("active");
        }, idx * 50);
      });
    }
  }, []);

  return <div ref={ref} className={className}>{text}</div>;
};

export default TextAnimation;
