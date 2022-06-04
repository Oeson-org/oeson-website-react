import React from "react";
import { NavLink } from 'react-router-dom';

const Header =()=>{
return(
    <div>
  

        <header className="section-header"  style={{color:"#2C70C0",borderBottom: "4px solid #2C70C0;"}}>
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to="/"></NavLink>
                    <div className="logo-img-blue"></div>
                
                <button className="navbar-toggler" style={{color: "#2C70C0"}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/career">Career</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    
)

}

export default Header