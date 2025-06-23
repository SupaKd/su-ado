function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Nos réalisations</h2>
      <div className="grid">
        <div className="card">
          <img src="/logo.webp" alt="Projet 1" />
          <div className="content">
            <h3>Projet One</h3>
            <p>Site vitrine réalisé pour un artisan local.</p>
            <a href="#">Voir le site</a>
          </div>
          
        </div>
        <div className="card">
          <img src="/logo.webp" alt="Projet 1" />
          <div className="content">
            <h3>Projet One</h3>
            <p>Site vitrine réalisé pour un artisan local.</p>
            <a href="#">Voir le site</a>
          </div>
          
        </div>
        <div className="card">
          <img src="/logo.webp" alt="Projet 1" />
          <div className="content">
            <h3>Projet One</h3>
            <p>Site vitrine réalisé pour un artisan local.</p>
            <a href="#">Voir le site</a>
          </div>
          
        </div>

        {/* Ajoute d'autres cartes ici */}
      </div>
    </section>
  );
}

export default Portfolio;
