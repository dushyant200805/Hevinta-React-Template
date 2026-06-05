import "@splidejs/splide/css";
import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
function Banner() {
    const sliderRef = useRef(null);
      useEffect(() => {
    new Splide(sliderRef.current, {
    type      : 'loop',
    perPage   : 1,
    autoplay  : true,
    interval  : 4000,
    perMove: 1, 
    speed     :  1500, // transition speed in milliseconds
    arrows    : false,
    pagination: false,
    pauseOnHover: false,
    }).mount();
  }, []);
    return (
        <>
            {/* <!-- Banner --> */}
    <section className="banner-bg">
        <div id="banner-slider" className="splide" ref={sliderRef}>
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide slide-1">
                        <div className="container d-flex align-items-center justify-content-center h-100">
                            <div className="splide-container text-center z-1">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                 Healing with Humanity
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                   Hevinta Trust works to spread hope, care, and positive change in every community.
                                </p>
                                <div>
                                    <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </Link>
                                     <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                         Join Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide slide-2">
                        <div className="container d-flex align-items-center justify-content-center h-100">
                            <div className="splide-container text-center z-1">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                 Empowering Through Education
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                   From education to empowerment, we stand for humanity.Together, we can build brighter futures for all.
                                </p>
                                <div>
                                    <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </Link>
                                     <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                         Join Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="splide__slide slide-3">
                        <div className="container d-flex align-items-center justify-content-center h-100">
                            <div className="splide-container text-center z-1">
                                <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
                                    Welcome to Hevinta
                                </p>
                                <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
                                   Together, We Rise
                                </h1>
                                <p className="white-text text-capitalize mb-4 fs-5">
                                  Hevinta Trust is a step toward hope and healing.Let’s spread love, care, and change—one life at a time.
                                </p>
                                <div>
                                    <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                        Donate Now
                                    </Link>
                                     <Link to="/Contact" className="btn prime-btn-2  btn-lg rounded-0 m-2">
                                         Join Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}
export default Banner;  