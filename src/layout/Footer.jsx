import { useState } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const launchConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/contact@supaco-digital.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        launchConfetti();
        setShowSuccess(true);
        reset();

        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      alert("Une erreur s'est produite.");
      console.error(error);
    }
  };

  return (
    <footer className="footer-form" id="devis">
      <section>
        <img src="contact2.webp" alt="footer" />
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Partage-nous ton projet !</h2>

          <input
            type="text"
            placeholder="NOM"
            {...register("Nom", { required: "Le nom est requis" })}
            className={errors.Nom ? "input-error" : ""}
          />
          {errors.Nom && <p className="error">{errors.Nom.message}</p>}

          <input
            type="tel"
            placeholder="TÉLÉPHONE"
            {...register("Téléphone", {
              required: "Le numéro est requis",
              pattern: {
                value: /^(\+33|0)[1-9](\d{2}){4}$/,
                message: "Numéro de téléphone invalide",
              },
            })}
            className={errors.Téléphone ? "input-error" : ""}
          />
          {errors.Téléphone && (
            <p className="error">{errors.Téléphone.message}</p>
          )}

          <input
            type="email"
            placeholder="E-MAIL"
            {...register("Email", {
              required: "L'email est requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Adresse email invalide",
              },
            })}
            className={errors.Email ? "input-error" : ""}
          />
          {errors.Email && <p className="error">{errors.Email.message}</p>}

          <fieldset className="checkbox-tabs">
            <legend>Que souhaitez‑vous&nbsp;?</legend>

            <label className="checkbox-tab">
              <input
                type="checkbox"
                value="Site vitrine"
                {...register("Prestation")}
              />
              <span>Vitrine</span>
            </label>

            <label className="checkbox-tab">
              <input
                type="checkbox"
                value="Site e-commerce"
                {...register("Prestation")}
              />
              <span>E-commerce</span>
            </label>

            <label className="checkbox-tab">
              <input type="checkbox" value="Logo" {...register("Prestation")} />
              <span>Logo</span>
            </label>

            <label className="checkbox-tab">
              <input
                type="checkbox"
                value="Flyers"
                {...register("Prestation")}
              />
              <span>Visuelle</span>
            </label>
          </fieldset>

          <textarea
            placeholder="Votre projet..."
            {...register("Projet", { required: "Le projet est requis" })}
            className={errors.Projet ? "input-error" : ""}
          />
          {errors.Projet && <p className="error">{errors.Projet.message}</p>}

          <div className="social-btn">
            <div className="footer-socials">
              <a
                href="https://wa.me/33783052412"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://www.instagram.com/supa_c0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div>
              <button type="submit">
                <span className="button_top">Envoyer</span>
              </button>
            </div>
          </div>
        </form>

        {showSuccess && (
          <div className="success-message">
            🎉 Votre formulaire a été envoyé avec succès !
          </div>
        )}
      </section>

      <div className="footer__bottom">
        <p>&copy; 2025 SupaCo Digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
