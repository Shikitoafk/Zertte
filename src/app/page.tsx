"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Case from "../components/Case";
import Tracks from "../components/Tracks";
import RegistrationBlock from "../components/RegistrationBlock";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  // Initialize IntersectionObserver to trigger scroll fade-in reveals
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Unobserve once active to keep animation simple and performant
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12, // Trigger when 12% of the card is visible
        rootMargin: "0px 0px -60px 0px", // Offset triggers slightly above viewport edge
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg font-sans selection:bg-brand-teal/20 selection:text-brand-tealDeep antialiased">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Sections Stack */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Features Section */}
        <About />

        {/* Horizontal/Vertical Pipeline Section */}
        <Timeline />

        {/* Lockable Challenge Details Section */}
        <Case />

        {/* Participation Tracks Section */}
        <Tracks />

        {/* Registration Forms/Redirection Block */}
        <RegistrationBlock />

        {/* FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Standard Footer info and social handles */}
      <Footer />
    </div>
  );
}
