import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simule le chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // tu peux ajuster le temps selon tes besoins

    return () => clearTimeout(timer);
  }, []);

  function handlePathname() {
    return location.pathname === "/" ? "home" : location.pathname.slice(1);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />
      <main className="container" id={handlePathname()}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
