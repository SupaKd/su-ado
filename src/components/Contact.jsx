import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS } from "../constants";

// Configuration EmailJS
const EMAIL_CONFIG = {
  serviceId: "service_z9k3dwd",
  templateId: "template_ctzcgwt",
  publicKey: "crjyM7CbUuPkyfBTT",
};

// Patterns de validation
const VALIDATION = {
  phone: /^(\+33|0)[1-9](\d{2}){4}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// Options de prestation
const PRESTATIONS = [
  { value: "Site vitrine", label: "Vitrine" },
  { value: "Site e-commerce", label: "E-commerce" },
  { value: "Logo", label: "Logo" },
];

// Composant pour les checkboxes de prestation
function PrestationCheckbox({ value, label, register }) {
  return (
    <label className="checkbox-tab">
      <input type="checkbox" value={value} {...register("Prestation")} />
      <span>{label}</span>
    </label>
  );
}

// Composant pour les messages d'erreur
function ErrorMessage({ message }) {
  if (!message) return null;
  return <p className="error">{message}</p>;
}

// Composant pour le message de succès
function SuccessMessage({ show }) {
  if (!show) return null;

  return (
    <div className="success-message" role="alert">
      🎉 Votre formulaire a été envoyé avec succès !
    </div>
  );
}

// Composant principal
export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const launchConfetti = useCallback(() => {
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  const onSubmit = useCallback(
    async (data) => {
      if (isSubmitting) return;

      setIsSubmitting(true);

      try {
        const response = await emailjs.send(
          EMAIL_CONFIG.serviceId,
          EMAIL_CONFIG.templateId,
          data,
          EMAIL_CONFIG.publicKey
        );

        if (response.status === 200) {
          launchConfetti();
          setShowSuccess(true);
          reset();
          setTimeout(() => setShowSuccess(false), 4000);
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
      } catch (error) {
        console.error("Erreur d'envoi :", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, launchConfetti, reset]
  );

  return (
    <section className="contact-form" id="devis" aria-labelledby="contact-title">
      <section>
        <div className="foto">
          <img src="/fo.png" alt="Illustration contact" loading="lazy" />
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 id="contact-title">
            Partage-nous ton <span className="text-gradient">projet</span> !
          </h2>

          {/* Nom */}
          <div>
            <input
              type="text"
              placeholder="NOM"
              aria-label="Votre nom"
              aria-invalid={!!errors.Nom}
              {...register("Nom", { required: "Le nom est requis" })}
              className={errors.Nom ? "input-error" : ""}
            />
            <ErrorMessage message={errors.Nom?.message} />
          </div>

          {/* Téléphone */}
          <div>
            <input
              type="tel"
              placeholder="TÉLÉPHONE"
              aria-label="Votre numéro de téléphone"
              aria-invalid={!!errors.Téléphone}
              {...register("Téléphone", {
                required: "Le numéro est requis",
                pattern: {
                  value: VALIDATION.phone,
                  message: "Numéro de téléphone invalide",
                },
              })}
              className={errors.Téléphone ? "input-error" : ""}
            />
            <ErrorMessage message={errors.Téléphone?.message} />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="E-MAIL"
              aria-label="Votre adresse email"
              aria-invalid={!!errors.Email}
              {...register("Email", {
                required: "L'email est requis",
                pattern: {
                  value: VALIDATION.email,
                  message: "Adresse email invalide",
                },
              })}
              className={errors.Email ? "input-error" : ""}
            />
            <ErrorMessage message={errors.Email?.message} />
          </div>

          {/* Prestations */}
          <fieldset className="checkbox-tabs">
            <legend>Que souhaitez‑vous ?</legend>
            {PRESTATIONS.map(({ value, label }) => (
              <PrestationCheckbox
                key={value}
                value={value}
                label={label}
                register={register}
              />
            ))}
          </fieldset>

          {/* Message */}
          <div>
            <textarea
              placeholder="VOTRE PROJET..."
              aria-label="Description de votre projet"
              aria-invalid={!!errors.Projet}
              {...register("Projet", { required: "Le projet est requis" })}
              className={errors.Projet ? "input-error" : ""}
            />
            <ErrorMessage message={errors.Projet?.message} />
          </div>

          {/* Actions */}
          <div className="social-btn">
            <div className="contact-socials">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous suivre sur Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                <span className="button_top">
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                </span>
              </button>
            </div>
          </div>
        </form>

        <SuccessMessage show={showSuccess} />
      </section>
    </section>
  );
}