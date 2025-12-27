import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import CookiesPopup from "./components/CookiesPopup";

function App() {
  const location = useLocation();

  // Mémorise le calcul du pathname pour le id
  const pageId = useMemo(() => {
    return location.pathname === "/" ? "home" : location.pathname.slice(1);
  }, [location.pathname]);

  return (
    <div className="App">
      <CookiesPopup />
      <Header />
      <main className="container" id={pageId}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;