import React from 'react';

function Header(){

    return(
        <div>
<header>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="./index.html">
                <div className="logo-img"></div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a className="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./services.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./career.html">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    </div>

    )
}

export default Header