import SliderBanner from "./SliderBanner";
import AboutSection from "../../components/common-section/AboutSection";
import CoreSector from "./CoreSector";
import CausesPreview from "../../components/common-section/CausesPreview";
import Mission from "./Mission";

import Counter from "../../components/common-section/Counter";
import Volunteers from "../../components/common-section/Volunteers";
import Donation from "../../components/common-section/Donation";
import Testimonials from "../../components/common-section/Testimonial";
import Newsletter from "../../components/common-section/Newsletter";

function Home() {
  return (
    <>
      <SliderBanner />
      <CoreSector />
      <AboutSection />
      <CausesPreview limit={3} />
      <Counter />
      <Mission />
      <Volunteers />
      <Donation />
      <Testimonials />
      <Newsletter />

    </>
  );
}

export default Home;