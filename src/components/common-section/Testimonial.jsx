import "@splidejs/splide/css";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import TesimonialCard from "../Ui/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
function Banner() {
  const sliderRef = useRef(null);
  // aos animation
useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: false,     // run only once
  });
}, []);

  useEffect(() => {
    const splide = new Splide(sliderRef.current, {
      type: "loop",
      perPage: 3,
      perMove: 1,             
      autoplay: true,
      interval: 2000,
      speed: 800,            
      arrows: false,
      pagination: false,
      pauseOnHover: true,     
      gap: "20px",
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    });

    splide.mount();

    return () => splide.destroy();  
  }, []);

  return (
    <section className="py-5 " data-aos="fade-up">
      <div className="container">
        <div className="head-content mb-5">
          <p className="secondery-text text-capitalize fw-bold mb-3">
            Testimonials
          </p>
          <h2 className="text-capitalize head-text fw-semibold">
            What People Say
          </h2>
        </div>

        <div id="testimonial-slider" className="splide" ref={sliderRef}>
          <div className="splide__track py-2 px-3">
            <ul className="splide__list">
              <TesimonialCard />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;