import React from "react";
import lg from "../assets/lp.jpg";
import google from "../assets/google-icon.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Sign-Up Form */}
      <div className="flex flex-col justify-center w-1/2 bg-white ">
        <div className="mx-40">
          {/* Welcome Text */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600 mb-8">Sign up to get started!</p>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your mail address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-150">
            Sign Up
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-150 flex items-center justify-center mt-4">
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          {/* Already have an account? */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-indigo-600 hover:text-indigo-500">
              Log in here
            </Link>
          </p>
        </div>
      </div>

      {/* Right side: Image Section */}
      <div className="w-1/2 mt-20 mr-10">
        {/* You can set a background image here or create a design similar to the image */}
        <img src={lg} alt="Signup Graphic" className=" mr-2" />
      </div>
    </div>
  );
};

export default Signup;
