import React, { useState } from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import { Plus, Minus } from "lucide-react"; // Import icons for the counter

const ProductDirectory = () => {
  const furnitureItems = [
    { name: "Nordic Chair", price: 50.0, image: one, category: "pdf" },
    {
      name: "Kruzo Aero Chair",
      price: 78.0,
      image: two,
      category: "audio book",
    },
    { name: "Ergonomic Chair", price: 43.0, image: three, category: "ppt" },
    { name: "Stylish Table", price: 100.0, image: four, category: "project" },
    { name: "Office Desk", price: 150.0, image: five, category: "pdf" },
    { name: "Gaming Chair", price: 200.0, image: six, category: "audio book" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantities, setQuantities] = useState(furnitureItems.map(() => 0)); // Track quantities for each product

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleQuantityChange = (index, amount) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(updatedQuantities[index] + amount, 0); // Prevent negative quantity
    setQuantities(updatedQuantities);
  };

  const filteredItems = furnitureItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    
    <div
      className="container bg-[#f8f5fa]"
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "20px",
      }}
    >
      <div className="justify-between mb-10 mt-10">
        <div className="relative mb-1">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Products..."
            className="border border-gray-400 rounded-full px-20 py-3 w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-2.5 h-7 w-7 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.5 10.5A6.5 6.5 0 1110 4a6.5 6.5 0 016.5 6.5z"
            />
          </svg>
        </div>

        <h1 className="py-10 text-3xl text-gray-600 font-semibold">Products</h1>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-400 bg-gray-600 text-white rounded-full py-3  pl-10 pr-10"
        >
          <option value="">All Categories</option>
          <option value="pdf">PDF</option>
          <option value="audio book">Audio Book</option>
          <option value="ppt">PPT</option>
          <option value="project">Project</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-between">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden mb-10"
            style={{ height: "auto", width: "230px" }}
          >
            <div className="bg-white shadow-lg p-[20px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="mt-2 px-1 text-left">
              <h3 className="text-xl text-gray-500 font-semibold mb-2 mt-7">
                {item.name}
              </h3>
              <p className="text-gray-500 text-m font-semibold">
                ${item.price.toFixed(2)}
              </p>

              {quantities[index] === 0 ? (
                <button
                  className="bg-[#5f008e] text-white w-40 py-2 rounded-full mt-5 ml-5 mb-4 hover:bg-[#5f009e] transition duration-300"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center mt-5 ml-5">
                  <button
                    className="bg-gray-200 p-2 rounded-full"
                    onClick={() => handleQuantityChange(index, -1)}
                  >
                    <Minus className="w-6 h-6 text-gray-600" />
                  </button>
                  <span className="mx-4 text-lg font-semibold">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDirectory;
