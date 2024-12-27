import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Recipe Haven. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Made with <span className="text-red-500">&hearts;</span> for food lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
