
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/lightswind/particles-background'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import AOS from "aos";
import { Toaster } from "react-hot-toast";
  import Lenis from "lenis";




const App = () => {
   const [loading, setloading] = useState(true)

        useEffect(() => {
             const timer = setTimeout(() => setloading(false),1000)
              return () => clearTimeout(timer)
          
        }, [])

         useEffect(() => {
   AOS.init({
  easing: 'ease-out-cubic', 
  once: true,             
});
  }, []);
        

    useEffect(() => {
      const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
    lenis.destroy();
  };
      }, []);




  return (
    <div>
       <Toaster  position="bottom-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#111827",
      color: "#fff",
      border: "1px solid #a855f7",
      borderRadius: "12px",
    },
    success: {
      iconTheme: {
        primary: "#a855f7",
        secondary: "#fff",
      },
    },
  }} />
    {loading?<Loading/>:<div> <ParticlesBackground/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/></div>
    }
    </div>
  
  )
}

export default App