import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import GBJstoreSection from "./components/GbjStoresection";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import AboutUsPage from "./Pages/AboutusPage";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Pages/Cart";
import Service from "./Pages/Service";
import Contact from "./components/Contact";
import ContactPage from "./Pages/ContactPage";
import SignUp from "./Pages/SignUp";
import CheckoutPage from "./Pages/CheckoutPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>

        <GBJstoreSection />
      </div>
    </Router>
  );
};

export default App;
