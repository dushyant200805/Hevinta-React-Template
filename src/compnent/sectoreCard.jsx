import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sectorcard(){
        const sectoreCard =[
        {
           "sectoreicon":"/public/sectore-1.webp",   
           "sectorename":"Economic Opportunity",
           "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." 
        },
         {
           "sectoreicon":"/public/sectore-2.webp",   
           "sectorename":"Health and Nutrition",
           "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." 
        },
        {
           "sectoreicon":"/public/sectore-3.webp",   
           "sectorename":"Education",
           "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." 
        },
        {
           "sectoreicon":"/public/sectore-4.webp",   
           "sectorename":"Water & Sanitation",
           "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, cumque nemo provident repellat sapiente ipsam." 
        }
    ]
    return(
        <>
        {sectoreCard.map((item,index)=>{                    
           return(
        <div className="col-lg-3 col-md-6"key={index}>

            <div className="card mb-3 card-bg prime-border rounded-0" >
                <div className="card-image-container py-3">
                    <div className=" sector-card-img mx-auto">
                        <img src={item.sectoreicon} alt="sectore-1" className="img-fluid"/>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="head-text">{item.sectorename}</h5>
                    <p className="para-text">
                      {item.description}
                    </p>
                    <div className="learn-more-content">
                        <a href="#" className="text-capitalize para-text fw-semibold"> <FontAwesomeIcon icon={faPlus} className="fs-7 mx-2" />Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        );
    })}
    </>
    );
}
export default Sectorcard ;