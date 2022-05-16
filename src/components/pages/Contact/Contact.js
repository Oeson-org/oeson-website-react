import React from 'react'

const Contact = () => {
    return (
        <div>
            <main className="d-flex" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
                <div className="col-1" style={{ background: "#013966" }}></div>
                <div className="col-11" style={{ background: "#024C87" }}>
                    <div className="d-flex align-items-center" style={{ minHeight: "100vh", height: "fit-content" }}>
                        <div className="d-flex align-items-center justify-content-around w-100">
                            <div className="col-lg-3 no-small">
                                <div className="d-flex justify-content-center" style={{ gap: "20px;" }}>
                                    <div className="col" style={{ borderRadius: "15px", overflow: "hidden", padding: "0" }}>
                                        <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2062.png" alt="slice" width="100%" />
                                    </div>
                                    <div className="col" style={{ borderRadius: "15px", overflow: "hidden", padding: "0" }}>
                                        <img src="https://oeson.b-cdn.net/New%20folder/Rectangle%2065.png" alt="slice" width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-12 px-0">
                                <form id="contact-form" className="text-white mx-auto" style={{ maxWidth: "700px" }} name="contact-form" method="post">
                                    <div className="col">
                                        <h1 style={{ fontWeight: "bold" }}>Contact Us</h1>
                                    </div>
                                    <br />
                                    <div className="d-flex">
                                        <div className="col">
                                            <label for="first-name">First Name</label>
                                            <input type="text" className="form-control" name="firstname" required />
                                        </div>
                                        <div className="col">
                                            <label for="last-name">Last Name</label>
                                            <input type="text" className="form-control" name="lastname" required />
                                        </div>
                                    </div>
                                    <div className="col py-1">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" className="form-control" required />
                                    </div>
                                    <div className="col py-1">
                                        <label for="mobile">Phone Number</label>
                                        <input type="tel" name="phone" className="form-control" required />
                                    </div>
                                    <div className="col py-1">
                                        <label for="mobile">Comment or Message</label>
                                        <textarea rows="8" name="message" className="form-control"></textarea>
                                    </div>
                                    <div className="col pt-2">
                                        <button className="btn btn-light" type="submit">SEND MESSAGE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="pt-3 w-100">
                        <div className="w-100 d-flex flex-wrap justify-content-around align-items-center">
                            <div className="col-lg-4 col-12 col-md-6 text-white">
                                <h4>Get in Touch</h4>
                                <br />
                                <h6>Phone</h6>
                                <div className="col">
                                    <p>
                                        Due to COVID-19 , our full team are working remotely,
                                        Please email us and requests a callback.
                                    </p>
                                </div>
                                <h6>Email</h6>
                                <div className="col">
                                    <p>
                                        info.oeson@gmail.com
                                        <br />
                                        team.oeson@gmail.com
                                    </p>
                                </div>
                                <h6>Office Address</h6>
                                <div className="col">
                                    <p>
                                        52/7 Chawni, Indore, India
                                    </p>
                                </div>
                                <h6>Time</h6>
                                <div className="col">
                                    <p>
                                        9:00 AM-7:00 PM
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-6">

                                <div style={{ width: "400px", height: "400px", position: "relative" }}>
                                    <img src="https://oeson.b-cdn.net/New%20folder/Group%20214.png" alt="contact" width="130%" style={{ position: "absolute" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loader"></div>
            </main>
        </div>
    )
}

export default Contact