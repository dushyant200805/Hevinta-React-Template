import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CauseCard(){
        const causeCard =[
        {
           "causethumnail":"/public/Causes-1.webp",   
           "causeTitle":"Economic Opportunity",
           "causeHeading":"Our programs foster enterprises",
           "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." ,
           "causeProgress":"50%", 
            "causeLength":"w-50", 
           "causeRaised":"$1500", 
           "causeGoal":"$3000",
        },
        {
            "causethumnail":"/public/Causes-2.webp",   
            "causeTitle":"Education",
            "causeHeading":"Our education programs create safe",
            "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." ,
            "causeProgress":"100%", 
            "causeLength":"w-100", 
            "causeRaised":"$3000", 
           "causeGoal":"$3000",
        },
        {
          "causethumnail":"/public/Causes-3.webp",   
          "causeTitle":"Water & Sanitation",
          "causeHeading":"Restore access to clean drinking water", 
          "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." ,
          "causeProgress":"85%", 
          "causeLength":"w-75", 
          "causeRaised":"$2550", 
          "causeGoal":"$3000",
       }
    ]
    return(
        <>
        {causeCard.map((item,index)=>{                    
           return(
        <div className="col-lg-4 col-md-6"key={index}>
           <div className="card card-bg mb-3 prime-border rounded-0">
             <img src={item.causethumnail} alt="Causes-image-1" className="w-100"/>
                <div className="card-body">
                    <h3 className="prime-text fs-6 text-capitalize">{item.causeTitle}</h3>
                    <h4 className="head-text fs-6">{item.causeHeading}</h4>
                    <p className="para-text py-2">
                        {item.description}
                    </p>
                    <div className="money-collection text-end">
                        <h5 className="fs-7 para-text">{item.causeProgress}</h5>
                        <div className="progress input-bg" role="progressbar" aria-label="Example with label"
                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                           <div className={`progress-bar prime-bg ${item.causeLength}`}></div>
                        </div>
                        <div className="money-content d-flex justify-content-between py-3">
                            <h6 className="fw-semibold text-capitalize d-inline-block para-text"><span
                                    className="para-text mx-2">Raised:</span>{item.causeRaised}</h6>
                            <h6 className="fw-semibold text-capitalize d-inline-block para-text"><span
                                    className="para-text mx-2">goal:</span>{item.causeGoal}</h6>
                        </div>
                    </div>
                </div>
         </div>
        </div>
        );
    })}
    </>
    );
}
export default CauseCard ;