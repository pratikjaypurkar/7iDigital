import React from "react"; // Replace with the correct image path

const CheckoutHero = () => {
  return (
    <section className="bg-[#5f008e] flex items-center">
      <div
        className="container mx-auto flex flex-col-reverse lg:flex-row"
        style={{
          paddingLeft: "110px",
          paddingRight: "110px",
          paddingTop: "110px",
          paddingBottom: "110px",
        }}
      >
        {/* Text Section */}
        <div className="text-white lg:w-1/2">
          <h1 className="text-5xl font-bold mb-10">Checkout</h1>

          {/* CTA Buttons */}
          <div className="space-x-4">
            <button className="bg-yellow-500 text-black font-semibold rounded-full pt-3 pl-10 pr-10 pb-3 hover:bg-white transition">
              Shop New
            </button>
            <button className="border border-grey-300 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#5f008e] transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHero;
