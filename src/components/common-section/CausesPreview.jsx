import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import CauseCard from "../Ui/CauseCard";
import { causeData } from "../../data/CausesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Cause({ limit }) {
    const displayedEvents = limit
        ? causeData.slice(0, limit)
        : causeData;

    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration
            once: false,    // run only once
        });
    }, []);
    return (
        <>
            {/* <!-- Cause --> */}
            <section className="ptb">
                <div className="container">
                    <div className="head-content mb-5">
                        <p className="secondery-text text-capitalize fw-bold mb-3 ">We Are Fighting For</p>
                        <h2 className="text-capitalize head-text fw-semibold">Recent Causes</h2>
                    </div>
                    <div className="row" data-aos="fade-up" >
                        {displayedEvents.map(cause => (
                            <CauseCard key={cause.id} cause={cause} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cause;
