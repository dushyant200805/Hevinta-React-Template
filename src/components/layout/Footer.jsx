import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../includes/css/mainstyle.css";
import "../../includes/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // current year 
  const year = new Date().getFullYear();
  return (
    <>
      {/* Footer */}
      <footer className="footer-bg border-top light-border">
        <div className="container">
          <div className="row py-5 justify-content-lg-center">

            <div className="col-sm-6 col-lg-3">
              <div>
                <Link to="/">
                  <img src="/logo-light.png" alt="logo-light" className="mb-3" width="80" />
                </Link>
              </div>

              <p className="footer-text pe-2 my-2 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="d-flex py-3 gap-2 align-items-center">
                <a href="#" className="icon-bg"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="icon-bg"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="icon-bg"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#" className="icon-bg"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 footer-links py-2 footer-text">
              <h4 className="fs-5 mb-3 fw-semibold">Quick Links</h4>
              <ul className="list-unstyled ps-2">
                <li className="mb-2"><a href="#">Our Volunteers</a></li>
                <li className="mb-2"><a href="#">Features</a></li>
                <li className="mb-2"><Link to="/causes">Causes</Link></li>
                <li className="mb-2"><a href="#">How It Works</a></li>
                <li className="mb-2"><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 footer-links py-2 footer-text">
              <h4 className="fs-5 mb-3 fw-semibold">Support & Contact</h4>
              <ul className="list-unstyled ps-2">
                <li className="mb-2"><a href="#">Help Center</a></li>
                <li className="mb-2"><Link to="/contact">Contact</Link></li>
                <li className="mb-2"><a href="#">Careers</a></li>
                <li className="mb-2"><a href="#">Press & Media</a></li>
                <li className="mb-2"><Link to="/about">Stories</Link></li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 footer-links py-2 footer-text">
              <h4 className="fs-5 mb-3 fw-semibold">Contact Info</h4>
              <ul className="list-unstyled ps-2">
                <li className="mb-2">Address: Juniper Valley 17, New York</li>
                <li className="mb-2"><a href="#">Email: demo@gmail.com</a></li>
                <li className="mb-2"><a href="#">Phone: +01 234567890</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-copy-bg text-center footer-copy-text py-3">
          © {year} Hevinta All Rights Reserved.
        </div>
      </footer>

      {/* Back To Top */}
      <button onClick={scrollToTop} id="backtotop" className={`back-to-top shadow btn prime-btn rounded-0  ${show ? "show" : ""}`}>
        <FontAwesomeIcon icon={faChevronUp} className="fs-4" />
      </button>
    </>
  );
}

export default Header;