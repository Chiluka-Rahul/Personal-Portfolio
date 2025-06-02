import React, { useEffect, useState } from 'react';
import SkillsSet from './SkillsSet'
import './index.css';

const SkillList = [
  {
    name: "Python",
    category: "language",
    icon: "python.png",
  },
  {
    name: "JavaScript",
    category: "language",
    icon: "javascript.png",
  },
  {
    name: "JavaScript",
    category: "FrontEnd",
    icon: "javascript.png",
  },
  {
    name: "HTML5",
    category: "FrontEnd",
    icon: "html5.png",
  },
  {
    name: "CSS",
    category: "FrontEnd",
    icon: "css3.png",
  },
  {
    name: "Bootstrap",
    category: "FrontEnd",
    icon: "bootstrap.png",
  },
  {
    name: "AWS",
    category: "Database",
    icon: "aws.png",
  },
  {
    name: "C++",
    category: "language",
    icon: "c++.png",
  },
  {
    name: "ReactJS",
    category: "library & Frameworks",
    icon: "reactjs.png",
  },
  {
    name: "Redux",
    category: "library & Frameworks",
    icon: "redux.png",
  },
  {
    name: "Node.js",
    category: "BackEnd",
    icon: "nodejs.png",
  },
  {
    name: "MYSQL",
    category: "Database",
    icon: "mysql.png",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "mongodb.png",
  },
  {
    name: "Expressjs",
    category: "BackEnd",
    icon: "expressjs.png",
  },
  {
    name: "Git",
    category: "Tools & Platforms",
    icon: "git.png",
  },
  {
    name: "GitHub",
    category: "Tools & Platforms",
    icon: "github.png",
  },
  {
    name: "Figma",
    category: "Tools & Platforms",
    icon: "figma.png",
  },
  {
    name: "VS Code",
    category: "Tools & Platforms",
    icon: "vscode.png",
  },
];




const Skills = () => {

  return (
    <div
      id="skills_container"
    >
      <div className="skills_sticky">
            <SkillsSet SkillList = {SkillList}/>
      </div>
    </div>
  );
};

export default Skills;
