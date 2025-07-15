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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const cards = [
    {
      id: 1,
      title: "BelliFood",
      description: "Projet pour un site vitrine de restauration.",
      img: "/belli.webp",
      link: "https://bellifood.vercel.app",
    },
    {
      id: 2,
      title: "AquaFix",
      description: "Projet pour un site vitrine d'un plombier",
      img: "/aqua.webp",
      link: "https://aquafix-theta.vercel.app",
    },
    {
      id: 3,
      title: "Projet",
      description: "Projet bientôt disponible...",
      img: "/supasushi.webp",
      link: "#",
    },
  ];

  return (
    <motion.section
      className="portfolio"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="portfolio__container">
        <h2>Nos réalisations</h2>
        <div className="grid">
          {cards.map((card, index) => (
            <motion.div
              className="card"
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={card.img} alt={card.title} />
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  Voir le site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
