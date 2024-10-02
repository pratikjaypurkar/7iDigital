import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ProductShowcase = () => {
  const furnitureItems = [
    { name: "Nordic Chair", price: 50.0, image: "/api/placeholder/200/200" },
    {
      name: "Kruzo Aero Chair",
      price: 78.0,
      image: "/api/placeholder/200/200",
    },
    { name: "Ergonomic Chair", price: 43.0, image: "/api/placeholder/200/200" },
  ];

  // Track the quantity for each item (set to 0 initially)
  const [quantities, setQuantities] = useState(furnitureItems.map(() => 0));

  // Function to handle quantity change
  const handleQuantityChange = (index, amount) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(updatedQuantities[index] + amount, 0); // Prevent negative quantity
    setQuantities(updatedQuantities);
  };

  return (
    <div
      className="container mx-auto bg-gray-100 px-[110px] py-[110px]" // Updated background and padding
    >
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-7">
          Crafted with <br />
          Excellent material.
        </h2>
        <p className="text-gray-600 ">
          Donec vitae odio quis nisl dapibus malesuada.
        </p>
        <p className="text-gray-600 mb-4">
          Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor
          tempor tristique.
        </p>
        <button className="bg-gray-700 text-white font-semibold rounded-full mt-3 pt-3 pl-10 pr-10 pb-3 hover:bg-gray-800 transition">
          Explore
        </button>
      </div>

      <div className="text-gray-700 font-semibold text-lg pb-20 pt-2">
        Products
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {furnitureItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>

            {quantities[index] === 0 ? (
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={() => handleQuantityChange(index, 1)}
              >
                <Plus className="w-6 h-6 text-gray-600" />
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  className="bg-gray-200 p-2 rounded-full"
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  <Minus className="w-6 h-6 text-gray-600" />
                </button>
                <span className="text-lg font-semibold">
                  {quantities[index]}
                </span>
                <button
                  className="bg-gray-200 p-2 rounded-full"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  <Plus className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
