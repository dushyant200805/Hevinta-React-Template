
function CauseCard( {cause}){
    return(
        <>
        <div className="col-lg-4 col-md-6"key={cause.id}>
           <div className="card card-bg mb-3 prime-border rounded-0">
             <img src={cause.causethumnail} alt="Causes-image-1" className="w-100"/>
                <div className="card-body">
                    <h3 className="prime-text fs-6 text-capitalize">{cause.causeTitle}</h3>
                    <h4 className="head-text fs-6">{cause.causeHeading}</h4>
                    <p className="para-text py-2">
                        {cause.description}
                    </p>
                    <div className="money-collection text-end">
                        <h5 className="fs-7 para-text">{cause.causeProgress}</h5>
                        <div className="progress input-bg" role="progressbar" aria-label="Example with label"
                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                           <div className={`progress-bar prime-bg ${cause.causeLength}`}></div>
                        </div>
                        <div className="money-content d-flex justify-content-between py-3">
                            <h6 className="fw-semibold text-capitalize d-inline-block para-text"><span
                                    className="para-text mx-2">Raised:</span>{cause.causeRaised}</h6>
                            <h6 className="fw-semibold text-capitalize d-inline-block para-text"><span
                                    className="para-text mx-2">goal:</span>{cause.causeGoal}</h6>
                        </div>
                    </div>
                </div>
         </div>
        </div>
    </>
    );
}
export default CauseCard ;