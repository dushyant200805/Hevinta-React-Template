import { useEffect } from "react";
import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
function Counter() {
     useEffect(() => {
  const counters = document.querySelectorAll(".counter");
    const counterSection = document.querySelector(".counter-section");
        let hasRun = false; 
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasRun) {
                    hasRun = true; // Run only once
                    counters.forEach(counter => {
                        let target = +counter.getAttribute("data-target");
                        let speed = target / 180; // Adjust speed
                        let count = 0;

                        let updateCounter = () => {
                            count += speed;
                            if (count < target) {
                                counter.innerText = Math.floor(count) + '+';
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target + '+'; // Ensure final value matches
                            }
                        };

                        updateCounter();
                    });
                }
            });
    }, { threshold: 1.0 }); // Trigger when 30% of section is visible
     observer.observe(counterSection);
      }, []);
    return (
        <> 
            {/* <!-- Counter --> */} 
      <section className="py-5 alt-bg position-relative counter-section wave" > 
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-3 col-md-6 my-3">
                    <div className="counter-content text-center">
                        <h4 className="m-0 prime-text fs-9 text-up fw-bold second-font  counter" data-target="307">307k
                        </h4>
                        <p className="text-capitalize head-text fw-semibold">Services provided to people in 2021</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 my-3">
                    <div className="counter-content text-center">
                        <h4 className="m-0 prime-text fs-9 text-up fw-bold second-font  counter" data-target="85">85k</h4>
                        <p className="text-capitalize head-text fw-semibold">Countries We Work</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 my-3">
                    <div className="counter-content text-center">
                        <h4 className="m-0 prime-text fs-9 text-up fw-bold second-font  counter" data-target="75">75k
                        </h4>
                        <p className="text-capitalize head-text fw-semibold">Finished Projects</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 my-3">
                    <div className="counter-content text-center">
                        <h4 className="m-0 prime-text fs-9 text-up fw-bold second-font  counter" data-target="320">320k
                        </h4>
                        <p className="text-capitalize head-text fw-semibold">invested in all our programs last year</p>
                    </div>
                </div>
            </div>
        </div> 
    </section>
        </>
    );
}

export default Counter;


