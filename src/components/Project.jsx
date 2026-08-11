import React from 'react'
import ProjectCard from './ProjectCard'
import { Circle } from "lucide-react";
import {
    Package,
    Layers3,
    CodeXml,
    Zap,
} from "lucide-react";

import Data from './ProjectData';

const Project = () => {




    return (
        <>
            <section id='project'>
                <div className="container">
                <div className="project-top">
                    <div className="left-content"  data-aos="fade-right" data-aos-duration="800"
     >
                        <h3> <Circle
                            size={10}
                            fill="#4F6BFF"
                            strokeWidth={0}
                        />My work</h3>
                        <h2>Projects That solve<br /><span>real</span> problems.</h2>
                        <p>Building modern, fast, and responsive web applications with a strong focus on user experience and performance.</p>
                    </div>
                    <div className="right-content" data-aos="fade-left" data-aos-duration="800">
                         <div className="text-center">
      <Package
        size={26}
        color="#4F6BFF"
        strokeWidth={1.8}
      />

      <h3>04</h3>
      <p>PROJECTS</p>
  </div>

  <div className="text-center">
      <Layers3
        size={26}
        color="#2DD4BF"
        strokeWidth={1.8}
      />

      <h3>07+</h3>
      <p>TECHNOLOGIES</p>
  </div>

  <div className="text-center">
      <CodeXml
        size={26}
        color="#8B5CF6"
        strokeWidth={1.8}
      />

      <h3>100%</h3>
      <p>PASSION</p>
  </div>

  <div className="text-center">
      <Zap
        size={26}
        color="#FACC15"
        strokeWidth={1.8}
      />

      <h3>∞</h3>
      <p>POSSIBILITIES</p>
  </div>


                    </div>

                </div>



                <div className='project-grid'>
                    {Data.map((project) => {
                       return <ProjectCard key={project.id}  project={project} />
                    })}

                    

                  

                </div>
                </div>
            </section>
        </>
    )
}

export default Project