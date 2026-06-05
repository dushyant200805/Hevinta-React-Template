import { Link } from "react-router";
import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
function Donation() {
    return (
        <>
        {/* <!-- Donations --> */}
    <section className="py-5 position-relative donation"> 
        <div className="container d-flex align-items-center justify-content-center" data-aos="fade-up"  data-aos-duration="1500">
            <div className="donation-content text-center py-5">
                <h2 className="white-text text-capitalize fs-1">Donate to help the Homeless </h2>
                <h3 className="white-text text-capitalize my-4 fs-5">We make every donation count</h3>
                <div className="donation-btn my-5">
                    <Link to="contact.html" className="prime-btn-2 mx-2 py-2 px-3 mb-2 fs-8 rounded-0"> Donate Now </Link>
                    <Link to="contact.html" className="prime-btn-2 mx-2 py-2 px-3 fs-8 rounded-0">Become A Volunteer</Link>
                </div>
            </div>
        </div> 
    </section>
        </>
    );
}
export default Donation;