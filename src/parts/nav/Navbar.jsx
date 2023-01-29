import React from 'react'
import { Link } from "react-router-dom";
import {useState} from "react"
import burgermenu from "../../img/menu.png"
import "../nav/navbar.scss"
import 'animate.css';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);



  return (
     <nav className='navbar'>
       <img 
      src={burgermenu}
      alt="burgermenu"
      className="toggle-button"
      onClick={() => setShowLinks(!showLinks)}
    />
    <div className="nav-links" id={showLinks ? "hidden" : ""} >
      <ul className="">
        <Link to="/">
          <li className='animate__animated animate__fadeInLeft' id='link1'>Forside</li>
        </Link>
        <Link to="/nysir">
          <li className='animate__animated animate__fadeInLeft' id='link2' >Om Nysir</li>
        </Link>
        <Link to="/sfa">
          <li className='animate__animated animate__fadeInLeft' id='link3'>Om SFA</li>
        </Link>
        <Link to="/galleri">
          <li className='animate__animated animate__fadeInLeft' id='link4'>Billedegalleri</li>
        </Link>

        <Link to="/busture">
          <li className='animate__animated animate__fadeInLeft' id='link5'>Busture</li>
        </Link>

        <Link to="/sfaboden">
          <li className='animate__animated animate__fadeInLeft' id='link6' >SFA-boden</li>
        </Link>
      </ul>
    </div>
  
  </nav>
  )
}

export default Navbar