import React from "react";
import Contact from "../components/Contact";
import Billing from "../components/Blling";
import CeckoutHero from "./CheckoutHero";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100">
      <CeckoutHero />
      <Billing />
    </div>
  );
};

export default CheckoutPage;
