// src/components/Method.jsx
function Method() {
    return (
      <section className="method">
                  <h2>Nos méthodes</h2>

        <div className="method__steps">
          {[
            {
                title: "1. Découverte",
                desc: "Échange initial pour comprendre tes besoins, objectifs et contraintes.",
              },
              {
                title: "2. Stratégie",
                desc: "Définition d’un plan d’action clair adapté à ton activité et ton audience.",
              },
              {
                title: "3. Construction",
                desc: "Développement du site avec suivi régulier et ajustements en temps réel.",
              },
              {
                title: "4. Livraison",
                desc: "Mise en ligne finale, optimisations et accompagnement post-lancement.",
              },
          ].map((step, index) => (
            <div className="method__step" key={index}>
              <div className="method__bullet" />
              <div className="method__content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Method;
  