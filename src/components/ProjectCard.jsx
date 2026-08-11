import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div>
        <div className="card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="300">
            <div className="card-content">
              <div className="project-counter">
                <span>{project.number}</span>
                
              </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className='techstack'>
                {project.techStack.map((item) => {
                  return <div className='tech' key={item}>{item}</div>
                   
                })}
                </div>
              <div className="btns">
                <a href={project.livelink}><button>Live Link</button></a>
                <a href={project.viewcode}><button>View Code</button></a>
              </div>
            </div>
            <div className="card-img">
              <img src={project.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProjectCard