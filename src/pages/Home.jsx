import React from 'react';
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Tarifs from "../components/Tarifs";
import Projet from "../components/Projet";
import Method from "../components/Method";
import Avis from "../components/Avis";
import Contact from "../components/Contact";
import Marquee from "../components/Marquee";


export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Presentation />
      <Tarifs />
      <Projet />
      <Method />
      <Avis />
      <Contact />
      <Marquee />
    </main>
  );
}