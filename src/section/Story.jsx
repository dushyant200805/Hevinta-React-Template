import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../includes/css/mainstyle.css";
import "../includes/css/style.css";

function About() {
    return (
        <>
            {/* <!-- about Section --> */}
            <section className="py-5 alt-bg  position-relative wave "> 
                <div className="container ">
                    <div className="row g-3 align-items-center">
                        <div className="col-lg-6 mb-3">
                            <div className="abt-1-img">
                                <img src="/public/about-img.webp" alt="about-img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-3">
                            <div className="about-content">
                                <h3 className="para-text"><span className="para-text fw-bold">About</span> Us</h3>
                                <h2 className="head-text">We’re worldwide non-profit charity foundation.</h2>
                                <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit.
                                </p>

                                <p className="para-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit.
                                </p>
                                <a href="about.html" className="prime-btn px-3 py-2"><FontAwesomeIcon icon={faPlus} className="fs-7 mx-2" />Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    );
}
export default About;