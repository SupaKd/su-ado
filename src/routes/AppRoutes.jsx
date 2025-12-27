import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

import Home from "../pages/Home";
import Contact from "../components/Contact";
import Projet from "../pages/Projet";
import Confidentialite from "../pages/Confidentialite";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/projet" element={<PageTransition><Projet /></PageTransition>} />
        <Route path="/confidentialite" element={<PageTransition><Confidentialite /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
