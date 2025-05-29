import React, { useState, useEffect } from "react";
import Project from "./Project/Project";
import {motion} from 'framer-motion'
import "./Projects.css";
import { Link } from "react-router-dom";

const projects_list = [
    {

        id: "01",
        title: "AI PDF Note SaaS",
        description: "Design & Development",
        color: "#000000",
        src: "ai-pdf-bg.png",
        
    },
    {
        id: "02",
        title: "Apple Website Clone",
        description: "Design & Development",
        color: "#e1e1e1",
        src: "appleclone.png",
        
    },
    {
        id: "03",
        title: "Fresh Price UI",
        description: "UI/UX Design",
        color: "#000000",
        src: "freshpricebg.png", 
        
    },
];

const Projects = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <>
        <section className="project-container">
            <div className="product-heading-container">
                <div className="project-heading">Projects</div>

            </div>
            <div className="body-container">
                <Project projects_list = {projects_list}/>
                <div className="project-mobile-display">
                    {projects_list.map((l,index) => {
                        return (
                            <div key={index} className="project-mobile-container">
                                <div 
                                className="project-mobile-card">
                                    
                                        <img
                                            src={`/images/${l.src}`}
                                            loading="lazy"
                                            className="project-mobile-image-o"
                                            alt={`image-${index}`}
                                        />
                                        <div className="project-mobile-col-0">
                                            <h3 className="project-mobile-title-o">
                                                {l.title}
                                            </h3>
                                            <hr className="hr-pr-mobile" />
                                            <span className="desc-span-mobile">{l.description}</span>    

                                        </div>
                                      
                                </div>    
                            </div>    
                        )
                    })}
                </div>

                <div className="view-button">
                    <Link to={"/projectFilter"}>
                        <div className="view-more-container" onMouseEnter={(e) => setIsHover(true)} onMouseLeave={(e) => setIsHover(false)}>
                            <motion.div animate = {{x : isHover ? -30 : 0}} className="icon-left">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </motion.div>
                            <motion.div animate = {{x : isHover ? -9 : 9}} className="view-title">

                                <p>View more</p>
                            </motion.div>
                            <motion.div animate = {{x : isHover ? -4 : 26}} className="icon-right">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </motion.div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </section>
       </> 
    );
};

export default Projects;
