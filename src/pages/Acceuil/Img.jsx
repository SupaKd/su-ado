import { Link } from "react-router-dom";

function Img () {
    return(
        <>
            <section className="project-section">
  <div className="project-card">
    <div className="project-content">
      <h2>Ton avenir digital commence ici !</h2>
      <p>
      C’est le moment idéal pour développer ton image en ligne avec des supports modernes et adaptés à ta marque.
      Création ou refonte de site, boutique en ligne, identité visuelle…
      </p>
      <Link to="/contact">
      <button>Discutons ensemble</button>
      </Link>
    </div>
    <div className="project-image">
      <img src="/vitrine.webp" alt="Mockup site web"/>
    </div>
  </div>
</section>
        </>
    )
}
export default Img;