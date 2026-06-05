import CommonBanner from "../../components/common-section/CommonBanner";
import Newsletter from "../../components/common-section/Newsletter";
import Testimonial from "../../components/common-section/Testimonial"
import Contribute from "../../components/common-section/Contribute";
import EventSection from "./EventsListSection";

function Eventpage() {
  const BannerData = {
    "BannerHeading": "what’s happening",
    "SubHeading": "Our Upcoming Events",
    "Description": "Discover our latest events, initiatives, and community programs designed to create meaningful impact."
  }
  return (
    <>
      <title>Events | Hevinta NGO & Trust</title>

      <CommonBanner BannerData={BannerData} />
      <EventSection />
      <Contribute />
      <Newsletter />
      <Testimonial />
    </>
  );
}
export default Eventpage;