import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Components/Search";
import RecipeCard from "../Components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("pizza");
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}&addRecipeInformation=true`;
    try {
      setLoading(true);
      const response = await axios.get(url);

      // Sort recipes by score in descending order
      const sortedRecipes = response.data.results.sort(
        (a, b) => (b.spoonacularScore || 0) - (a.spoonacularScore || 0)
      );

      setRecipes(sortedRecipes);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [query, filter]);

  const handleSearch = (searchQuery, selectedFilter) => {
    setQuery(searchQuery || "pasta");
    setFilter(selectedFilter);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          What’s Cooking Today?
        </h2>

        {/* Search Component */}
        <Search onSearch={handleSearch} />

        {/* Loading & Error Messages */}
        {loading && (
          <p className="text-center text-sm py-3 text-gray-500">
            Loading recipes...
          </p>
        )}
        {error && (
          <p className="text-center text-sm text-red-500">{error}</p>
        )}

        {/* Recipes Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
