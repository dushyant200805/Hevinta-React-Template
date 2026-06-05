import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
import { Link } from "react-router-dom";
function TesimonialCard() {
           const testimonialcard =[
        {
           "testthumnail":"/public/test1.webp",   
           "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
           "testname":"monica frazier",
           "testdesignation":"foundder of apple", 
        },
         {
           "testthumnail":"/public/test2.webp",   
            "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
            "testname":"saabir al-obeid",
            "testdesignation":"foundder of googele", 
        },
        {
           "testthumnail":"/public/test3.webp",   
           "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
           "testname":"rose hopkins",
           "testdesignation":"foundder of twitter", 
        },
        {
           "testthumnail":"/public/test4.webp",   
           "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
           "testname":"jack stephen",
           "testdeignationc":"foundder of twitter", 
        }
    ]

    return (
        <>
            {/* <!-- TesimonialCard --> */}
            {testimonialcard.map((item,index)=>{
                return(         
            <li className="splide__slide  card-bg rounded-0 shadow-sm " key={index}>
                <div className="test-body card-bg p-2 p-sm-4 text-center">
                    <div className="text-center mb-4">
                        <div className="testimonial-img mx-auto mb-4">
                            <img src={item.testthumnail} alt="testimonial-img-1"/>
                        </div>
                    </div>
                    <blockquote className="fs-6 para-text m-0 mb-4 text-center">
                      {item.testdesc}
                    </blockquote>
                    <h3 className="text-capitalize fs-5 prime-text mb-1">{item.testname}</h3>
                    <h4 className="text-capitalize para-text fs-8">{item.testdeignationc}</h4>
                </div>
            </li>
                );
            })}
        </>
    )
}
export default TesimonialCard;  