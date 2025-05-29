import React, { useState } from 'react';
import './ProjectPac.css';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';

export default function ProjectPac({ index, title, id, setModal, link}) {
    const [isHovered, setIsHovered] = useState(false);  

    const ListMenu = ({ children }) => {
        const DURATION = 0.2;
        const STRAGGER = 0.025;

        return (
            <motion.li
                initial="initial"
                animate={isHovered ? "hovered" : "initial"}
                className="text-hover"
            >
                <div>
                    {children.split('').map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: '-100%' },
                            }}
                            transition={{
                                ease: 'easeInOut',
                                duration: DURATION,
                                delay: STRAGGER * i,
                            }}
                            key={i}
                            className="inline-span"
                        >
                            {l === ' ' ? '\u00A0' : l}
                        </motion.span>
                    ))}
                </div>
                <div className="another-text">
                    {children.split('').map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { y: '100%' },
                                hovered:{ y: 0 },
                            }}
                            transition={{
                                ease: 'easeInOut',
                                duration: DURATION,
                                delay: STRAGGER * i,
                            }}
                            key={i}
                            className="inline-span"
                        >
                            {l === ' ' ? '\u00A0' : l}
                        </motion.span>
                    ))}
                </div>
            </motion.li>
        );
    };

    return (
        <>
        <Link to={`/projects/project-${index}`}>
            <div
                onMouseEnter={() => {
                    setModal({ active: true, index });
                    setIsHovered(true); 
                }}
                onMouseLeave={() => {
                    setIsHovered(false); 
                }}
                className="project-p-container"
            >   
                <h2>{id}</h2>
                
                    <ListMenu>{title}</ListMenu>
                
            </div>
        
        </Link>
        </>
    );
}
