import SectoreCard from "../compnent/sectoreCard";

function CoreSection() {
    return (
        <>
            {/* <!-- Core Section --> */}
      <section className="pt-5 pb-6" >
        <div className="container">
            <div className="head-content mb-5">
                <h5 className="secondery-text text-capitalize fw-bold mb-3 ">Our Core Sectors </h5>
                <h2 className="text-capitalize head-text fw-semibold">We Invest in Four Key Areas</h2>
            </div>
            <div className="row g-3">
                <SectoreCard/>
            </div>
        </div>
    </section>
        </>
    );
}
export default CoreSection;