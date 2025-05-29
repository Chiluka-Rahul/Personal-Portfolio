import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project3 from './components/Projects/FourProjects/Project3'
import './App.css';
import ProjectFilter from './pages/ProjectFilter/ProjectFilter';
import Lenis from 'lenis';
import Contact from './pages/Contact/Contact';
import Scrollup from './components/Scrollup';
import Project0 from './components/Projects/FourProjects/Project0';
import Project2 from './components/Projects/FourProjects/Project2';

function App() {
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <Router >
      <Scrollup />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path = "/projects/project-0" element = {<Project0 />} />
        <Route path = "/projects/project-2" element = {<Project2 />} />
        <Route path = "/projects/project-3" element = {<Project3 />} />
        <Route path = "/projectFilter" element = {<ProjectFilter />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
