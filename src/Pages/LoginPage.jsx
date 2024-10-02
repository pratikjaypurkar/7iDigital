import React from "react";
import lg from "../assets/lp.jpg";
import { Link } from "react-router-dom";
import google from "../assets/google-icon.svg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Login Form */}
      <div className="flex flex-col justify-center w-1/2 bg-white ">
        <div className="mx-auto">
          {/* Logo */}

          {/* Welcome Text */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back!
          </h2>
          <p className="text-gray-600 mb-8">
            Enter to get unlimited access to data & information.
          </p>

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
              placeholder="Enter password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>

          {/* Log In Button */}
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-150">
            Log In
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-600 px-4 py-2 mt-10 rounded-lg hover:bg-gray-100 transition duration-150 flex items-center justify-center">
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          {/* Register Here */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Right side: Image Section */}
      <div className="w-1/2 mt-20 mr-10">
        {/* You can set a background image here or create a design similar to the image */}

        <img src={lg} alt="Google" className=" mr-2" />
      </div>
    </div>
  );
};

export default LoginPage;
