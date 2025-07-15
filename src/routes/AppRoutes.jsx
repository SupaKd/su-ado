// AppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import ScrollToTop from "../components/ScrollToTop";
function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
       <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
