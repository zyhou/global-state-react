import React, { useContext } from "react";
import { AlertContext, RestaurantContext } from "../Provider";

import SelectList from "./SelectList";

const SearchRestaurant = () => {
  const { sendAlert } = useContext(AlertContext);
  const { restaurant, setCurrentRestaurant, setCurrentlocation } = useContext(
    RestaurantContext
  );

  const onClick = () => {
    sendAlert(
      `Search: ${restaurant.currentRestaurant} on ${restaurant.currentlocation}`
    );
  };

  return (
    <div className="search">
      I'm looking for a
      <SelectList
        items={restaurant.restaurantList}
        value={restaurant.currentRestaurant}
        onChange={setCurrentRestaurant}
      />
      restaurant in
      <SelectList
        items={restaurant.locationList}
        value={restaurant.currentlocation}
        onChange={setCurrentlocation}
      />
      <button onClick={onClick}>Find a Restaurant</button>
    </div>
  );
};

export default SearchRestaurant;
