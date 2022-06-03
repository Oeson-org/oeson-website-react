import React from "react";


function Header(){
    return(
        <div>
         <header style={{background:"#2C70C0",color:"#fff"}}>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <span style={{fontSize: "x-large" , fontWeight: "700"}}>Oeson</span>
            </a>
            <button className="navbar-toggler" style={{color: "#fff"}} type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{marginLeft:"100px"}}>
                <ul className="navbar-nav">
                    <li className="nav-item " style={{marginRight:"50px"}} >
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item" style={{marginRight:"50px"}} >
                        <a className="nav-link" href="/services">Services</a>
                    </li>
                    <li className="nav-item " style={{marginRight:"50px"}} >
                        <a className="nav-link" href="/career">Career</a>
                    </li>
                    <li className="nav-item" style={{marginRight:"50px"}} >
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" style={{width:"112px"}}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

        </div>
    )
}

export default Header