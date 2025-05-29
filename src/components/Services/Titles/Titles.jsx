import React, { useRef } from 'react'
import './Titles.css';
import { useScroll,  useTransform } from 'framer-motion';

export default function index({data, setSelectedProject}) {
  return (
    <div className='titles'>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i, no, description } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    
    return (
        <div ref={container} className='title'  onMouseOver={() => {setSelectedProject(i)}}
        onMouseLeave={() => {setSelectedProject(null)}}>
            <div 
                className='wrapper'

            >   
                <p>{no}</p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    )
}