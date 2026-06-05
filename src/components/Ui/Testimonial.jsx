import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
function TesimonialCard() {
           const testimonialcard =[
        {
           "testthumnail":"/test1.webp",   
           "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
           "testname":"monica frazier",
           "testdeignationc":"foundder of apple", 
        },
         {
           "testthumnail":"/test2.webp",   
            "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
            "testname":"saabir al-obeid",
            "testdeignationc":"foundder of googele", 
        },
        {
           "testthumnail":"/test3.webp",   
           "testdesc":" Working with this team was a game-changer for our business. Their professionalism and creativity exceeded our expectations",
           "testname":"rose hopkins",
           "testdeignationc":"foundder of twitter", 
        },
        {
           "testthumnail":"/test4.webp",   
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
            <li className="splide__slide card-bg rounded-0 shadow-sm " key={index}>
                <div className="test-body  p-2 p-sm-4 text-center">
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