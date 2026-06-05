import { Link } from "react-router-dom";
import { EventData } from "../../data/EventsDetailsdata";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function eventcard (){
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);
    return(
        <>
         {EventData.map((item)=>{
            return(
              <div className="col-lg-4 col-md-6" key={item.id}   data-aos="zoom-in">
                    <div className="card card-bg mb-3 prime-border rounded-0">
                        <img src={item.Eventthumnail1} alt="Event-image" className="w-100" />
                        <div className="card-body py-4">
                            <h3 className="prime-text text-capitalize fs-5 mb-3">{item.EventTitle}</h3>
                            <div className="event-date mb-4">
                                <h3 className="head-text fw-semibold fs-6 text-capitalize mb-2">Event Date</h3>
                                <span className="para-text text-capitalize"><i
                                        className="fa-regular fa-calendar-days prime-text me-2"></i>1{item.EventDate}</span>
                            </div>
                            <div className="event-time mb-4">
                                <h3 className="head-text fw-semibold fs-6 text-capitalize mb-2">Event Time</h3>
                                <span className="para-text"><i className="fa-regular fa-clock prime-text me-2"></i> {item.EventTime}</span>
                            </div>
                            <Link to={`/eventdetails/${item.id}`} className="btn prime-btn py-2 px-3 text-capitalize rounded-0">view
                                details</Link>
                        </div>
                    </div>
                </div>
                );
           })} 
        </>
        
    );
}
export default eventcard;

