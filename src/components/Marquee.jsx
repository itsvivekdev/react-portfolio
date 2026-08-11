import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const Marquee = () => {
    const techstack =[
        {icon:FaHtml5, name:'HTML5'},
        {icon:FaCss3Alt , name:'CSS3'},
        {icon:FaJs,name:'JavaScript'},
        {icon:FaReact , name:'React'},
        {icon:FaGitAlt , name:'Git'},
        {icon:FaGithub , name:'GitHub'},
        {icon:SiTailwindcss ,name:'Tailwind CSS'},
        {icon:SiVite , name:'Vite'}


    ]



    return (
        <div>
            
            <div className="Marquee-container" data-aos="fade-in"
     data-aos-duration="1200">
                <div className="track track1">

                    {techstack.map((item)=>{
                        const Icon = item.icon
                        return <div className="pill" key={item.name}>
                            <Icon/>
                            <span>{item.name}</span>
                            </div> 
                    })}

                    {techstack.map((item)=>{
                        const Icon = item.icon
                        return <div className="pill" key={item.name}>
                            <Icon/>
                            <span>{item.name}</span></div>
                    })}
                </div>
                <div aria-hidden className="track track2">

                    {techstack.map((item)=>{
                        const Icon = item.icon
                        return <div className="pill" key={item.name}>
                            <Icon/>
                            <span>{item.name}</span></div>
                    })}
                    {techstack.map((item)=>{
                        const Icon = item.icon
                        return <div className="pill" key={item.name}>
                            <Icon/>
                            <span>{item.name}</span></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Marquee