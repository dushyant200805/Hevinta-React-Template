import Volunteercard from "../compnent/VolunteerCard";
function Volunteer() {
    return (
        <>
        {/* <!-- Volunteers --> */}
    <section className="pt-5 pb-6 alt-bg" data-aos="fade-up"  data-aos-duration="1500">
        <div className="container">
            <div className="head-content mb-5">
                <p className="secondery-text text-capitalize fw-bold mb-3 ">Volunteering for Guide</p>
                <h2 className="text-capitalize head-text fw-semibold">Meet Our Volunteers</h2>
            </div>
            <div className="row">
              <Volunteercard/>
            </div>
        </div>
    </section>
        </>
    );
}
export default Volunteer;