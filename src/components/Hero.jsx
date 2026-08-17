import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
    return (
        <div>
            <Navbar />
            <section id='home' className="hero">
               
                    <div className="hero-wrapper">
                        <div className="hero-content">
                            <div className="main-headings">
                                <h3> Hey i am <span>Vivek</span></h3>
                                 <h2>
                                Front End Developer
                            </h2>
                            </div>
                           
                            <div className="badge">
                                <div className="badge-icon"></div>
                                AVAILABLE FOR OPPORTUNITIES
                            </div>
                            <p>Frontend Developer building responsive and modern
                                web applications with JavaScript and React.</p>
                            <div className="cta-btn">
                                <button><a href="#project">VIEW MY WORK</a></button>  
                                <button><a href="#contact">LET'S TALK</a></button>

                            </div>
                        </div>
                        <div className="hero-model">
                             <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="hero2.webm" type="video/webm" />
      </video>

                       </div>







                 







                </div>

            </section>

        </div>
    )
}

export default Hero
