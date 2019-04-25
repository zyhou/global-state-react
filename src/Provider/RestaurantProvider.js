import React, { createContext, useState } from "react";

export const RestaurantContext = createContext({});

const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
    restaurantList: ["chinese", "italian", "french", "german"],
    locationList: ["Berlin", "New York", "Paris", "London"],
    currentRestaurant: "chinese",
    currentlocation: "Berlin"
  });

  const setCurrentRestaurant = currentRestaurant => {
    setRestaurant({ ...restaurant, currentRestaurant });
  };

  const setCurrentlocation = currentlocation => {
    setRestaurant({ ...restaurant, currentlocation });
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurant, setCurrentRestaurant, setCurrentlocation }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export { RestaurantProvider };
