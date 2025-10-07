// AppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
function AppRoutes() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default AppRoutes;
