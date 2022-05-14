import React from 'react';

function Cards(){
return(

<div>
<main>
<section style={{background: "rgb(2, 76, 135)", borderTopRightRadius: "20px", borderTopleftRadius: "20px" }} id="carousel-large">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{position: "relative"}}>
                <ol class="carousel-indicators" style={{position: "absolute" , bottom: "-20px"}}>
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    
                    <div className="d-flex justify-content-around py-4">
                        <div className="col-3">
                            <div className="card" style={{borderRadius: "20px", height:" 70vh"}}>
                                <div class="card-img" style={{width: "75%", margin:" 0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2092.png" alt="mobile development" style = {{width:"100%"}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color: "#024C87"}}>Mobile App Development</h5>
                                    <p>
                                        Oeson is proficient in providing the best
                                        and unique mobile applications that fulfill
                                        almost every business’s demand in the present era. We
                                        have developed some applications so far in 
                                        various verticals including hotel booking, real estate,
                                        e-Learning, image processing, home automation, food
                                        delivery, e-commerce and online ticket booking, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card px-2" style={{borderRadius: "20px", height:" 70vh"}}>
                                <div className="card-img" style={{width: "80%" ,margin: "0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2093.png" alt="mobile development" style= {{width:"100%"}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color: "#024C87"}}>Web Development</h5>
                                    <p>
                                        Oeson, a team of experienced IT professionals capable of delivering high
                                        quality, cost-effective web development solution
                                        to our customers worldwide. If you are looking for
                                        excellent outsourced web development services, Oeson is
                                        the best choice for you. Our main goal is to help our customers
                                        maximize their business potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{borderRadius: "20px" ,height: "70vh"}}>
                                <div className="card-img" style={{width: "70%" , margin:" 0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2094.png" alt="mobile development" style={{width:"100%"}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color: "#024C87"}}>Digital Marketing Services</h5>
                                    <p>
                                        Oeson’s expertise in Digital Marketing has helped many companies to
                                        achieve approximately 120% growth and 7 of our clients have generated around 40%
                                        profit from campaigns launched by us. Our marketing team is a
                                        group of certified and experienced professionals. We provide SEO,
                                        advertising, content development, social media and related services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                  </div>
                  <div className="carousel-item">

                    <div className="d-flex justify-content-around py-4">
                        <div classv="col-3">
                            <div className="card" style={{borderRadius:" 20px", height:" 70vh"}}>
                                <div className="card-img" style={{width: "75%", margin:"0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2092.png" alt="mobile development" style ={{ width:"100%"}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color:" #024C87"}}>Mobile App Development</h5>
                                    <p>
                                        Oeson is proficient in providing the best
                                        and unique mobile applications that fulfill
                                        almost every business’s demand in the present era. We
                                        have developed some applications so far in 
                                        various verticals including hotel booking, real estate,
                                        e-Learning, image processing, home automation, food
                                        delivery, e-commerce and online ticket booking, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card px-2" style={{borderRadius: "20px", height: "70vh"}}>
                                <div className="card-img" style={{width: "80%" , margin: "0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/ui-ux-cover%20(1).png" alt="mobile development" style ={{ width:"100%"}}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color: "#024C87"}}>UI/UX Designing</h5>
                                    <p>
                                        Excellent User Interface has a tendency to leave a 
                                        lasting impression. People are drawn to creative material 
                                        because it not only attracts them but also persuades them 
                                        to take action. Oeson provides high-quality, strategic UI/UX 
                                        design services. In our team, we have some of the most creative 
                                        and skilled people in the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style={{borderRadius: "20px",  height:" 70vh"}}>
                                <div className="card-img" style={{width: "70%", margin:"0 auto"}}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2094.png" alt="mobile development" style ={{width:"100%" }}/>
                                </div>
                                <div className="card-body text-center">
                                    <h5 style={{color: "#024C87"}}>Digital Marketing Services</h5>
                                    <p>
                                        Oeson’s expertise in Digital Marketing has helped many companies to
                                        achieve approximately 120% growth and 7 of our clients have generated around 40%
                                        profit from campaigns launched by us. Our marketing team is a
                                        group of certified and experienced professionals. We provide SEO,
                                        advertising, content development, social media and related services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a clasNames="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
        </section>

        </main>
</div>

)


}
export default Cards;
