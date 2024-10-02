import { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  type = "text",
  placeholder,
  required = false,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {required && " *"}
    </label>
    <input
      type={type}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

const Billing = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  const ShippingAddressForm = () => (
    <div className="mt-6 p-4 border border-gray-200 rounded-md">
      <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
      <InputField label="Country" placeholder="Select a country" required />
      <div className="flex mb-4 space-x-4">
        <InputField label="First Name" required />
        <InputField label="Last Name" required />
      </div>
      <InputField label="Company Name" />
      <InputField label="Address" placeholder="Street address" required />
      <InputField label="Apartment, suite, unit etc. (optional)" />
      <div className="flex mb-4 space-x-4">
        <InputField label="State / Country" required />
        <InputField label="Postal / Zip" required />
      </div>
    </div>
  );

  return (
    <div
      className="container mx-auto p-4"
      style={{
        paddingLeft: "110px",
        paddingRight: "110px",
        paddingTop: "110px",
        paddingBottom: "110px",
      }}
    >
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form>
              <InputField
                label="Country"
                placeholder="Select a country"
                required
              />
              <div className="flex mb-4 space-x-4">
                <InputField label="First Name" required />
                <InputField label="Last Name" required />
              </div>
              <InputField label="Company Name" />
              <InputField
                label="Address"
                placeholder="Street address"
                required
              />
              <InputField label="Apartment, suite, unit etc. (optional)" />
              <div className="flex mb-4 space-x-4">
                <InputField label="State / Country" required />
                <InputField label="Postal / Zip" required />
              </div>
              <div className="flex mb-4 space-x-4">
                <InputField label="Email Address" type="email" required />
                <InputField label="Phone" placeholder="Phone Number" required />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={createAccount}
                    onChange={(e) => setCreateAccount(e.target.checked)}
                  />
                  <span className="ml-2">Create an account?</span>
                </label>
              </div>
              {createAccount && (
                <InputField label="Account Password" type="password" required />
              )}

              <div className="mb-4">
                <button
                  type="button"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                  onClick={() =>
                    setShipToDifferentAddress(!shipToDifferentAddress)
                  }
                >
                  <span className="mr-2">
                    {shipToDifferentAddress ? "▼" : "►"}
                  </span>
                  Ship To A Different Address?
                </button>
              </div>

              {shipToDifferentAddress && <ShippingAddressForm />}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Order Notes
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="4"
                  placeholder="Write your notes here..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Coupon Code</h2>
            <div className="flex">
              <input
                type="text"
                className="flex-grow rounded-l-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Coupon Code"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
                Apply
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-10">
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
            <table className="w-full  mb-6">
              <thead>
                <tr>
                  <th className="text-left">Product</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Top Up T-Shirt x 1</td>
                  <td className="text-right">$250.00</td>
                </tr>
                <tr>
                  <td>Polo Shirt x 1</td>
                  <td className="text-right">$100.00</td>
                </tr>
                <tr className="font-bold">
                  <td>Cart Subtotal</td>
                  <td className="text-right">$350.00</td>
                </tr>
                <tr className="font-bold">
                  <td>Order Total</td>
                  <td className="text-right">$350.00</td>
                </tr>
              </tbody>
            </table>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Direct Bank Transfer</h3>
              <p className="text-sm text-gray-600">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order would not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Cheque Payment</h3>
              <p className="text-sm text-gray-600">
                Please send your cheque to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-2">PayPal</h3>
              <p className="text-sm text-gray-600">
                Pay via PayPal; you can pay with your credit card if you do not
                have a PayPal account.
              </p>
            </div>
            <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
