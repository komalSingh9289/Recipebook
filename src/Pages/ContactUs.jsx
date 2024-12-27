import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 max-w-2xl bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            alert("Thank you for reaching out!");
          }}
          className="space-y-4"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="5"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
