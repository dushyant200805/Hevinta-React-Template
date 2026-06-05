import {BrowserRouter, Routes,Route, useLocation,} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../pages/home/home";
import About from "../pages/about/About";
import Causes from "../pages/causes/Causes";
import Events from "../pages/events/Events";
import EventDetails from "../pages/event-details/EventDetail";
import Contact from "../pages/conatct/Contact";
import NotFound from "../pages/notfound/NotFound";
import ScrollFunction from "../components/common-section/ScrollFunction";

function Layout() {
  const location = useLocation();

  const validPaths = [
    "/",
    "/about",
    "/causes",
    "/events",
    "/contact",
  ];

  const isEventDetails = location.pathname.startsWith("/eventdetails/");

  const showLayout =
    validPaths.includes(location.pathname) || isEventDetails;

  return (
    <>
      {showLayout && <Header />}

      <ScrollFunction />

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/causes" element={<Causes />} />
         <Route path="/events" element={<Events />} />
         <Route path="/eventdetails/:id" element={<EventDetails />} />
         <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}

function AppRoutes() {
  return (

    <BrowserRouter>
      <Layout />
    </BrowserRouter>

  );
}

export default AppRoutes;