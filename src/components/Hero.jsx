import React from "react"; // Replace with the correct image path
import HomePic from "../assets/HomePic.png";

const Hero = () => {
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
          <h1 className="text-5xl font-bold mb-10">
            Access Exclusive
            <br /> Library
          </h1>
          <p className="text-gray-300 mb-8">
            Ultimate + digital products, including premium courses, ebooks,
            templates, and software. <br />
            Everything you need to master your skills, boost your business, and
            achieve success — all <br /> at unbeatable prices.
          </p>

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

        <div className="-mt-20 ml-20 ">
          <img src={HomePic} className=" " />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="bg-[#5f008e] text-white flex p-8 font-arial-bold">
//       <div className="w-1/2 ml-40">
//         <h1 className="text-5xl font-bold mb-10 mt-40">
//           Access Exclusive <br /> Library
//         </h1>
//         <p className="mb-8 text-xs-bold" style={{ color: "#8c8c8c" }}>
//           Ultimate + digital products, including premium courses, ebooks,
//           templates, and software. <br />
//           Everything you need to master your skills, boost your business, and
//           achieve success — all <br />
//           at unbeatable prices.
//         </p>

//         <button className="bg-yellow-400 text-black px-9 py-4 font-arial rounded-full">
//           Shop Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
