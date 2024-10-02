import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-40 p-20 bg-white rounded-lg ">
      <div className="grid grid-cols-3 gap-4 mb-8 text-gray-600">
        <div className="flex items-center">
          <div className="bg-[#5f008e] p-4 rounded-md mr-3">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm">
            43 Raymouth Rd. Baltemoer, London 3910
          </span>
        </div>
        <div className="flex items-center">
          <div className="bg-[#5f008e] p-4 rounded-md mr-3">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm">info@yourdomain.com</span>
        </div>
        <div className="flex items-center">
          <div className="bg-[#5f008e] p-4 rounded-md mr-3">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm">+1 294 3925 3939</span>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
