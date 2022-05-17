import React from 'react'

const About = () => {
  return (
    <div>
        <main>
        <section className="container py-4 about-main">
            <div className="d-flex justify-content-between flex-wrap" style={{fontSize: "large"}}>
                <div className="col-12 col-md-3 col-lg-3">
                    <h1>About Software</h1>
                    <h1>Company</h1>
                </div>
                <div className="col-12 col-md-9 col-lg-8">
                    <p style={{lineHeight: "175%" ,fontSize: "larger"}}>
                        We are a remote design company based in Indore, working with clients around the world. As
                        passionate designers, we love building products that are easy to use, accessible, engaging
                        and delightful.
                    </p>
                </div>
            </div>            
        </section>

        <section>
            <div className="container main-img-hold">
                <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2080.png" alt="about" style={{width:"100%"}}/>
            </div>
            <div className="main-img-hold-support"></div>
        </section>

        <section className="about-sec" style={{background: "#013966"}}>
            <br/>
            <div className="container text-white">
                <div className="py-3 pl-2" style={{borderLeft: "3px solid #0074FF"}}>
                    <h5>Here We Are</h5>
                </div>
                <br/>
                <div className="d-flex flex-wrap justify-content-around" style={{fontSize: "large", lineHeight: "30px"}}>
                    <div className="col-12 col-md-6">
                        <p style={{maxWidth: "480px"}}>
                            We are an IT consultant company, where we create clients around the
                            world and suggest them technology that propels their business forward
                            towards their digital revolution. We build their IT projects and offer our
                            marketing services and business strategies to boost their reach in the
                            global market.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p style={{maxWidth: "480px"}}>
                            Driving creativity within our team and nurturing new talents in
                            understanding our values and developing individual skills. We are always
                            curious about the design nugget and can go wherever it leads us. Our
                            belief is to make a memorable impression in the digital realm and we
                            are commited towards utilizing our experties in assisting our clients.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container d-flex flex-wrap stats">
                <div className="my-2 col-lg-3 col-6">
                    <h2 style={{color: "#E6B85C"}}>3+</h2>
                    <h3 style={{color: "white"}}>Total Clients</h3>
                </div>
                <div className="my-2 col-lg-3 col-6">
                    <h2 style={{color: "#E6B85C"}}>2+</h2>
                    <h3 style={{color: "white"}}>Ongoing Project</h3>
                </div>
                <div className="my-2 col-lg-3 col-6">
                    <h2 style={{color: "#E6B85C"}}>4</h2>
                    <h3 style={{color: "white"}}>Countries</h3>
                </div>
                <div className="my-2 col-lg-3 col-6">
                    <h2 style={{color: "#E6B85C"}}>3+</h2>
                    <h3 style={{color: "white"}}>Good Reviews</h3>
                </div>
            </div>
        </section>

        <section style={{background: "#013966"}}>
            <br/><br/><br/><br/><br/>
        </section>

        <section style={{minHeight: "35vh"}}>
            <div className="container border" style={{position: "relative"}}>
                <div className="col-lg-5 col-11 border px-4" style={{position: "absolute", top: "-50px", background: "#fff", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <div className="card-body px-4">
                        <h2 style={{color: "#013C6C; fontWeight: bold"}}>Let's Meet Our</h2>
                        <h2 style={{color: "#013C6C; fontWeight: bold"}}>Team</h2>
                        <br/><br/>
                        <div className="px-2 py-1" style={{borderLeft: "3px solid gray"}}>
                            <h5>6+ Lead Members</h5>
                            <span>DESIGNER - DEVELOPER - MARKETING</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container team-hold">
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/Tanishq.png" alt="people" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Tanishq Chouhan</h5>
                            <p>Founder | C.E.O</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="https://www.instagram.com/onetanishq/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://twitter.com/onetanishq">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/onetanishq/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-11 col-md-6">
                    <div classsName="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/Nischay.png" alt="people" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Nischay Chandra</h5>
                            <p>C.T.O</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="https://instagram.com/high_on_meme.02?utm_medium=copy_link">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://twitter.com/chandra_nischay">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/nischay-chandra-50b5a1211">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/Chirayu.png" alt="people" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Chirayu Bodana</h5>
                            <p>Business Development Executive</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="https://www.instagram.com/chirayu.bodana/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://twitter.com/chirayubodana05">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/chirayu-bodana-7521b41b2/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/handled_IMG_1077_1080_1920_80-removebg-preview-modified.png" alt="people" style ={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Mahima Sharma</h5>
                            <p>HR Admin</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="https://www.instagram.com/mima17_/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/mahima-sharma-202100218/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/mobile_file_2022-03-21_14-28-31-removebg-preview%20(1)-modified.png" alt="people" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Anushka Singh</h5>
                            <p>OGIP | Project Manager</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="https://www.instagram.com/anushka__singh/">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/anushka-singh-3137941ab/">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="w-50 mx-auto">
                                <img src="https://oeson.b-cdn.net/New%20folder/WhatsApp_Image_2022-03-21_at_9.15.17_PM-removebg-preview-modified.png" alt="people" style={{width:"100%"}}/>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Vijeytha Biradar</h5>
                            <p>Content Writer</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="https://www.linkedin.com/in/vijeta-biradar1987">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-3">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="img-hold"></div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Afzal Razzak</h5>
                            <p>UI Designer</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="img-hold"></div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Afzal Razzak</h5>
                            <p>UI Designer</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="team-card py-3 border">
                        <div className="img">
                            <div className="img-hold"></div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Afzal Razzak</h5>
                            <p>UI Designer</p>
                            <br/>
                            <div className="d-flex justify-content-around">
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </span>
                                <span className="logo-hold">
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-3 col-11 col-md-6">
                    <div className="team-card-add py-3">
                        <div className="img">
                            <div className="img-hold">
                                <i className="fa fa-plus fa-2x text-dark"></i>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h5>Afzal Razzak</h5>
                            <p>UI Designer</p>
                            <br/>
                            <div className="d-flex justify-content-center">
                                <form action="/career.html" className="inline">
                                    <button class="btn" >Join Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </section>

        <section style={{background: "#f6f6f6"}} className="py-3">
            <br/>
            <div className="container text-center">
                <p>
                    As a leader in technology exploring, Oeson is committed to exporting quality software worldwide. The general purpose of Oeson is to develop and promote advanced information <br/> 
                    technologies for multi-user operation.
                </p>
            </div>
            <br/><br/>
            <div className="text-center">
                <h5>OUR FEATURES</h5>
            </div>
            <br/>
            <div className="d-flex flex-wrap justify-content-center">
                <div class="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20227.png" alt="trophy" style={{width:"100%"}}/>
                        </div>
                        
                        <div class="text-center">
                            <h5>Team Of Experts</h5>
                            <p>
                                We are a team of trained and experienced professionals who are <br/>
                                capable of mating all of our clients requirements.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20228.png" alt="tube" style={{width:"100%"}}/>
                        </div>
                        <div class="text-center">
                            <h5>Support 24/7</h5>
                            <p>
                                Oeson is highly committed to its clients. We are available to <br/> 
                                serve and assist 24 hours a day, 7 days a week. We are ready to <br/> 
                                help anytime.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20204.png" alt="setting" style={{width:"100%"}}/>
                        </div>
                        <div className="text-center">
                            <h5>Equipped with Latest Technology</h5>
                            <p>
                                Oeson believes in ‘Update and Upgrade’. We are equipped with <br/> 
                                the latest technology tools and techniques to give our clients <br/> 
                                the best products and services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20204%20(1).png" alt="lookup" style={{width:"100%"}}/>
                        </div>
                        <div className="text-center">
                            <h5>100% Transparency</h5>
                            <p>
                                The quality that separates us from other companies in the <br/> 
                                market is transparency. We believe in being 100% honest and <br/> 
                                loyal to our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20206.png" alt="palm" style={{width:"100%"}}/>
                        </div>
                        <div className="text-center">
                            <h5>Affordable Pricing</h5>
                            <p>
                                Affordable Pricing All the products and services we offer, follow an affordable
                                pricing strategy so that client gets the best quality at a lower
                                price.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-10 feature-card">
                    <div className="card-body">
                        <div className="img">
                            <img src="https://oeson.b-cdn.net/New%20folder/Ellipse%20206%20(1).png" alt="satisfaction" style={{width:"100%"}}/>
                        </div>
                        <div className="text-center">
                            <h5>Customer Satisfaction</h5>
                            <p>
                                The only objective of Oeson is to deliver client satisfaction. Our <br/>
                                priority is to provide value to the people associated with us.
                            </p>
                        </div>
                    </div>
                </div>
              
            </div>
        </section>

        <section className="py-3">
            <br/>
            <div className="text-center">
                <h5>OUR CLIENTS</h5>
            </div>
            <br/>
            <div className="container d-flex client-hold">
                <div className="client">
                    <div className="profile-img-circle"></div>
                </div>
                <div className="client">
                    <div className="profile-img-circle"></div>
                </div>
                <div className="client">
                    <div className="profile-img-circle"></div>
                </div>
                <div className="client">
                    <div className="profile-img-circle"></div>
                </div>
                <div className="client">
                    <div className="profile-img-circle"></div>
                </div>
            </div>
            <br/><br/>
        </section>

        <section className="py-3">
            <div className="container d-flex flex-wrap justify-content-around align-items-center">
                <div className="col-12 col-md-5 my-2">
                    <h5 style={{color: "#E6B85C"}}>WORK WITH US</h5>
                    <br/>
                    <h4>Have you decided to work on <br/> a project with us?</h4>
                    <br/><br/>
                    <button className="btn px-4" style={{color: "white", background: "#00D0B0"}}>HIRE US</button>
                </div>
                <div className="col-12 col-md-5 my-2">
                    <p>
                        Interested in joining our team and impacting the world? Reach out! We are
                        always looking for new projects to help take design to the next level!
                    </p>
                </div>
            </div>
            <br/>
        </section>

  </main>

    
    
    
    
    
    </div>
  )
}

export default About
