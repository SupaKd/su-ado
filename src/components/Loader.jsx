// src/components/Loader.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

export default function Loader({ onFinish }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        if (onFinish) onFinish();
      }
    });

    // Animation d'entrée du logo
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 }
    );

    // Animation des particules flottantes
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: () => gsap.utils.random(-50, 50),
        y: () => gsap.utils.random(-50, 50),
        opacity: () => gsap.utils.random(0.3, 1),
        duration: () => gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        delay: i * 0.2,
        ease: "sine.inOut"
      });
    });

    // Disparition du loader (plus rapide)
    tl.to(loaderRef.current, { opacity: 0, duration: 0.5, delay: 0.3 });
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg, #fff,#1C60E7, #11B8E6, #1FE1B0)",
        backgroundSize: "600% 600%",
        animation: "gradientMove 8s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden"
      }}
    >
      {/* Particules */}
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            backgroundColor: "white",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.5
          }}
        />
      ))}

      {/* Logo */}
      <img
        ref={logoRef}
        src={logo}
        alt="Logo"
        style={{
          width: "150px",
          height: "auto",
          zIndex: 10,
          filter: "drop-shadow(0 0 15px rgba(255,255,255,0.5))"
        }}
      />

      {/* Animation CSS du fond */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
