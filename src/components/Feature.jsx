import React from "react";
import {
  Truck,
  ShoppingBag,
  LifeBuoy,
  RefreshCw,
  Clock,
  CreditCard,
  Shield,
  Gift,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="bg-gray-200 rounded-full p-3 mb-4">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Feature = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast & Free Shipping",
      description:
        "Enjoy quick and complimentary shipping on all orders. We make sure your items reach you fast, no matter where you are, without any extra costs. Shop with ease knowing your delivery is on us.",
    },
    {
      icon: ShoppingBag,
      title: "Easy to Shop",
      description:
        "We’ve designed our online store to be user-friendly and intuitive. With seamless navigation and simple checkout, finding what you need has never been easier. Experience hassle-free shopping from start to finish",
    },
    {
      icon: LifeBuoy,
      title: "24/7 Support",
      description:
        "Our customer support team is available around the clock. Whether you have questions or need assistance, we’re here for you anytime, day or night. Reach out to us via chat, email, or phone — we’re happy to help",
    },
    {
      icon: RefreshCw,
      title: "Hassle Free Returns",
      description:
        "Not completely satisfied? No problem! Our hassle-free returns process ensures you can send back items with ease. Just follow our simple steps to return your purchase within the specified timeframe for a refund or exchange",
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description:
        "We pride ourselves on fast delivery. Once you place your order, our efficient logistics network works hard to ensure your products arrive at your doorstep in no time.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Your safety is our priority. We use the latest encryption technology to guarantee that your transactions are secure and protected, giving you peace of mind when shopping online.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "We stand behind the quality of every product we offer. If for any reason you're not satisfied, rest assured that our quality guarantee ensures a smooth process for replacement or refund.",
    },
    {
      icon: Gift,
      title: "Special Offers",
      description:
        "Stay updated with our exclusive deals and discounts. We frequently offer special promotions that allow you to get the best value for your money. Sign up for our newsletter so you never miss out on savings!",
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "110px",
        paddingBottom: "110px",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
