import React from 'react';


function Footer() {

    return (
        <div>
            <footer>
                <div className="container">
                    <div className="col">
                        <div className="logo-img"></div>
                        <br />
                    </div>
                </div>
                <div className="container d-flex flex-wrap">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <br />
                        <div className="footer-section" >
                            <h5 className="header">Reach Us</h5>
                            <div className="py-1">
                                <i className="fas fa-map-marker-alt"></i> <i className="px-1"></i>
                                52/7, Chawni, Indore, Madhya Pradesh, 452001
                            </div>
                            <div className="py-1">
                                <a href="mailto:hello@oeson.in">
                                    <i className="fas fa-envelope"></i> <i className="px-1"></i>
                                    hello@oeson.in
                                </a>
                            </div>
                            <div className="py-1">
                                <a href="tel:+919399718323">
                                    <i className="fas fa-phone-alt"></i> <i className="px-1"></i>
                                    +91-9399718323
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 sitemap">
                        <br />
                        <div className="footer-section">
                            <h5 className="header">Sitemap</h5>
                            <div className="d-flex footer-nav">
                                <h6 className="nav-item">
                                    <a href="./index">Home</a>
                                </h6>
                                <h6 className="nav-item">
                                    <a href="./about">About Us</a>
                                </h6>
                                <h6 className="nav-item">
                                    <a href="./services">Services</a>
                                </h6>
                                <h6 className="nav-item">
                                    <a href="./contact">Contact Us</a>
                                </h6>
                                <h6 className="nav-item">
                                    <a href="./blog">Blog</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <br />
                        <div className="footer-section">
                            <h5 className="header">Want our IT consultancy tips ?</h5>
                            <h6>Our IT Consulting firm delivers variety of custom business technology strategies.</h6>
                            <div className="d-flex">
                                <input type="email" className="form-control" placeholder="Enter Your Email" />
                                <button className="btn text-white" style={{ minWidth: "fit-content", background: "#024C87" }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <br />
                        <div className="footer-section">
                            <h5 className="header">Connect with Us</h5>
                            <div className="d-flex justify-content-between">
                                <a href="https://twitter.com/OesonIndia">
                                    <div className="social-logo">
                                        <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20209.png" alt="twitter logo" width="100%" />
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/OESON-113899197753496">
                                    <div className="social-logo">
                                        <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20210.png" alt="facebook logo" width="100%" />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/eternity-incorporations/">
                                    <div className="social-logo">
                                        <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20211.png" alt="linkedin logo" width="100%" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/oeson.in/">
                                    <div className="social-logo">
                                        <img src="https://oeson.b-cdn.net/New%20folder/instagram-logo-041EABACE1-seeklogo.com.png" alt="instagram logo" width="100%" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <br />
                    <hr className="bg-white" />
                    <br />
                    <p style={{ fontSize: "xx-small" }}>By continuing past this page you agree to our <a href="./terms and conditions.html">Terms and Conditions</a>  | <a href="./Privacy Policies.html">Privacy policy.</a> All trademarks are properties of their respective owners. 2021-2022 © Foodbychoice Pvt. Ltd. All rights reserved.</p>
                </div>
            </footer>

        </div>

    )
}

export default Footer