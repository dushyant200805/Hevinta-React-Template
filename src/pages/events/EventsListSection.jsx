import Eventcard from "../../components/Ui/EventCard";
function EventSection (){
    return(
        <>
        <section className="ptb" >
        <div className="container">
            <div className="head-content mb-5">
                <small className="secondery-text text-capitalize d-block fs-5 fw-bold mb-3 ">We Are Fighting For</small>
                <h2 className="text-capitalize head-text fw-semibold">Recent Causes</h2>
            </div>
            <div className="row g-3 flex-grow-1">
                <Eventcard/>
            </div>
        </div>
    </section>  
        </>
    );
}
export default EventSection ;