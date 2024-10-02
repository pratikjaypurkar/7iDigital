const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section bg-gray-100 py-8 px-4">
      <div className="container mx-auto flex items-center justify-between px-[100px] py-[110px]">
        {/* Left Side - Text Section */}
        <div className="why-choose-us-text w-1/2 mr-10">
          <h2 className="text-3xl font-semibold mb-3">Why Choose Us</h2>
          <p className="text-gray-600 ">
            With premium digital products, fast and free shipping, and 24/7
            support, we make shopping effortless. Enjoy hassle-free returns and
            an easy, convenient shopping experience tailored to your needs.
          </p>

          {/* Features Section */}
          <div className="features grid grid-cols-2 gap-8 mt-8">
            <div className="feature">
              <div className="icon mb-2 ">🚚</div>
              <h4 className="font-semibold text-m ">Fast & Free Shipping</h4>
              <p className="text-gray-600 text-sm">
                Get your digital products delivered instantly, with no shipping
                costs. Enjoy fast, hassle-free downloads right at your
                fingertips.
              </p>
            </div>

            <div className="feature">
              <div className="icon mb-2">🛒</div>
              <h4 className="font-bold text-xl">Easy to Shop</h4>
              <p className="text-gray-600">
                Simple, intuitive browsing and checkout process designed for
                convenience. Find what you need in just a few clicks, without
                any complications.
              </p>
            </div>

            <div className="feature">
              <div className="icon mb-2">📞</div>
              <h4 className="font-bold text-xl">24/7 Support</h4>
              <p className="text-gray-600">
                Our team is always here for you—any time, any day. Reach out to
                us whenever you need assistance, and we'll resolve your queries
                promptly.
              </p>
            </div>

            <div className="feature">
              <div className="icon mb-2">🔄</div>
              <h4 className="font-bold text-xl">Hassle Free Returns</h4>
              <p className="text-gray-600">
                Not satisfied with your purchase? We've got you covered with
                easy returns and refunds. Experience worry-free shopping with
                our customer-first policy.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="why-choose-us-image w-1/2">
          <img
            src="/path/to/your/image.png"
            alt="Room Setup"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
