
export default function Avis() {
    const avis = [
      {
        nom: "Jérémy",
        commentaire:"Excellente expérience ! L’équipe a compris mes besoins dès le départ et a livré un site rapide, moderne et bien référencé. Communication fluide du début à la fin.",
        note: 5,
        ville: "Saint-Brieuc"
      },
      {
        nom: "Khaled",
        commentaire: "Très satisfait du design et du suivi technique. L’agence m’a aussi aidée à améliorer mon SEO et mes performances. Excellent rapport qualité-prix.",
        ville: "Oyonnax",
        note: 5,
      },
      {
        nom: "Béatrice",
        commentaire:
          "Très professionnel, rapide et rigoureux. Après un première échange, il a tout de suite compris notre projet et a su nous accompagner sur la création de notre boutique en ligne avec beaucoup de créativité !",
          ville: "Saint-Genis-Pouilly",
        note: 5,
      },
      
    ];
  
    return (
      <section className="avis">
        <div className="avis__container">
          <h2 className="text-gradient">Ce que disent nos clients</h2>
  
          <div className="avis__list">
            {avis.map((a, i) => (
              <div key={i} className="avis__card">
                <div className="avis__google">
  
                <img src="/google.png" alt="google" />
                </div>
                <p className="avis__nom">– {a.nom}</p>
                <div className="avis__stars">
                  {"★".repeat(a.note)}
                  {"☆".repeat(5 - a.note)}
                </div>
                <p className="avis__commentaire">“{a.commentaire}”</p>
                <p className="avis_ville">{a.ville}</p>
              </div>
            ))}
          </div>
  
          
        </div>
      </section>
    );
  }
  