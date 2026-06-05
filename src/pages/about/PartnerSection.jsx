import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function PartnerSection (){
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);
      const PartnerCard =[
        {
            "partnerimage":"/partner-1.webp"
        },
        {
            "partnerimage":"/partner-2.webp"
        },
         {
            "partnerimage":"/partner-3.webp"
        },
         {
            "partnerimage":"/partner-4.webp"
        }
      ]
    return(
        <>
            {/* <!-- partners --> */}
    <section className="py-5" >
        <div className="container">
            <div className="head-content my-5">
                <small className="secondery-text fs-5 d-block text-capitalize fw-bold mb-3">
                    united across the globe
                </small>
                <h2 className="text-capitalize head-text fw-semibold fs-1 mb-3">
                    worldwide partners
                </h2>
                <p className="para-text ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at est
                    deleniti magnam quaerat eos nobis, fugit voluptate voluptates atque aspernatur laudantium aperiam
                    exercitationem? Tempore debitis esse quibusdam voluptatibus fugiat corporis officiis unde! Corrupti,
                    at!</p>
            </div>
            <div className="row g-3 py-5">
                {PartnerCard.map((item,index)=>{
                    return(
                         <div className="col-lg-3 col-sm-6" key={index} data-aos="zoom-in">
                               <div className="partner-image-container">
                                      <img src={item.partnerimage} alt="partner-image-1" className="object-fit-contain w-100"
                                         height="150"/>
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
export default PartnerSection ;