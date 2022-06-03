  import Header from './header';
 
//  import './stylesheet.css';
const Internship=()=>{
return(
    <div>
<Header/>
        
        <main>
            <section className="section-hero">
                <div className="row">
                    <div className="col-lg-6" >
                        <div>
                            <h1 className="heading-custom" style={{marginTop:"90px"}}>
                                Oeson Global
                                <span>Internship</span> 
                                Program
                            </h1>
                            <p className="para">
                                The Oeson Global Internship Program is a  great opportunity for college students and recent graduates to gather experience in the corporate culture, and give an extra boost to their professional profile. Apply today to build a solid foundation for your career and ace in any field you prefer.

                            </p>
                            <div className="buttons">
                                <button className="btns btns--blue">Apply Now</button>&nbsp;&nbsp;
                                <button className="btns btns--white refer-some-one">Refer Someone Else</button>
                            </div>
                            <div className="numbers">
                                <div className="numbers__interns">1500+<span class="numbers__1">Interns Applied</span></div>
                                <div className="numbers__openings">7+<span class="numbers__2">Openings</span></div>                        
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="gallery">
                            <div className="gallery__item gallery__item--1">
                                <img src="https://oeson.b-cdn.net/New%20folder/one.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--2">
                                <img src="https://oeson.b-cdn.net/New%20folder/two.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--3">
                                <img src="https://oeson.b-cdn.net/New%20folder/seven.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--4">
                                <img src="https://oeson.b-cdn.net/New%20folder/five.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--5">
                                <img src="https://oeson.b-cdn.net/New%20folder/four.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--6">
                                <img src="https://oeson.b-cdn.net/New%20folder/three.jpg" alt="img" className="gallery__img"/>
                            </div>
                            <div className="gallery__item gallery__item--7">
                                <img src="https://oeson.b-cdn.net/New%20folder/six.jpg" alt="img" className="gallery__img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            <section className="section-benefits">
                <h1 className="heading-secondary-custom heading--blue u-margin-bottom-big">&nbspOur Pillars</h1>
                <div className="benefit">
                    <div className="benefit__content benefit__content-1">
                        <div>
                            <svg className="benefit__icon">
                                <use xlink href="../img/icomoon/symbol-defs.svg#icon-light-bulb"></use>
                            </svg>
                        </div>
                        <h2 className="benefit__heading-innovating">Srijan</h2><i>Create</i>
                        <p className="benefit__para">
                            Create a career you aspire to, through working on innovative hands-on tasks
                        </p>
                    </div>
                    <div className="benefit__image benefit__image-1">
                    <div className="benefit__content">
                        <div>
                            <svg className="benefit__icon">
                                <use xlink href="../img/icomoon/symbol-defs.svg#icon-happy"></use>
                            </svg>
                        </div>
                        <h2 className="benefit__heading-inspiring">Sanjaal</h2><i>Network</i>
                        <p className="benefit__para">
                            Network as you build your skills- cultivate relationships that inspire you to grow
                        </p>
                    </div></div>
                    <div className="benefit__image benefit__image-2">
                    </div>
                    <div className="benefit__content">
                        <div>
                            <svg className="benefit__icon">
                                <use  href="../img/icomoon/symbol-defs.svg#icon-cog"></use>
                            </svg>
                        </div>
                        <h2 className="benefit__heading-integrating">Sanchalan</h2><i>Organise</i>
                        <p className='benefit__para'>
                           A goal without a plan is just a wish - Learn the art of organizing at Oeson
                        </p>
                    </div>
                </div>
            </section>
             <section className="section-form">
                <div className="container-image">
                    <img src="https://ik.imagekit.io/ekleesk3b0h/oeson/unsplash_iJ2IG8ckCpA_y6tGlQjV9y.png?updatedAt=1640260700350&tr=w-300,h-170,fo-auto" alt="img" className="form-hand-left-image" />
                    <img src="https://ik.imagekit.io/ekleesk3b0h/oeson/unsplash_iJ2IG8ckCpA__1__Db2vo7WTSUXj.png?updatedAt=1640260700165&tr=w-370,h-170,fo-auto" alt="img" className="form-hand-right-image" />
                </div>
                <div className="help">
                    <div className="help__form">
                        <form className="form">
                            <h2 className="heading-form-custom u-center-text">Help Your Friends / Relative to get an Internship </h2>
                            <div className="form__container">
                                <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                <div className="form__paragraph">OR</div>
                                <input type="tel" className="form__input" placeholder="Enter Mobile" id="phone" required />
                            </div>
                            <div className="form__button">
                                <button className="btns btns--sm">Help Someone</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> 
            {/* <section className="section-form">
                <div className="container-image">
                    <img src="https://ik.imagekit.io/ekleesk3b0h/oeson/unsplash_iJ2IG8ckCpA_y6tGlQjV9y.png?updatedAt=1640260700350&tr=w-300,h-170,fo-auto" alt="img" className="form-hand-left-image" />
                    <img src="https://ik.imagekit.io/ekleesk3b0h/oeson/unsplash_iJ2IG8ckCpA__1__Db2vo7WTSUXj.png?updatedAt=1640260700165&tr=w-370,h-170,fo-auto" alt="img" className="form-hand-right-image" />
                </div>
                <div className="help">
                    <div className="help__form">
                        <form className="form">
                            <h2 className="heading-form-custom u-center-text">Help Your Friends / Relative to get an Internship </h2>
                            <div className="form__container">
                                <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                <div className="form__paragraph">OR</div>
                                <input type="tel" className="form__input" placeholder="Enter Mobile" id="phone" required />
                            </div>
                            <div className="form__button">
                                <button className="btns btns--sm">Help Someone</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}
            <section className="section-why-oeson">
                <h2 className="heading-secondary-custom heading--blue u-margin-bottom-big u-center-text">Why Oeson?</h2>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="internBenefit">
                            <div className="internBenefit__list internBenefit__list--1 internBenefit__blue">
                                    <div className="internBenefit__header internBenefit__header--1">
                                        <h3 className="heading-tertiary-custom heading--white u-center-text">Verified completion certificate</h3>
                                    </div>
                                    <div className="internBenefit__icon internBenefit__icon--1">
                                        <svg className="internBenefit__svg--white">
                                            <use xlink href="../img/icomoon/symbol-defs.svg#icon-verified"></use>
                                        </svg>
                                    </div>
                                    <div className="internBenefit__body internBenefit__body--white">
                                        <p>
                                            A verifiable certificate will be provided after successful completion of all the tasks assigned during the internship.

                                        </p>
                                    </div>
                                    <div className="internBenefit__link">
                                        <a href="#" className="btn--text btn--text--yellow">Learn More &rarr;</a>
                                    </div>
                            </div>
                            <div className="internBenefit__list internBenefit__list--2 internBenefit__white">
                                    <div className="internBenefit__header internBenefit__header--white">
                                        <h3 className="heading-tertiary-custom heading--blue u-center-text">Networking Opportunity</h3>
                                    </div>
                                    <div className="internBenefit__icon internBenefit__icon--1">
                                        <svg className="internBenefit__svg--blue">
                                            <use xlink href="../img/icomoon/symbol-defs.svg#icon-verified"></use>
                                        </svg>
                                    </div>
                                    <div className="internBenefit__body internBenefit__body--blue">
                                        <p>
                                            You will get to interact with talented and experienced people from all  fields, and an opportunity to network and grow under their mentorship. Network with other enthusiastic individuals like you and work as a community helping others and growing together.

                                        </p>
                                    </div>
                                    <div className="internBenefit__link">
                                        <a href="#" className="btn--text btn--text--blue">Learn More &rarr;</a>
                                    </div>
                            </div>
                            <div className="internBenefit__list internBenefit__list--3 internBenefit__white">
                                    <div className="internBenefit__header internBenefit__header--white">
                                        <h3 className="heading-tertiary-custom heading--blue u-center-text">Workshop Opportunity</h3>
                                    </div>
                                    <div className="internBenefit__icon internBenefit__icon--1">
                                        <svg className="internBenefit__svg--blue">
                                            <use xlink href="../img/icomoon/symbol-defs.svg#icon-verified"></use>
                                        </svg>
                                    </div>
                                    <div className="internBenefit__body internBenefit__body--blue">
                                        <p>
                                            Workshops and guidance sessions will be conducted regularly to improve your professional profile, expertise in technical field and soft skills required to excel in the real life job environment. Subject matter experts will help you maneuver through your professional journey.
                                        </p>
                                    </div>
                                    <div className="internBenefit__link">
                                        <a href="#" className="btn--text btn--text--blue">Learn More &rarr;</a>
                                    </div>
                            </div>
                            <div className="internBenefit__list internBenefit__list--4 internBenefit__blue">
                                    <div className="internBenefit__header internBenefit__header--1">
                                        <h3 className="heading-tertiary-custom heading--white u-center-text">Recommendation Letter</h3>
                                    </div>
                                    <div className="internBenefit__icon internBenefit__icon--1">
                                        <svg className="internBenefit__svg--white">
                                            <use xlink href="../img/icomoon/symbol-defs.svg#icon-verified"></use>
                                        </svg>
                                    </div>
                                    <div className="internBenefit__body internBenefit__body--white">
                                        <p>
                                            Recommendation letters will be provided to best performing candidates as per various key performance indicators. 

                                        </p>
                                    </div>
                                    <div className="internBenefit__link">
                                        <a href="#" className="btn--text btn--text--yellow">Learn More &rarr;</a>
                                    </div>
                            </div>
                            <div class="internBenefit__list--5">
                                <img src="https://oeson.b-cdn.net/New%20folder/K4C-removebg.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="vertical_line">

                    </div>
                    <div className="col-lg-3">
                        <div className="details">
                            <h3 className="details__heading">Details</h3>
                            <div className="details__para">
                                
                                <p>
                                    Oeson has brought to you it's once in a lifetime opportunity by it's Global Internship Program to help you enhance your skills and prepare you for the next year, so that you don't miss any opportunity that comes your way.
                                </p>
                                <p>
                                    Connect with more like minded people around you who will motivate you constantly across this journey and get an opportunity to interact with experts from different fields through virtual events and workshops arranged just for you.
                                </p>
                                <p>
                                    Prepare yourself to have a taste of the corporate world and get a Globally Accepted Certificate on successfully completing all the works assigned to you, even a Letter of Recommendation based on your performance. 
                                </p>
                                <p>
                                    Moreover, you will receive Special Badges, for your Exceptional Performances and give a boost to your portfolio.
                                </p>
                                <p>
                                    So, gear up and give your best because as the best performing candidates you might even get a Job Offer and get hired directly in our company
                                </p>
                                <p>
                                    This time start your year not by setting some lofty goals but by taking some action and giving your Professional Portfolio an edge over others and Aggressively Improve your Technical and Soft skills and start your year strong.
                                </p>
                            </div>
                            <div className="details__button">
                                <button className="btns btns--sm">Help someone</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section-testimonial">
                <h3 className="heading-secondary-custom heading--blue u-margin-bottom-big u-center-text">They said it!</h3>
                <h4 className="heading-tertiary-custom heading-testimonial heading--blue u-margin-bottom-big u-center-text">Testimonial</h4>
                <div className="testimonials">
                    


                    <div className="carousel carousel-pseudo" data-flickity='{ "autoPlay": true, "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }'>
                        <div className="carousel-cell empty"></div>
                        <div className="carousel-cell carousel-cell-testimonial">
                                <img src="https://oeson.b-cdn.net/New%20folder/Melike.jpg" alt="img" className="carousel-cell-testimonial__image" />
                            <div className="carousel-cell-testimonial__content">
                                <div className="carousel-cell-testimonial__body">
                                    <p className="carousel-cell-testimonial__para">
                                        As assigned by my internship at OESON I had listed the steps that I think can be taken to acquire a talented HR generalist.
                                         The tasks were pretty enjoyable that opened my horizons. I devised strategies that occurred in three processes. 
                                         One of those strategies is the internship that I am also in. I want to say that I am happy and grateful again for this opportunity.
                                          It is very nice to learn the tricks of the trade by gaining experience in the field! #OGIP.
                                    </p>
                                </div>
                                <div className="carousel-cell-testimonial__name">
                                    Melike Bulguroglu
                                </div>
                                <div className="carousel-cell-testimonial__department">
                                    Human Resource Intern | Turkey
                                </div>
                            </div>
                        </div>
                        <div className="carousel-cell carousel-cell-testimonial">
                            <img src="https://oeson.b-cdn.net/New%20folder/Boqian%20Shen.jpg" alt="img" className="carousel-cell-testimonial__image" />
                        <div className="carousel-cell-testimonial__content">
                            <div className="carousel-cell-testimonial__body">
                                <p className="carousel-cell-testimonial__para">
                                    I want to thank all the staff of OGIP and thanks to them for giving me this opportunity.The tasks were really helpful
                                    to me, that I learned something new. What a wonderful journey was it #OGIP.<br/><br/><br/><br/><br/><br/><br/>
                                </p>
                            </div>
                            <div className="carousel-cell-testimonial__name">
                                Boqian Shen
                            </div>
                            <div className="carousel-cell-testimonial__department">
                                Web Developer | Australia
                            </div>
                        </div>
                        </div>
                        <div className="carousel-cell carousel-cell-testimonial">
                            <img src="https://oeson.b-cdn.net/New%20folder/khadidja.jpg" alt="img" className="carousel-cell__image" />
                            <div className="carousel-cell-testimonial__content">
                                    <div className="carousel-cell-testimonial__body">
                                        <p className="carousel-cell-testimonial__para"> I truly enjoyed how we got to interact with one another through the various tasks presented and the weekly meetings.
                                         To me, those were a delight, as they truly shed light on teamwork and the endeavor of OGIP. I also liked how the tasks pushed me out of my comfort zone
                                          and made me write more sharply. It taught me more than I expected.
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        </p>
                                    </div>
                                    <div className="carousel-cell-testimonial__name">
                                    Khadidja Boulahbal
                                    </div>
                                    <div className="carousel-cell-testimonial__department">
                                    Content Writer | Algeria
                                    </div>
                            </div>
                        </div>
                        <div className="carousel-cell carousel-cell-testimonial">
                            <img src="https://oeson.b-cdn.net/New%20folder/Screenshot%20(6).png" alt="img" className="carousel-cell__image" />
                            <div className="carousel-cell-testimonial__content">
                                    <div className="carousel-cell-testimonial__body">
                                        <p className="carousel-cell-testimonial__para"> The 4 weeks of this internship programme gave me such a great experience. 
                                            I have also learnt some news things while doing my tasks.Thank you to the #OESON team for giving me this wonderful opportunity.
                                            Thank you team OGIP for helping me in all ways. 
                                            Thank you for all the co-participants too for making this programme a great one.
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        </p>
                                    </div>
                                    <div className="carousel-cell-testimonial__name">
                                    Vidyavarshini L
                                    </div>
                                    <div className="carousel-cell-testimonial__department">
                                    UI/UX Designer | India
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-100 section-steps-to-apply" style={{position: "relative;"}}>
                <div className="w-100 py-4" style={{background: "#012D50"}}>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pl-0">
                            <img src="https://ik.imagekit.io/ekleesk3b0h/oeson/unsplash_g1Kr4Ozfoac_KZ65YnBON.png" alt="people" style = {{width:"100%"}}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="text-center text-white pb-4">
                                <h3 style={{fontWeight: "600", fontSize: "4.5rem"}}>Steps to Apply</h3>
                            </div>
                            <div className="d-flex justify-content-around py-4 mb-4">
                                <div className="no-small">
                                    <button className="btn-lg bg-transparent text-white border-white" id="btn-left-slide"> <i className="fas fa-long-arrow-alt-left"></i> </button>
                                </div>
                                <div className="text-white text-center px-2" style={{fontSize: "1.8rem"}}>
                                    Follow the below steps to apply
                                </div>
                                <div className="no-small">
                                    <button className="btn-lg bg-transparent text-white border-white" id="btn-right-slide"> <i className="fas fa-long-arrow-alt-right"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100" style={{position:"relative"}}>
                    <div className="w-100 step-carousel-outer">
                        <div className="carousel" data-flickity='{ "autoPlay": false, "freeScroll": true, "contain": true, "prevNextButtons": true, "pageDots": true }'>
                            <div className="carousel-cell col-lg-6 col-md-4 col-1 p-4 mx-4 bg-transparent"></div>
                            <div className="carousel-cell col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mx-4 mb-4">
                                <div className="step-hold p-0" style={{position: "relative"}}>
                                    <div className="step-img-hold">
                                        <img src="https://oeson.b-cdn.net/New%20folder/495623-PI3AWD-314.jpg" alt="person" style={{width:"100%"}}/>
                                    </div>
                                    <div className="step-text-hold" style={{position:"relative", backgroundColor: "#024C87"}}>
                                        <div className="text-center card-body text-white mx-auto" style={{width: "80%;"}}>
                                            <br/>
                                            <h4 style={{fontSize: "2rem;"}}>01. Apply Here</h4>
                                            <br/>
                                            <p style={{fontSize:" 1.7rem;"}}>Click on Your Country to Apply.<br/>Deadline: March 26, 2022</p>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mx-4 mb-4">
                                <div className="step-hold p-0" style={{position: "relative;"}}>
                                    <div className="step-img-hold">
                                        <img src="https://oeson.b-cdn.net/New%20folder/2710477.jpg" alt="person" style={{ width:"100%"}}/>
                                    </div>
                                    <div className="step-text-hold" style={{position: "relative", backgroundColor: "#024C87;"}}>
                                        <div className="text-center card-body text-white mx-auto" style={{width: "80%"}}>
                                            <br/>
                                            <h4 style={{fontSize: "2rem"}}>02. Confirmation Mail</h4>
                                            <br/>
                                            <p style={{fontSize: "1.7rem"}}>Once your application is approved, you'll hear back from us via mail and background check will be done.</p>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mx-4 mb-4">
                                <div className="step-hold p-0" style={{position: "relative"}}>
                                    <div className="step-img-hold">
                                        <img src="https://oeson.b-cdn.net/New%20folder/5259951.jpg" alt="person" style={{width:"100%"}}/>
                                    </div>
                                    <div className="step-text-hold" style={{position: "relative", backgroundColor: "#024C87;"}}>
                                        <div className="text-center card-body text-white mx-auto" style={{width: "80%"}}>
                                            <br/>
                                            <h4 style={{fontSize: "2rem"}}>03. FAQs</h4>
                                            <br/>
                                            <p style={{fontSize: "1.7rem"}}><a href="https://docs.google.com/document/d/1J01QPH8TAC2AdzlZx1hNiuKpnnUbl-K_0K3F5J9ihJw/edit?usp=sharing">Go through the <u>FAQs</u> to help you guide though OGIP's timeline and structure.</a></p>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10 mx-4 mb-4">
                                <div className="step-hold p-0" style={{position: "relative"}}>
                                    <div className="step-img-hold">
                                        <img src="https://oeson.b-cdn.net/New%20folder/Wavy_Lst-11_Single-06.jpg" alt="person" style={{width:"100%"}}/>
                                    </div>
                                    <div className="step-text-hold" style={{position: "relative", backgroundColor: "#024C87;"}}>
                                        <div className="text-center card-body text-white mx-auto" style={{width: "80%"}}>
                                            <br/>
                                            <h4 style={{fontSize: "2rem;"}}>04. Help & Support</h4>
                                            <br/>
                                            <p style={{fontSize: "1.7rem;"}}>Request to join the Oeson Global Internship Program Linkedin Discussion Group for announcements and updates.</p>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </main>
    </div>
)

        }
export default Internship;