import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = ['language', 'FrontEnd', 'library & Frameworks', 'BackEnd', 'Database', 'Tools & Platforms'];

const SkillsSet = ({ SkillList }) => {
  const skillRefs = useRef([]); 

  useEffect(() => {

    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0 0 0)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
              end: 'top 60%',
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      <div className="skills-heading">
        <h1>Skills</h1>
        <span>(I have)</span>
      </div>
      {skillCategories.map((category, i) => (
        <div
          key={i}
          className={`skills-set-list-container ${category === 'language' ? 'border-top' : ''}`}
        >
          <h2 className="skill-name">{category}</h2>
          <ul className="skills-ul-list">
            {SkillList.filter((skill) => skill.category === category).map((skill, index) => (
              <li
                key={`${skill.name}-${index}`}
                ref={(el) => skillRefs.current.push(el)} 
                style={{
                  backgroundImage: `url(/skills/${skill.icon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  listStyle: 'none',
                }}
                className="skill-list"
              ></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSet;
