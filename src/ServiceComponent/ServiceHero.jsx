import React from "react"; // Replace with the correct image path
import HomePic from "../assets/HomePic.png";

const ServiceHero = () => {
  return (
    <section className="bg-[#5f008e] flex items-center">
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row"
        style={{
          paddingLeft: "110px",
          paddingRight: "110px",
          paddingTop: "110px",
        }}
      >
        {/* Text Section */}
        <div className="text-white lg:w-1/2">
          <h1 className="text-5xl font-bold mb-40">Services</h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
