import React from "react";

export default function Approche() {
  const phases = [
    {
      titre: "1. Découverte",
      desc: "Chaque projet commence par une rencontre. Nous plongeons dans votre univers, écoutons votre histoire et décryptons vos besoins. Cette immersion nous permet de cerner vos ambitions et de poser des fondations solides pour une collaboration inspirée et sur-mesure."
    },
    {
      titre: "2. Stratégie",
      desc: "Nous transformons vos idées en une vision claire et motivante. Grâce à une feuille de route précise, nous traçons le chemin vers vos objectifs, en alliant créativité, innovation et pragmatisme. Notre ambition : bâtir une stratégie qui vous distingue et qui inspire confiance."
    },
    {
      titre: "3. Développement",
      desc: "C’est ici que la magie opère : nous donnons vie à vos idées. Entre design élégant et technologie performante, nous créons des expériences mémorables, fluides et centrées sur l’utilisateur. Chaque détail compte pour offrir une solution qui séduit, convainc et évolue avec vous."
    },
    {
      titre: "4. Livraison",
      desc: "Lancement, célébration, mais surtout accompagnement. Nous mettons en ligne votre projet avec soin et veillons à ce qu’il brille dès le premier jour. Et parce qu’un succès se construit dans le temps, nous restons à vos côtés pour optimiser, faire grandir et pérenniser votre réussite."
    },
  ];

  return (
    <section className="approche">
      <div className="approche__intro">
        <div className="approche__intro-content">
          <h2>Notre approche</h2>
          <p>
            Une méthode simple, claire et humaine.  
            Nous avançons à vos côtés, étape par étape — de la découverte à la livraison.  
            Chaque phase est pensée pour donner du sens, de la cohérence et de l’impact à votre projet.
          </p>
        </div>
      </div>

      <div className="approche__phases">
        {phases.map((phase) => (
          <article key={phase.titre} className="phase">
            <h3>{phase.titre}</h3>
            <p>{phase.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
