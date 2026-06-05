import { faCentos } from "@fortawesome/free-brands-svg-icons";
import { faHeartPulse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Contribute (){
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);
    return(
        <> 
            <section className="py-5 alt-bg" >
                <div className="container">
                    <div className="head-content mb-5">
                        <small className="secondery-text d-block text-capitalize fs-5 fw-bold mb-3">Ways You Can Contribute</small>
                        <h2 className="text-capitalize head-text fw-semibold">How to help us</h2>
                    </div>
                <div className="row g-3 align-items-center">
                        <div className="col-lg-6">
                            <div className="step-container p-2">
                                <div className="step-1 py-4 px-3 d-flex gap-3 mb-3" data-aos="fade-up">
                                    <div className="count pt-3">
                                        <span className="fs-5 d-inline-block">01</span>
                                    </div>
                                    <div className="content">
                                        <h3 className="para-text text-capitalize mb-3 fs-5">Send donation</h3>
                                        <p className="para-text m-0">Empower change by contributing to our cause through secure and
                                            seamless online donations on our NGO website.</p>
                                    </div>
                                </div>
                                <div className="step-1 py-4 px-3 d-flex gap-3 mb-3" data-aos="fade-up">
                                    <div className="count pt-3">
                                        <span className="fs-5 d-inline-block">02</span>
                                    </div>
                                    <div className="content">
                                        <h3 className="para-text text-capitalize mb-3 fs-5">Become volunteer</h3>
                                        <p className="para-text m-0">Join our passionate community of volunteers and make a lasting
                                            impact by dedicating your time and skills to support our mission</p>
                                    </div>
                                </div>
                                <div className="step-1 py-4 px-3 d-flex gap-3 mb-3" data-aos="fade-up">
                                    <div className="count pt-3">
                                        <span className="fs-5 d-inline-block">03</span>
                                    </div>
                                    <div className="content">
                                        <h3 className="para-text text-capitalize mb-3 fs-5">Share media</h3>
                                        <p className="para-text m-0">Amplify our message and create awareness by sharing impactful
                                            stories and media content from our NGO website across social platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 " data-aos="zoom-in">
                            <img src="/public/help-content-image.webp" alt="child-image"
                                className="object-fit-contain w-100" height="400"/>
                        </div>
                    </div>

                </div>
            </section>
            <section className="py-5" >
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="card-container p-3 prime-border border">
                                <div className="card-icon mb-3">
                                    <FontAwesomeIcon icon={faHeartPulse} className="prime-text fs-1"/>
                                </div>
                                <div className="content">
                                    <h2 className="head-text text-capitalize fw-semibold mb-3">
                                        helping humanity
                                    </h2>
                                    <p className="para-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia aspernatur
                                        odio molestias ipsa hic quaerat, facere aperiam saepe debitis?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="card-container p-3 prime-border border">
                                <div className="card-icon mb-3">
                                    <FontAwesomeIcon icon={faCentos} className="prime-text fs-1"/>
                                </div>
                                <div className="content">
                                    <h2 className="head-text text-capitalize fw-semibold mb-3">
                                        community support
                                    </h2>
                                    <p className="para-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia aspernatur
                                        odio molestias ipsa hic quaerat, facere aperiam saepe debitis?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="card-container p-3 prime-border border">
                                <div className="card-icon mb-3">
                                    <FontAwesomeIcon icon={faUser} className="prime-text fs-1"/>
                                </div>
                                <div className="content">
                                    <h2 className="head-text text-capitalize fw-semibold mb-3">
                                        people driven impact
                                    </h2>
                                    <p className="para-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia aspernatur
                                        odio molestias ipsa hic quaerat, facere aperiam saepe debitis?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contribute;