import React, { useState } from 'react'

const Navbar = () => {

  const [opennav, setopennav] = useState(false)
  return (
    <div>
         <header className='container'>
        <nav>
         <div className="logo"><a href="#home">V.</a></div>
         <ul> 
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
           
         </ul>
         <div className="menu" onClick={() => setopennav(true)}>
            <div className=""></div>
            <div className=""></div>
         </div>

        </nav>
    </header>

    <div id="mySidenav" className="sidenav" style={{ width: opennav ? "100%" : "0" }}>
 <button className="closebtn" onClick={() => setopennav(false)}>&times;</button>
 <li onClick={() => setopennav(false)}> <a href="#home">Home</a></li>
            <li onClick={() => setopennav(false)}><a href="#about">About</a></li>
            <li onClick={() => setopennav(false)}><a href="#project">Project </a></li>
            <li onClick={() => setopennav(false)}><a href="#contact">Contact </a></li>
            
</div>
    </div>
  )
}

export default Navbar