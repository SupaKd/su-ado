function Portfolio() {
  return (
    <section className="portfolio">
     <h2>Nos réalisations</h2>
     <div className="grid">
       <div className="card">
         <img src="/belli.webp" alt="Projet 1" />
         <div className="content">
           <h3>BelliFood</h3>
           <p>Projet pour un site vitrine de restauration.</p>
           <a href="https://bellifood.vercel.app">Voir le site</a>
         </div>
         
       </div>
       <div className="card">
         <img src="/supa.webp" alt="Projet 1" />
         <div className="content">
           <h3>Projet One</h3>
           <p>En cours...</p>
           <a href="#">Voir le site</a>
         </div>
         
       </div>
       <div className="card">
         <img src="/supa.webp" alt="Projet 1" />
         <div className="content">
           <h3>Projet Two</h3>
           <p>En cours...</p>
           <a href="#">Voir le site</a>
         </div>
         
       </div>
     </div>
    </section>
  );
}

export default Portfolio;
