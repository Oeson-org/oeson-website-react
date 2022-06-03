import React from 'react'
import './career.css'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

const Career = () => {
    return (
        <div>
                <Header />
                <main>
        <section style={{height: "60vh", background: "#024C87"}}>
            <div className="container d-flex align-items-center h-100">
                <div className="text-white col">
                    <br/><br/>
                    <h2>Career at Oeson</h2>
                    <h3>
                        We want everybody to love <br/>
                        work as much as we do.
                    </h3>
                    <br/>
                    <a href="./jobs.html">
                        <button className="btn btn-light">See Open Positions</button>
                    </a>
                </div>
            </div>
        </section>

        <section id="career-sec">
            <div className="container h-100 d-flex align-items-end">
                <div>
                    <div className="text-center">
                        <h4>Explore Opportunities</h4>
                    </div>
                    <br/>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="col-12">
                            <p>
                                What's the next stop on your journey? Is the technology more advanced? 
                                Do you want to be a better version of yourself? Or perhaps a stronger 
                                maker community? We'll give you with the resources, approaches, and people 
                                to get you where you want to go. So you're inspired to develop what's next, 
                                advance your job, and go further with your partner. Proceed cautiously. 
                                Bring the whole globe with you.
                            </p>
                        </div>
                        <br/>
                        <div className="col-12 col-md-8 col-lg-6 my-2">
                            <a href="./internship" className="card-body d-flex" style={{background:"#00B28F" , border: "none"}}>
                                <div class="col-6 text-white">
                                    <br/>
                                    <h5>Student / Internships</h5>
                                </div>
                                <div className="col-6">
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%20165.png" alt="Student" style={{width:"100%"}}/>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 my-2">
                            <a href="./jobs" className="card-body d-flex h-100" style={{background: "#F16C51"}}>
                                <div className="col-5 text-white">
                                    <br/>
                                    <h5>Explore Opportunities <br/> by Location</h5>
                                </div>
                                <div className="col-7">
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%20164.png" alt="Student" style={{width:"100%"}}/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="no-small" style={{marginTop:"35px"}}>
                <div className="d-flex container">
                    <div className="col-3">
                        <img src="https://oeson.b-cdn.net/New%20folder/unsplash_-VHQ0cw2euA.png" alt="macbook" style={{width:"75%"}}/>
                    </div>
                    <div className="col-9">
                        <div className="d-flex w-100">
                            <div className="col-7">
                                <img src="https://oeson.b-cdn.net/New%20folder/1212.png" alt="desk" style={{width:"100%"}}/>
                            </div>
                            <div classv="col-5">
                                <img src="https://oeson.b-cdn.net/New%20folder/unsplash_wD1LRb9OeEo.png" alt="discussion" style={{ width:"100%"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-3" style={{background: "#024C87"}}>
            <div className="container h-100 text-white">
                <div className="d-flex">
                    <div className="col-5 px-0">
                        <br/>
                        <div className="ml-auto" style={{width: "fit-content"}}>
                            <h1 style={{letterSpacing: "2px" , fontWeight: "500"}}>OUR CULTURE</h1>
                            <br/>
                            <h2 style={{letterSpacing: "2px"}}>RUNS DEEP</h2>
                        </div>
                    </div>
                    <div className="col-7"></div>
                </div>
                <br/>
                <div className="d-flex">
                    <div className="col-4 col-lg-5"></div>
                    <div className="col-8 col-lg-7" style={{borderLeft: "4px solid rgba(196, 196, 196, 0.37);"}}>
                        <div style={{maxWidth: "300px;"}}>
                            <h4>Fostering creativity and innovation </h4>
                        </div>
                        <div style={{maxWidth: "500px;"}}>
                            <p>
                                We maintain a flexible work environment focused on getting the best
                                results. While we have beautiful HQ space in the area of Indore, India.
                                We encourage a harmony between remote and in-person interation.
                            </p>
                            <h6>Tanishq Chouhan (MD, C.E.O) </h6>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </section>

        <section id="blog-pics">
            <div className="hold">
                <div className="image" style={{backgroundImage: "url('https://oeson.b-cdn.net/New%20folder/Rectangle%20169.png')"}}></div>
                <div className="image" style={{backgroundImage: "url('https://oeson.b-cdn.net/New%20folder/Rectangle%20170.png')"}}>
                    {/* <div style={{position: "absolute", width: "100%", height: "100%", top:"0" , left:" 0" , display: "flex" , alignItems: "center"}}>
                        <h3 style={{color: "white", marginRight: "30px", textAlign: "right", width: "100%"}}>Let's unplug & <br/> unwind !</h3>
                    </div> */}
                </div>
                <div className="image" style={{backgroundImage: "url('https://oeson.b-cdn.net/New%20folder/Rectangle%20171.png')"}}></div>
                <div className="image" style={{backgroundImage: "url('https://oeson.b-cdn.net/New%20folder/Rectangle%20174.png')"}}></div>
                <div className="image" style={{backgroundImage: "url('https://oeson.b-cdn.net/New%20folder/Rectangle%20173.png')"}}></div>
            </div>
        </section>
    </main>
    <Footer/>
        </div>
    )
}

export default Career