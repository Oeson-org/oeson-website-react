import React from 'react';
import Header from './header';
import Footer from '../../layout/footer'

 import './jobs.css'

const Jobs=()=>{
return(
    <div>
    <Header/>
    
        <main>
        <section className="jobs-main" >
            <div className="col-lg-1 no-small vert-nav">
                <div className="d-flex justify-content-around flex-column h-100" style={{marginTop:"80px"}}>
                    <div className="r-90">
                        <a href="/">
                            <h5>HOME</h5>
                        </a>
                    </div>
                    <div className="r-90">
                        <a href="/career">
                            <h5>CAREER</h5>
                        </a>
                    </div>
                    <div className="r-90">
                        <a href="/about">
                            <h5>ABOUT US</h5>
                        </a>
                    </div>
                    <div className="r-90">
                        <a href="/contact">
                            <h5>CONTACT US</h5>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 main-text">
                <h2 className="display-4" style={{fontWeight: "500"}}>JumpStart Your Career</h2>
            </div>
            <div className="col-lg-6 col-12 col-sm-10 col-md-8 hero-img">
                <img src="https://oeson.b-cdn.net/New%20folder/Group%20111.png" alt="College Group" style={{width:"100%"}}/>
            </div>
        </section>

        <section className="py-3">
            <div className="text-center">
                <br/>
                <h3>Explore Openings</h3>
                <br/>
            </div>
            <form className="d-flex container search-hold" id="search-job">
                <div className="col-11 p-0">
                    <input type="text" name="job" id="search-input" placeholder="Search Openings"/>
                </div>
                <div className="col-1 p-0">
                    <button className="btn" type="submit"><i className="fa fa-search fa-lg"></i></button>
                </div>
            </form>
            <div className="container">
                <div className="d-flex align-items-center" style={{gap: "2rem"}}>
                    <br/>
                    <span><h5>FILTER BY</h5></span>
                    <span>
                        <select name="location" id="location-filter" className="form-control">
                            <option value="none" selected>All Locations</option>
                        </select>
                    </span>
                    <br/>
                </div>
                <br/>
                <div className="d-flex align-items-center" style={{gap: "1rem"}}>
                    <br/>
                    <span><h4>Open Positions</h4></span>
                    <span>
                        ( <span id="total-openings"></span> job positions )
                    </span>
                    <br/>
                </div>
                <br/><br/>
                <div className="px-1 no-small">
                    <div className="d-flex justify-content-around">
                        <div className="col-10 col-md-8 col-lg-4">
                            <h5>TITLE</h5>
                        </div>
                        <div className="col-2 col-md-4 col-lg-1">
                            <h5>POSITIONS</h5>
                        </div>
                        <div className="col-6 col-lg-3 col-xl-2">
                            <h5>DEPARTMENT</h5>
                        </div>
                        <div className="col-6 col-lg-3 col-xl-2">
                            <h5>LOCATION</h5>
                        </div>
                    </div>
                </div>
                <div id="openings-hold" className="px-1">
                    <div className="opening">
                        <div className="col-10 col-md-8 col-lg-4">
                            <a href="##">
                                SDE II I Site Reliability Engineering (Consumer)
                                Technology
                            </a>
                        </div>
                        <div className="col-2 col-md-4 col-lg-1">1</div>
                        <div className="col-6 col-lg-3 col-xl-2">Technology</div>
                        <div className="col-6 col-lg-3 col-xl-2">Mumbai</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-3">
            <br/>
            <div className="container px-1">
                <div className="card-body d-flex flex-wrap justify-content-between" style={{background: "#013966" , borderRadius: "15px"}}>
                    <div className="col-12 col-md-8 col-lg-5 text-white">
                        <br/>
                        <h5>Join The Pool</h5>
                        <p>
                            To join our team submit your CV here. 
                            Someone will reach out to you in case we 
                            have an opening suitable for your profile. 
                            Look forward to hearing from you.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-5 col-xl-4">
                        <img src="https://oeson.b-cdn.net/New%20folder/undraw_online_resume_re_ru7s%201.png" alt="webpage" style={{width:"100%"}}/>
                    </div>
                    <div className="col-12">
                        <br/>
                        <div className="mx-auto" style={{width:"fit-content"}}>
                            <a href="/uplode">
                                <button className="btn px-4" style={{background: "#1778F2" ,color: "white", }} id="upload-cv-btn">Upload CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
<Footer/>

    </div>
)

}
export default Jobs