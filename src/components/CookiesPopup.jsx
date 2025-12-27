import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "cookieConsent";

export default function CookiesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Vérifie si le consentement existe déjà
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = useCallback((value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }, []);

  const handleAccept = useCallback(() => {
    handleConsent("accepted");
  }, [handleConsent]);

  const handleDecline = useCallback(() => {
    handleConsent("declined");
  }, [handleConsent]);

  if (!visible) return null;

  return (
    <div
      className="cookies-popup"
      role="dialog"
      aria-labelledby="cookies-title"
      aria-describedby="cookies-description"
    >
      <div className="cookies-popup__image">
        <img src="/cookie.jpeg" alt="" aria-hidden="true" />
      </div>
      <div className="cookies-popup__content">
        <p id="cookies-description">
          Nous utilisons des cookies pour améliorer votre expérience et mesurer
          l'audience. Vous pouvez accepter ou refuser.
        </p>
        <div className="cookies-popup__actions">
          <button className="accept" onClick={handleAccept} type="button">
            Accepter
          </button>
          <button className="decline" onClick={handleDecline} type="button">
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}