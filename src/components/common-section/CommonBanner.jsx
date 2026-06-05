import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function CommonBannersection({ BannerData }) {
  useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);
  return (
    <>
      {/* <!-- banner-section --> */}
      <section className="about-banner-section d-flex align-items-center">
        <div className="container text-center white-text ">
          <div className="banner-content mx-auto mt-6" data-aos="fade-up">
            <p className="prime-text second-font text-capitalize fw-bold mb-2 fs-1">
              {BannerData.BannerHeading}
            </p>
            <h1 className="white-text fw-bold mb-3 lh-sm text-uppercase fs-10">
              {BannerData.SubHeading}
            </h1>
            <p className="white-text text-capitalize mb-4 fs-5">
               {BannerData.Description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default CommonBannersection;
