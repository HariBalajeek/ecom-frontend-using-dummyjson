import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Contact MyShoppy</h2>
        <p className="text-gray-600 text-center mb-6">Have questions about your order or need support? Reach out to us, and we'll be happy to assist you!</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tell us how we can help you"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-gray-500 text-sm text-center mt-4">You can also email us at <span className="text-blue-500">support@myshoppy.com</span></p>
      </div>
    </div>
  );
};

export default Contact;