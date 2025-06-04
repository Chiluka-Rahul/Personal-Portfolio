import React, { useState, useEffect } from "react";
import Navside from "../../components/Nav/Navside/Navside";
import {AnimatePresence } from "framer-motion";
import './ProjectFilter.css';
import Connect from '../../components/Connect'
import Footer from '../../components/Footer'
import { FilterButtons } from "./FilterButtons";
import ProjectWorks from "./ProjectWorks"

const projects = [
  { id: 1, category: "Web Development", title: "AI PDF Note SaaS", src: "ai-pdf-bg.png",url: "https://ai-pdf-note-maker.vercel.app/"  },
  { id: 2, category: "Web Development", title: "NxtTrendz E-commerce" , src: "nxttrendzbg.png",url: "https://github.com/Chiluka-Rahul/nxtTrendZ" },
  { id: 3, category: "Web Development", title: "Personal Portfolio" , src: "personal-portfolio.png",url: "https://personal-portfolio-delta-topaz.vercel.app/" },
  { id: 4, category: "Web Design", title: "EcommWeb" , src: "ecomm-web.png",url: "https://github.com/Chiluka-Rahul/Ecommweb" },
  { id: 5, category: "UI/UX Design", title: "Fresh Price" , src: "freshpricebg.png",url: "https://drive.google.com/file/d/1uTgF5R3og7bzii7g7zkXXUs4XbEgSPVj/view" },
  { id: 6, category: "Web Development", title: "Apple 15 Pro Clone" , src: "appleclone.png",url: "https://github.com/Chiluka-Rahul/apple-Clone" },
  { id: 7, category: "UI/UX Design", title: "LinkedIn Redesign " , src: "linkedinbg.png",url: "https://www.behance.net/rahulchiluka" },
  { id: 8, category: "Web Design", title: "Responsive Portfolio" , src: "ResponsivePortfolio.png",url: "https://chiluka-rahul.github.io/Portfolio/" },
  // { id: 9, category: "Web Development", title: "Restaurant App" , src: "appleclone.png",url: "https://aipdfnote.vercel.app" },
  { id: 9, category: "Web Development", title: "User Management System" , src: "usermanagementbg.png",url: "https://github.com/Chiluka-Rahul/user-management-project" },
];

const categories = ["All", "Web Development", "Web Design", "UI/UX Design"];

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isActive, setIsActive] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  
  useEffect(() => {
    const heading = document.querySelector(".projectfilter-heading");
    const options = {
      rootMargin: "-10%",
      threshold: 0.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span");
          spans.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add("activee");
            }, idx * 50);
          });
        }
      });
    }, options);

    if (heading) {
      const headingText = heading.textContent.split("");
      const formattedText = headingText.map((char, idx) => {
        const span = document.createElement("span");
        if (char === " ") {
          span.className = "gapp";
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        return span;
      });

      heading.textContent = "";
      formattedText.forEach((span) => heading.appendChild(span)); 
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, []);

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
      <div className="projectfilter-container">
        <div className="projectfilter-heading-container">
          <div className="projectfilter-heading">MY WORKS</div>
        </div>

        <FilterButtons
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <div
          className="projects-grid"
        >
          <ProjectWorks filteredProjects={filteredProjects}/>
        </div>
      </div>
      <Connect />
      <Footer />
    </>
  );
};

export default ProjectFilter;
