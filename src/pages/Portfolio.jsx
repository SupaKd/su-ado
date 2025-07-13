import { motion } from "framer-motion";

function Portfolio() {
  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="portfolio"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Nos réalisations</h2>
      <div className="grid">
        <div className="card">
          <img src="/belli.webp" alt="Projet 1" />
          <div className="content">
            <h3>BelliFood</h3>
            <p>Projet pour un site vitrine de restauration.</p>
            <a
              href="https://bellifood.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/supa.webp" alt="Projet 2" />
          <div className="content">
            <h3>Projet One</h3>
            <p>En cours...</p>
            <a href="#">Voir le site</a>
          </div>
        </div>

        <div className="card">
          <img src="/supa.webp" alt="Projet 3" />
          <div className="content">
            <h3>Projet Two</h3>
            <p>En cours...</p>
            <a href="#">Voir le site</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
