import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-sm md:text-base text-gray-600 text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to <strong className="text-gray-800">Recipe Haven</strong>, 
          your one-stop destination for discovering and exploring mouth-watering recipes. 
          Whether you're a seasoned chef or a kitchen newbie, we aim to inspire your culinary journey with delightful dishes from around the globe.
        </motion.p>

        {/* Food Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            "https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?",
            "https://images.unsplash.com/photo-1551024601-bec78aea704b",
            "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5",
            "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617",
            "https://images.unsplash.com/photo-1652088079703-38f4a8d6b981",
          ].map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={image}
                alt={`Food ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            At <strong>Recipe Haven</strong>, we believe that food connects people and cultures. 
            Our mission is to empower you with the knowledge, inspiration, and tools needed to bring culinary delights to life in your own kitchen. 
            Explore new flavors, experiment with unique ingredients, and create unforgettable meals with ease.
          </p>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Ready to Explore Recipes?
          </h3>
          <button className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
