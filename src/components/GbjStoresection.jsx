import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const GBJstoreSection = () => {
  return (
    <div
      className=""
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "22px",
      }}
    >
      {/* Newsletter Subscription */}
      <div className="mb-12">
        <h2 className="text-[#5f008e] font-semibold mb-4">
          Subscribe to Newsletter
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-grow px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 border rounded-md"
          />
          <button className="bg-[#5f008e] text-white p-2 rounded-md">
            <Send size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#5f008e] mb-4">GBJstore</h1>
        <p className="text-gray-600 mb-6">
          Welcome to GBJstore, your go-to destination for premium digital
          products that transform the way you work, play, and create. Whether
          you're looking for innovative software, digital downloads, or unique
          online services, we've got something for everyone. Discover a curated
          collection of high-quality, user-friendly products designed to inspire
          and simplify your digital life. Elevate your experience today!
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-[#5f008e] hover:text-purple-900">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-[#5f008e] hover:text-purple-900">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-[#5f008e] hover:text-purple-900">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-[#5f008e] hover:text-purple-900">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Knowledge base
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Live chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Our team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Leadership
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Nordic Chair
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Kruzo Aero
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#5f008e]">
                Ergonomic Chair
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* Grey line */}
        <div className="border-t border-gray-400 mt-10 mb-5"></div>

        {/* Copyright text */}
        <p className="text-left text-m text-gray-600 mb-20">
          Copyright ©2024. All Rights Reserved. — Designed with love by GBJbuzz
        </p>
      </div>
    </div>
  );
};

export default GBJstoreSection;
