import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipeDetails = async () => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      setRecipe(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch recipe details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Back to Home */}
        <Link
          to="/"
          className="text-blue-600 hover:underline text-sm flex items-center mb-4"
        >
          &larr; Back to Home
        </Link>

        {/* Loading & Error Messages */}
        {loading && (
          <p className="text-center text-gray-500 text-sm">
            Loading recipe details...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 text-sm">{error}</p>
        )}

        {/* Recipe Details */}
        {recipe && (
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
            {/* Recipe Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {recipe.title}
            </h2>

            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full rounded-lg mb-6"
            />

            {/* Ingredients */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Ingredients:
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 mb-6">
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>

            {/* Instructions */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Instructions:
            </h3>
            {recipe.instructions ? (
              <div
                className="prose prose-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></div>
            ) : (
              <p className="text-gray-500 text-sm">
                No instructions available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
