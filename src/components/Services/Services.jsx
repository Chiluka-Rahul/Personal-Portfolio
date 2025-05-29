import { useState, useEffect } from 'react';
import './Services.css';

const ServiceData = [
  {
    no: '01',
    title: "Web Development",
    description: "I build performant and scalable web apps using modern frameworks like React and Next.js—prioritizing clean code, fast loading, and intuitive interaction.",
    speed: 0.5
  },
  {
    no: '02',
    title: "Web Design",
    description: "I design clean, minimal interfaces that align with user expectations and brand identity. Each layout is crafted with usability, flow, and beauty in mind.",
    speed: 0.5
  },
  {
    no: '03',
    title: "UX/UI Design",
    description: "From wireframes to polished visuals, I focus on user experience that feels natural. Every detail—from spacing to microinteractions—matters.",
    speed: 0.67
  }
];



const Services = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
      const heading = document.querySelector(".service-heading");
  
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
                          span.classList.add("active");
                      }, idx * 20);
                  });
              }
          });
      }, options);
  
      if (heading) {
          const headingText = heading.innerText.split("");
          const formattedText = headingText
              .map((char) =>
                  char === " "
                      ? `<span class="gap">&nbsp;</span>`
                      : `<span>${char}</span>`
              )
              .join("");
  
          heading.innerHTML = formattedText; 
          observer.observe(heading);
      }
  
      return () => observer.disconnect();
  }, []);
  return (
      <div className='services-container'>
          <div className="service-heading">What I Offer...</div>
          <div className="services">
            {ServiceData.map((serv, i) => {
                return (
                    <div key={i} className="service-card">
                        <div className="service-info">
                            <div className='serive-no'>
                                <h3>{serv.no}</h3>
                            </div>
                            <div className='serv'>
                                <h2>{serv.title}</h2>
                                <p>
                                {serv.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
         {/* <div className="container">
              <Titles data={data} setSelectedProject={setSelectedProject}/>
              <Descriptions data={data} selectedProject={selectedProject}/>
          </div>  */}
      </div>
  )
}

export default Services

