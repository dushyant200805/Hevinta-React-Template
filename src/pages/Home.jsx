import Header from "../layout/Header";
// import Footer from "../layout/Footer";

import Banner from "../section/Banner";
import CoreSection from "../section/CoreSection";
import About from "../section/Story";
import Cause from "../section/Cause";
import Counter from "../section/Counter";
import Mission from "../section/Mission";
import Volunteers from "../section/Volunteers";
import Donation from "../section/Donation";
// import Testimonial from "../section/Testimonial";
// import Newsletter from "../section/Newsletter";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CoreSection />
      <About />
      <Cause />
      <Counter />
      <Mission />
      <Volunteers />
      <Donation />
      {/* <Testimonial /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;