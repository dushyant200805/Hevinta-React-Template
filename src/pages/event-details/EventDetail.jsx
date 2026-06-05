import CommonBanner from "../../components/common-section/CommonBanner"
import EventList from "./EventsList";
 function EventDetail() {
  const BannerData ={
    "BannerHeading" :"what’s happening",
    "SubHeading" : "Our Upcoming Events",
    "Description":"Discover our latest events, initiatives, and community programs designed to create meaningful impact."
  }
  return (
    <>
     <title>Event Details | Hevinta NGO & Trust</title>
     <CommonBanner BannerData={BannerData}/>
     <EventList/>   
    </>
  );
}

export default EventDetail;