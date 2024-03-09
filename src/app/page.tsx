"use client";

import Footer from "~src/components/Footer";
import Header from "~src/components/Header";
import Hero from "~src/components/widgets/Hero";
import Projects from "~src/components/widgets/Projects";
import TechStack from "~src/components/widgets/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
