import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {recipe.title}
        </h3>
        {/* Ratings Section */}
        {recipe.spoonacularScore && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`${
                  index < Math.round(recipe.spoonacularScore / 20)
                    ? "text-yellow-400"
                    : "text-gray-300"
                } text-sm`}
              >
                ★
              </span>
            ))}
           
          </div>
        )}
        <Link to={`/recipe/${recipe.id}`}>
          <button className="mt-3 w-full py-2 bg-orange-600 text-white text-xs font-semibold rounded-lg hover:bg-orange-500 transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
