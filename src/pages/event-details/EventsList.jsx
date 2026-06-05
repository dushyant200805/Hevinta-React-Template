
import { useParams } from "react-router-dom";
import { EventData } from "../../data/EventsDetailsdata";
import { faCalendarDays, faClock, faEnvelope, faGlobe, faLocationDot, faPhone, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function EventList() {
    // Aos Animation
    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,     // run only once
        });
    }, []);

    const { id } = useParams();
    const event = EventData.find((e) => e.id === id);

    if (!event) return <h2 className="text-center fs-2 my-3">Event Not Found</h2>;

    return (

        <>
            <section className="py-5" >
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-8" >
                            <div className="event-image-container p-2 mb-3" data-aos="fade-up">
                                <img src={event.Eventthumnail1} alt="event-image-1" className="object-fit-cover w-100"
                                    height="400" />
                            </div>
                            <div className="image-collection d-flex gap-3 p-3 mb-3">
                                <div className="image-1" data-aos="zoom-in">
                                    <img src={event.Eventthumnail2} alt="event-image-2"
                                        className="object-fit-cover w-100" height="300" />
                                </div>
                                <div className="image-1" data-aos="zoom-in">
                                    <img src={event.Eventthumnail3} alt="event-image-3"
                                        className="object-fit-cover w-100" height="300" />
                                </div>
                            </div>
                            <div className="content p-2" data-aos="fade-up">
                                <h2 className="head-text text-capitalize display-5 fw-semibold mb-4">{event.EventHeading}</h2>
                                <p className="para-text mb-3">{event.EventDesc1}</p>
                                <p className="para-text mb-2">{event.EventDesc2}</p>
                            </div>
                            <div className="image-collection d-flex gap-3 p-3 mb-3" >
                                <div className="image-1" data-aos="zoom-in">
                                    <img src={event.Eventthumnail4} alt="event-image-2"
                                        className="object-fit-cover w-100" height="300" />
                                </div>
                                <div className="image-1" data-aos="zoom-in">
                                    <img src={event.Eventthumnail5} alt="event-image-3"
                                        className="object-fit-cover w-100" height="300" />
                                </div>
                            </div>
                            <div className="content p-2" data-aos="fade-up">
                                <p className="para-text mb-4">{event.EventDesc3}</p>
                            </div>
                            <div className="map" data-aos="fade-up">
                                <iframe src={event.EventLocationLink} style={{ border: 0, width: "100%", height: "450px" }} allowFullScreen
                                    aria-hidden="false" tabIndex="0" title="Event Location" tabIndex="0">
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="event-info p-4 mb-3 prime-border border card-bg" data-aos="fade-up">
                                <h2 className="head-text fs-4 fw-semibold mb-3 text-capitalize">Events Information</h2>
                                <p className="para-text lh-lg mb-3">It is a long established fact that a reader will be distracted
                                    the readable content of a page.</p>
                                <div className="event-date mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Event Date</h3>
                                    <span className="para-text"><FontAwesomeIcon icon={faCalendarDays} className="prime-text me-2" /> {event.EventDate}</span>
                                </div>
                                <div className="event-time mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Event Time</h3>
                                    <span className="para-text"><FontAwesomeIcon icon={faClock} className="prime-text me-2" /> {event.EventTime}</span>
                                </div>
                                <div className="event-time mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Event location</h3>
                                    <span className="para-text"><FontAwesomeIcon icon={faLocationDot} className="prime-text me-2" /> {event.EventLocation}</span>
                                </div>
                                <div className="event-time mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Event cost</h3>
                                    <span className="para-text"><FontAwesomeIcon icon={faSackDollar} className="prime-text me-2" /> {event.EventCost}</span>
                                </div>
                            </div>
                            <div className="event-organizer p-4 prime-border border card-bg" data-aos="fade-up">
                                <h3 className="head-text fs-4 fw-semibold mb-3 text-capitalize">Events Organizer</h3>
                                <div className="event-organizer-info mb-4 ">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Phone Number</h3>
                                    <a href="javascript:;" className="para-text"> <FontAwesomeIcon icon={faPhone} className="prime-text me-2" /> {event.EventOrgNumber}</a>
                                </div>
                                <div className="event-organizer-info mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Email Address</h3>
                                    <a href="javascript:;" className="para-text"><FontAwesomeIcon icon={faEnvelope} className="prime-text me-2" /> {event.EventEmail}</a>
                                </div>
                                <div className="event-organizer-info mb-4">
                                    <h3 className="head-text fw-semibold fs-6 text-capitalize mb-3">Website</h3>
                                    <a href="javascript:;" className="para-text"> <FontAwesomeIcon icon={faGlobe} className="prime-text me-2" /> {event.EventWebsite}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EventList;