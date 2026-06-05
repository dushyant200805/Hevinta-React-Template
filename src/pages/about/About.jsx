
import CommonBannersection from "../../components/common-section/CommonBanner";
import About from "../../components/common-section/AboutSection";

import PartnerSection from "./PartnerSection";
import CompanyDetail from "./CompanyDetail";
import Volunteers from "../../components/common-section/Volunteers";
import Donation from "../../components/common-section/Donation";
import Testimonials from "../../components/common-section/Testimonial";

function AboutPage() {
  const BannerData = {
    "BannerHeading": "who we are",
    "SubHeading": "our mission & purpose",
    "Description": "Hevinta is a non-profit organization dedicated to empowering communities, supporting social welfare initiatives."
  }
  return (
    <>

      <title>About | Hevinta NGO & Trust</title>
      <CommonBannersection BannerData={BannerData} />
      <About />
      <PartnerSection />
      <CompanyDetail />
      <Volunteers />
      <Donation />
      <Testimonials />
    </>
  );
}

export default AboutPage;