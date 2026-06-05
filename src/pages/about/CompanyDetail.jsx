import { faClockRotateLeft, faHouse, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function CompanyDetail (){
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);
       const sectoreCard =[
        {
           "cardicon":faHouse,   
           "CardTitle":"Founded in 1962",
           "CardSubtitle":"Working Since 1987 with Pride!!", 
           "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae, adipisci repudiandae magnam natus dolor laudantium." 
        },
         {
           "cardicon":faClockRotateLeft,   
           "CardTitle":"Our History",
           "CardSubtitle":"Working Since 1987 with Pride!!", 
           "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae, adipisci repudiandae magnam natus dolor laudantium." 
        },
        {
           "cardicon":faUser,   
           "CardTitle":"Large Community",
           "CardSubtitle":"Working Since 1987 with Pride!!", 
           "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae, adipisci repudiandae magnam natus dolor laudantium." 
        }
    ]
    return (
        <>
    <section className="py-5 alt-bg company-detail-section" >
        <div className="container">
            <div className="row g-3  p-2">
                 {sectoreCard.map((item,index)=>{                    
           return(
                 <div className="col-lg-4 col-md-6" key={index} data-aos="fade-right">
                    <div className="detail  p-3 rounded-0">
                        <div className="icon mb-3">
                            <FontAwesomeIcon icon={item.cardicon} className="prime-text fs-1"/>
                        </div>
                        <div className="content">
                            <h2 className="white-text fw-semibold second-font fs-5">{item.CardTitle}</h2>
                            <p className="white-text mb-4">{item.CardSubtitle}</p>
                            <p className="white-text">{item.description}</p>
                        </div>
                    </div>
                  </div>
                  
                  );
              })}
            </div>
        </div>
    </section>
        </>
    );
}
export default CompanyDetail;