// AppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import Confidentialite from "../pages/Confidentialite";
function AppRoutes() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
  );
}

export default AppRoutes;
