import React from "react";
import Hero from "../components/Hero";
import GBJstoreSection from "../components/GbjStoresection";
import ProductShowcase from "../components/PRoduct";
import WhyChooseUs from "../components/whychooseus";
import ContactHero from "../ContactComponent/ContactHero";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      <ContactHero />
      <Contact />
    </div>
  );
};

export default ContactPage;
