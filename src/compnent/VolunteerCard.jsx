import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Volunteercard(){
        const VolunteereCard =[
        {
           "VolunteereThumnail":"/public/volunteer-1.webp",   
           "Volunteerename":"Alishia Fulton",
            
        },
         {
           "VolunteereThumnail":"/public/volunteer-2.webp",   
           "Volunteerename":"Kevin Haley",
            
        },
        {
           "VolunteereThumnail":"/public/volunteer-3.webp",   
           "Volunteerename":"Bill Macaitis",
            
        },
        {
           "VolunteereThumnail":"/public/volunteer-4.webp",   
           "Volunteerename":"Ava Farrington",
            
        }
    ]
    return(
        <>
        {VolunteereCard.map((item,index)=>{
            return(
                <div className="col-lg-3 col-md-6"key={index}>
                    <div className="card card-bg Volunteer-card mb-3 rounded-0">
                        <div className="Volunteer-card-image position-relative overflow-hidden">
                            <img src={item.VolunteereThumnail} alt="Volunteer-image-1"/>
                            <div className="social-icons">
                                <a href="javascript:;" aria-label="Facebook-icon" ><FontAwesomeIcon icon={faFacebookF}/> </a>
                                <a href="javascript:;" aria-label="instagram-icon"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="javascript:;" aria-label="linkedin-icon"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            </div>
                        </div>
                        <div className="card-body text-center card-alt-bg">
                            <h3 className="para-text fs-5">{item.Volunteerename}</h3>
                            <h4 className="prime-text fs-6">Volunteer</h4>
                        </div>
                    </div>
                </div>
            );
        })
        } 
        </>
    ); 
}
export default Volunteercard ;