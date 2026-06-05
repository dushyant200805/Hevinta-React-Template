import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
import CauseCard from "../compnent/CauseCard";
function Cause() {
    return (
        <> 
            {/* <!-- Cause --> */} 
        <section className="ptb">
        <div className="container">
            <div className="head-content mb-5">
                <p className="secondery-text text-capitalize fw-bold mb-3 ">We Are Fighting For</p>
                <h2 className="text-capitalize head-text fw-semibold">Recent Causes</h2>
            </div>
            <div className="row">
               <CauseCard/>
            </div>
        </div>
    </section>
        </>
    );
}

export default Cause;