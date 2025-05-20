import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  const popularMealIds = [
    "52772", // Teriyaki Chicken Casserole
    "52874", // Beef and Mustard Pie
    "52819", // Kapsalon
    "52977", // Moroccan Chicken Tagine
    "53016", // Chicken Fajita Mac and Cheese
    "52802", // Fish pie
    "52959", // Chicken Enchilada Casserole
    "52875", // Chicken Parmesan
    "52814", // Rappie Pie
    "52854", // Tourtiere
    "52844", // Garlic Butter Baked Salmon
    "52813", // Poutine
    "52831",
  ];

  const [menuItems, setMenuItems] = useState([]);
  const [randomMeals, setRandomMeals] = useState([]);

  useEffect(() => {
    const fetchPopularMeals = async () => {
      try {
        const meal = popularMealIds.map(async (id) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const response = await res.json();
          return response.meals[0];
        });
        const meals = await Promise.all(meal);
        setMenuItems(meals);
      } catch (error) {
        console.error("Error fetching popular meals:", error);
      }
    };
    fetchPopularMeals();
  }, []);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      const mealPromises = Array.from({ length: 35 }, async () => {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const response = await res.json();
        return response.meals[0]; // each API call returns a single random meal
      });

      const meals = await Promise.all(mealPromises);
      setRandomMeals(meals);
    };

    fetchRandomMeals();
  }, []);

  return (
    <div>
      <Carousel />

      <div className="mt-6  text-2xl font-bold px-4">Meals That Await You</div>
      <div className="mt-4 h-60 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scroll-smooth">
        <div className="flex flex-nowrap gap-6 px-4">
          {menuItems.map((meal) => (
            <div
              key={meal.idMeal}
              className="flex flex-shrink-0 flex-col items-center w-36 sm:w-40 md:w-44"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-36 sm:h-40 md:h-44 rounded-full object-cover"
              />
              <p className="mt-2 text-center text-sm sm:text-base font-semibold">
                {meal.strMeal}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-semibold px-4 mt-4">Popular Picks</h2>
      <div className="mt-4 h-60 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4 px-2 ml-2">
        {randomMeals.map((meal) => (
          <div key={meal.idMeal} className="flex flex-col items-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-3xl object-cover p-2 w-60 h-60"
            />
            <p className="mt-2 text-center font-semibold">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
