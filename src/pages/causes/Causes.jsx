import CommonBannersection from "../../components/common-section/CommonBanner";
import CausesPreview from "../../components/common-section/CausesPreview";
import Newsletter from "../../components/common-section/Newsletter";
import Testimonial from "../../components/common-section/Testimonial"
import Contribute from "../../components/common-section/Contribute";

function causepage() {
  const BannerData = {
    "BannerHeading": "what we do",
    "SubHeading": "Our Recent Causes",
    "Description": "We work across key areas to uplift communities, support social welfare, and create lasting positive impact."
  }
  return (
    <>

      <title>Cause | Hevinta NGO & Trust</title>

      <CommonBannersection BannerData={BannerData} />
      <CausesPreview />
      <Contribute />
      <Newsletter />
      <Testimonial />
    </>
  );
}
export default causepage;