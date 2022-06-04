import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <div>
        <header style={{ backgroundColor: "white" }}>
                <nav className="navbar navbar-expand-lg" style={{ color: "black" }}>
                    <NavLink className="navbar-brand" to="/">
                        <div className="logo-img-blue" ></div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" style={{ color: "black" }}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:"100px"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{marginRight:"50px"}}>

                                <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item" style={{marginRight:"50px"}}>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item" style={{marginRight:"50px"}}>
                                <NavLink className="nav-link" to="/career">Career</NavLink>
                            </li>
                            <li className="nav-item active" style={{marginRight:"50px"}}>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink className="nav-link" to="/contact" style={{width:"112px"}}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>  
    </div>

    )
}

export default Header
