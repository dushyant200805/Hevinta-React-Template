import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
function ContactForm (){
    // Aos Animation
    useEffect(() => {
  AOS.init({
   duration: 1200, // animation duration
    once: false,     // run only once
  });
}, []);

  // form Validation 
            const { register,handleSubmit,reset,formState: { errors },} = useForm();

            const onSubmit = async (data) => {
            const formData = new FormData();

            formData.append("contactfmain", true);
            formData.append("fname", data.firstname);
            formData.append("lname", data.lastname);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("message", data.message);

            try {
                const response = await fetch("http://localhost:8080/send_email.php", {
                method: "POST",
                body: formData,
                });

                const result = await response.text();
                console.log(result);

                reset(); 
                
                } catch (error) {
                    console.error("Error:", error);
                }
           };

    return(
        <>
       <section className="py-5 alt-bg" id="contact">
        <div className="container mb-5">
            <div className="head-content mb-5">
                <p className="secondery-text text-capitalize fw-bold mb-3 ">Get In Touch</p>
                <h2 className="text-capitalize head-text fw-semibold">Contact Us</h2>
            </div>
            <div className="contact-section">
                <form  id="contactform" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row gx-2 gy-3">
                        <div className="col-md-6 mb-3" data-aos="fade-right">
                            <input type="text" aria-label="name"
                                className="form-control py-3 input-bg input-text rounded-0 border-0 border-start border-3 prime-border shadow-none"
                                name="name" id="name" placeholder="Your Name"   {...register("name", { required: "Enter Your Name" })}/>
                                <div className="error">{errors.name?.message}</div>
                        </div>
                        <div className="col-md-6 mb-3" data-aos="fade-right">
                            <input type="email" aria-label="email"
                                className="form-control py-3 input-bg input-text rounded-0 border-0 border-start border-3 prime-border shadow-none"
                                name="email" id="email" placeholder="Your Email"  {...register('email',{ required:"Enter Your Email Address",pattern: { value: /^\S+@\S+$/i,message: "Please Enter A Vaild Email Address"}})}/>
                                 <div className="error">{errors.email?.message}</div>
                        </div>
                        <div className="col-12 mb-3"data-aos="fade-right">
                            <input type="text" aria-label="subject"
                                className="form-control py-3 input-bg input-text rounded-0 border-0 border-start border-3 prime-border shadow-none"
                                name="subject" id="subject" placeholder="Your Subject"  {...register('subject',{ required:"Enter Your Subject" })}/>
                                <div className="error">{errors.subject?.message}</div>
                        </div>
                        <div className="col-12 mb-3"data-aos="fade-right">
                            <textarea name="message" aria-label="message" id="message"
                                className="form-control input-bg border-0 border-start border-3 prime-border input-text rounded-0 shadow-none"
                                rows="5" placeholder="Your Message"  {...register('message',{ required:"Enter Your Message" })}></textarea>
                                <div className="error">{errors.message?.message}</div>
                        </div>
                        <div className="col-12" data-aos="fade-right">
                            <button type="submit" name="contactfmain"
                                className="btn prime-btn rounded-0 px-3 py-2 text-capitalize"> <i
                                    className="fa-solid fa-paper-plane mx-1"></i>submit form</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="container contact-section">
            <div className="row g-2 justify-content-center">
                <div className="col-lg-4" data-aos="fade-up"> 
                    <div className="contact-details h-100 card-bg p-3 border prime-border d-flex gap-3">
                        <div className="contact-icon">
                         <FontAwesomeIcon icon={faPhone} className="prime-text fs-4"/>
                        </div>
                        <div className="contact-info">
                            <h3 className="fs-7 para-text">Phone:</h3>
                            <a href="tel:#" className="fs-7 para-text d-block mb-2">+1-123456789</a>
                            <a href="tel:#" className="fs-7 para-text d-block">+1-012345678</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" data-aos="fade-up"> 
                    <div className="contact-details h-100  card-bg p-3 border prime-border d-flex gap-3">
                        <div className="contact-icon">
                          <FontAwesomeIcon icon={faHome} className="prime-text fs-4"/>
                        </div>
                        <div className="contact-info">
                            <h3 className="fs-7 para-text">Address:</h3>
                            <p className="fs-7  para-text">4 South Birchwood Ave CA 560 Bush St &amp; 20th Ave, 230909,
                                Canada</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" data-aos="fade-up"> 
                    <div className="contact-details h-100 card-bg p-3 border prime-border d-flex gap-3">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faEnvelope} className="prime-text fs-4"/>
                        </div>
                        <div className="contact-info">
                            <h3 className="para-text fs-7">Email:</h3>
                            <a href="mailto:#" className="fs-7 para-text d-block mb-2">demo@example.com</a>
                            <a href="mailto:#" className="fs-7 para-text d-block">xyz@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </section>
        </>
    );
}
export default ContactForm;