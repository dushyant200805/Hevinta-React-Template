import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
function Newsletter() {
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

            formData.append("newsletter", true);
            formData.append("n_email", data.email);

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
    return (
        <> 
            {/* <!-- Newsletter --> */} 
       <section className="py-5 news-letter">
        <div className="container">
            <div className="row align-items-center  py-3" data-aos="fade-right">
                <div className="col-md-6 mb-3">
                    <a href="javascript:;">
                        <h3 className="fw-bold text-capitalize footer-text fs-1">Subscribe to receive free email update notifications</h3>
                    </a>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} id="newsletter" noValidate>
                        <div className="input-group mb-3">
                            <input type="email"  id="n_email"
                                className="form-control shadow-none border-0 input-bg input-text py-3 rounded-0 text-capitalize"
                                placeholder="demo@gmail.com" aria-label="subscribe to our newsletter"
                                 {...register('email',{ required:"Enter Your Email Address",pattern: { value: /^\S+@\S+$/i,message: "Please Enter A Vaild Email Address"}})}/>
                            <button className="btn rounded-0  prime-btn text-capitalize"  type="submit" name="newsletter">subscribe</button>
                        </div>
                          <div className="error">{errors.email?.message}</div>
                    </form>
                   
                </div>
            </div>
        </div>
       </section>
        </>
    );
}


export default Newsletter;