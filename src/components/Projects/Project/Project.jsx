import { useState } from 'react';
import ProjectPac from './ProjectPac/ProjectPac';
import Modall from './Modall';
import './Project.css'


export default function Project({projects_list}) {

  const [modal, setModal] = useState({active: true, index: 0})
  console.log(projects_list)
  return (
  <>
  <div className='project-container-c'>
    <div className='project-list-w'>
      {
        projects_list.map( (project, index) => {
          return <ProjectPac index={index} title={project.title} link={project.link} id = {project.id} setModal={setModal} key={index}/>
        })
      }
    </div>
    <div  className="project-modal-p">
      <Modall modal={modal} projects_list={projects_list}/>
    </div>

  </div>
  </>
  )
}
