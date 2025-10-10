import { useEffect, useState } from "react";

export default function CookiesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookies-popup">
        <div className="cookies-popup__image">
            <img src="/cookie.jpeg" alt="image-cookie" />
        </div>
      <div className="cookies-popup__content">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience et mesurer
          l’audience. Vous pouvez accepter ou refuser.
        </p>
        <div className="cookies-popup__actions">
          <button className="accept" onClick={handleAccept}>
            Accepter
          </button>
          <button className="decline" onClick={handleDecline}>
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
