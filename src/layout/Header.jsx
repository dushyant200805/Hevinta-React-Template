import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ================= Project CSS =================
import "../includes/css/mainstyle.css";
import "../includes/css/style.css";
function Header() {
  return (
    // <!-- header -->
    <header className="position-absolute w-100">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!-- Logo --> */}
          <Link to="/" className="navbar-brand py-2">
            <img src="logo-light.png" data-logo="light" className="object-fit-contain" height="80" alt="logo-light"/>
          </Link>

          {/* <!-- Offcanvas Menu --> */}
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar2">
            <div className="offcanvas-header justify-content-between head-bg">
            <Link to="/" className="navbar-brand py-2">
               <img src="logo-light.png" data-logo="light" className="object-fit-contain" height="80" alt="logo-light"/>
              </Link>

              <button type="button" className="btn prime-btn lh-1 rounded-0 close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-xmark fs-5"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-lg-3" id="nav_ul">
                <li className="nav-item active">
                   <Link to="/" className="nav-link text-uppercase fw-semibold" aria-current="page">
                       Home                     
                   </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-uppercase fw-semibold" >
                       about                  
                   </Link>
                </li>
                <li className="nav-item">
                   <Link to="/causes" className="nav-link text-uppercase fw-semibold">
                      causes               
                   </Link>
                </li>
                <li className="nav-item">
                  <Link to="/events" className="nav-link text-uppercase fw-semibold" >
                      Events             
                   </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Events Destails" className="nav-link text-uppercase fw-semibold" >
                      Event Details                
                   </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link text-uppercase fw-semibold" >
                      Contact              
                   </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Right Buttons --> */}
          <div className="d-flex gap-2">
            {/* <!-- Mobile Menu Button --> */}
            <button className="navbar-toggler btn prime-outline-btn2 rounded-0 shadow-none py-2 px-3" type="button" data-bs-target="#offcanvasNavbar2" data-bs-toggle="offcanvas" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
              <i className="fa-solid fs-5 prime-text fa-bars-staggered white-text"></i>
            </button>
            {/* <!-- Theme Switch Button --> */}
            <button className="btn prime-btn theme-btn border rounded-0" aria-label="theme-switch button" id="btnSwitch">
              {/* <i className="fa-solid fs-5 prime-text fa- white-text"></i> */}
              <FontAwesomeIcon icon="fa-solid fa-moon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
