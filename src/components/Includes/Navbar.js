import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import Logo from "../Images/logos.png";

const Navbar = () => {
  return (
    <div>
     
     <nav className="navbar navbar-expand-lg">
     <div className="container">
    <Link to="/" className="navbar-brand "><img className="logo"src={Logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
       
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="About" className="nav-link " activeClassName="active">About</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="Services" className="nav-link" activeClassName="active">Services</NavLink>
        </li>
    
        <li className="nav-item ">
        <NavLink to="contact" className="nav-link " activeClassName="active">Conatct</NavLink>
        </li>

      </ul>
      
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar;