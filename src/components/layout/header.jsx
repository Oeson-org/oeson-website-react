import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/">
                        <div className="logo-img"></div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:"100px"}}>
                        <ul className="navbar-nav"  >
                            <li classNames="nav-item" style={{marginRight:"50px"}} >

                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item" style={{marginRight:"50px"}}>
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item " style={{marginRight:"50px"}}>
                                <NavLink className="nav-link" to="/career">Career</NavLink>
                            </li>
                            <li className="nav-item" style={{marginRight:"50px"}}>
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