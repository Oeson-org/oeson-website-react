import React from "react";
import Header from "./header";
import Footer from "../../layout/footer";

import "./uplode.css";

function Uplode(){
    return(
<div>
        <Header />
 <main >
        <section className="py-3 main">
            <div className="container">
                <br/>
                <h4>Talent Pool</h4>
                <br/>
                <p> 
                    Join our talent pool by simply submitting your resume. 
                    We’ll inform you about the new jobs matching your profile 
                    and update you if you are a best fit one of our open positions.
                </p>
            </div>
            <br/>
            <div className="px-2 container">
                <div className="card-body" style={{background: "#2C70C0", color: "white", borderRadius: "20px"}}>
                    <div className="text-center">
                        <br/> <h4>Submit Your Details</h4> <br/>
                    </div>
                    <form id="upload-form" method="post" enctype="multipart/form-data" class="d-flex flex-wrap justify-content-around">
                        <div className="form-group my-2 col-12 col-md-6 col-lg-5">
                            <label for="firstname" className="form-label">First Name *</label>
                            <input type="text" name="firstname" className="form-control" required/>
                        </div>
                        <div className="form-group my-2 col-12 col-md-6 col-lg-5">
                            <label for="lastname" className="form-label">Last Name *</label>
                            <input type="text" name="lastname" className="form-control" required/>
                        </div>
                        <div className="form-group my-2 col-12 col-md-6 col-lg-5">
                            <label for="mobile" className="form-label">Mobile *</label>
                            <input type="tel" name="mobile" className="form-control" required/>
                        </div>
                        <div className="form-group my-2 col-12 col-md-6 col-lg-5">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" required/>
                        </div>
                        <div className="form-group my-2 col-6 col-md-6 col-lg-5">
                            <label for="file" className="from-label">Upload CV</label> <br/>
                            <input type="file" name="resume" className="form-control-input" required/>
                        </div>
                        <div className="form-group my-2 col-6 col-md-6 col-lg-5">
                            <br/>
                            <div className="d-flex">
                                <button className="btn btn-dark px-4 ml-auto" type="submit">Submit</button>
                            </div>
                        </div>
               </form>
               </div>
 </div>
</section>
</main>  
<Footer/>
        </div>
    )
}

export default Uplode;