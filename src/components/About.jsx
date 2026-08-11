import React from 'react'
import { MapPin, GraduationCap, BriefcaseBusiness, RocketIcon, TrendingUp, Rocket } from "lucide-react";
import Marquee from './Marquee';

const About = () => {
    return (
        <div>
            <section id='about' className='about'>

                <div className="container"
                >
                    <h2  data-aos="fade-up" data-aos-duration="800">About me</h2>
                    <div className="about-wrapper">


                        <div className="about-left" data-aos="fade-up" data-aos-duration="1000" >
                            <div className="about-frame">
                               <img src="about2.webp" alt="about-image" />
        
                            </div>
                            <div className="state">
                                <div className="state-card">
                                    <h2><RocketIcon strokeWidth={1.5} color="#a855f7" size={20} /> 6+ <span>project built</span></h2>

                                </div>
                                <div className="state-card">
                                    <h2><TrendingUp strokeWidth={1.5} color="#a855f7" size={20} /> 1.5yr + <span>Coding journey</span></h2>

                                </div>
                                <div className="state-card">
                                    <h2>   <GraduationCap size={18} color="#a855f7" /> Meta<span>Certified</span>
                                    </h2>

                                </div>
                            </div>

                        </div>





                        <div className="about-me" data-aos="fade-up" data-aos-duration="1000">

                            <div className="badge">
                                <BriefcaseBusiness size={18} color="#a855f7" />
                                Open for Internship
                            </div>
                            <div className="about-info">

                                <h2>Hi,I'm Vivek.</h2>

                                <p> I started exploring HTML and CSS out of curiosity, and what began as experimenting with web pages gradually turned into a passion for frontend development.

Since 2025, I've been learning independently by building real projects, solving JavaScript challenges, and improving my React skills. Along the way, I also completed Meta's Front-End Developer Professional Certificate to deepen my understanding of modern frontend development.

Today, I enjoy creating responsive, accessible, and user-friendly interfaces while continuously learning and growing as a developer.</p>
                                <div className="quick-info">
                                    <span> <MapPin strokeWidth={1.5} color="#a855f7" size={20} />Delhi, India</span>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="tool">
                    <h2 data-aos="fade-up" data-aos-duration="800">Technologies I Work With</h2>
                    <Marquee />

                </div>


            </section>
        </div>
    )
}

export default About