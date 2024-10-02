import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav
      className="bg-[#5f008e]"
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "22px",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-3xl pb-5">
          <span className="text-white">7i</span>
          <span className="text-white">Digital</span>
        </div>
        <div className="flex space-x-10 items-center pb-5 ml-7">
          <Link
            to="/home"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop-page"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to="/about-us-page"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            About us
          </Link>
          <Link
            to="/service"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <FaUser className="w-14 h-6 rounded-full " />{" "}
            {/* Using the user icon */}
          </Link>

          <Link
            to="/cart"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <FaShoppingCart className="w-14 h-6 " /> {/* Using the cart icon */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
