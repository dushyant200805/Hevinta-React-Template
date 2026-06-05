import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
function Cause() {
    return (
        <> 
            {/* <!-- our-mission --> */}
            <section className="ptb" >
                <div className="container">
                    <div className="row gx-2 align-items-center">
                        <div className="col-lg-6">
                            <div className="mission-1-img position-relative p-2">
                                <img src="/public/mission-image.webp" alt="mission-image" className="object-fit-cover w-100" height="400"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-2">
                            <div className="about-content p-2">
                                <h3 className="head-text"><span className="para-text fw-bold"> Our </span>Mission</h3>
                                <h2 className="para-text">We’re on a mission to solve the water crisis and reinvent charity.</h2>
                                <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit.
                                </p>
                                <div className="my-3 para-text"><span><i className="fa fa-check-circle mx-2 prime-text"></i></span>We Build and
                                    Create</div>
                                <div className="mb-5 para-text"><span><i className="fa fa-check-circle mx-2 prime-text"></i></span>Medicine Help &
                                    Water Delivery</div>
                            
                                <Link to="about.html" className="prime-btn px-3 py-2 my-3 text-capitalize"><FontAwesomeIcon icon={faPlus} className="fs-7 mx-2" /> learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cause;