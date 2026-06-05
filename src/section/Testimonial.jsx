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
        <section className="py-5 alt-bg" >
        <div className="container">
            <div className="head-content mb-5">
                <p className="secondery-text text-capitalize fw-bold mb-3 ">Testimonials</p>
                <h2 className="text-capitalize head-text fw-semibold">What People Say</h2>
            </div>
                <div id="testimonial-slider" className="splide" ref={sliderRef}>
                <div className="splide__track py-2 px-3 text-center">
                    <ul className="splide__list">
                        <li className="splide__slide  card-bg rounded-0 shadow-sm ">
                            <div className="test-body card-bg p-2 p-sm-4 text-center">
                                <div className="text-center mb-4">
                                    <div className="testimonial-img mx-auto mb-4">
                                        <img src="assets/images/test1.webp" alt="testimonial-img-1">
                                    </div>
                                </div>
                                <blockquote className="fs-6 para-text m-0 mb-4 text-center">
                                    Working with this team was a game-changer for our business. Their professionalism
                                    and creativity exceeded our expectations
                                </blockquote>
                                <h3 className="text-capitalize fs-5 prime-text mb-1">monica frazier</h3>
                                <h4 className="text-capitalize para-text fs-8">foundder of apple</h4>
                            </div>
                        </li>
                         <li className="splide__slide  card-bg rounded-0 shadow-sm ">
                            <div className="test-body card-bg p-2 p-sm-4 text-center">
                                <div className="text-center mb-4">
                                    <div className="testimonial-img mx-auto mb-4">
                                        <img src="assets/images/test2.webp" alt="testimonial-img-1">
                                    </div>
                                </div>
                                <blockquote className="fs-6 para-text m-0 mb-4 text-center">
                                    Working with this team was a game-changer for our business. Their professionalism
                                    and creativity exceeded our expectations
                                </blockquote>
                                <h3 className="text-capitalize fs-5 prime-text mb-1">saabir al-obeid</h3>
                                <h4 className="text-capitalize para-text fs-8">foundder of googele</h4>
                            </div>
                        </li>
                         <li className="splide__slide  card-bg rounded-0 shadow-sm ">
                            <div className="test-body card-bg p-2 p-sm-4 text-center">
                                <div className="text-center mb-4">
                                    <div className="testimonial-img mx-auto mb-4">
                                        <img src="assets/images/test3.webp" alt="testimonial-img-1">
                                    </div>
                                </div>
                                <blockquote className="fs-6 para-text m-0 mb-4 text-center">
                                    Working with this team was a game-changer for our business. Their professionalism
                                    and creativity exceeded our expectations
                                </blockquote>
                                <h3 className="text-capitalize fs-5 prime-text mb-1">rose hopkins</h3>
                                <h4 className="text-capitalize para-text fs-8">foundder of twitter</h4>
                            </div>
                        </li>
                         <li className="splide__slide  card-bg rounded-0 shadow-sm ">
                            <div className="test-body card-bg p-2 p-sm-4 text-center">
                                <div className="text-center mb-4">
                                    <div className="testimonial-img mx-auto mb-4">
                                        <img src="assets/images/test4.webp" alt="testimonial-img-1">
                                    </div>
                                </div>
                                <blockquote className="fs-6 para-text m-0 mb-4 text-center">
                                    Working with this team was a game-changer for our business. Their professionalism
                                    and creativity exceeded our expectations
                                </blockquote>
                                <h3 className="text-capitalize fs-5 prime-text mb-1"> jack stephen</h3>
                                <h4 className="text-capitalize para-text fs-8">foundder of twitter</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
 
        </div>
    </section>
        </>
    )
}
export default Banner;  