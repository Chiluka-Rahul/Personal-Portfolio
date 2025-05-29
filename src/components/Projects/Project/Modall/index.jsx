import { motion } from 'framer-motion';
import './index.css';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Modall({modal, projects_list}) {

  const { active, index } = modal;

  return (
    <>
        <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="modalContainer">
            <div style={{top: index * -100 + "%"}} className="modalSlider">
            {
                projects_list.map( (project, index) => {
                const { src, color } = project
                return <div className="modal" style={{backgroundColor: color}} key={`modal_${index}`}>
                    <img
                    src={`/images/${src}`}
                    width={400}
                    height={0}
                    alt={`image-${index}`}
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        
    </>
  )
}
