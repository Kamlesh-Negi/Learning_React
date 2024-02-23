import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";


const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {" "}
        {/*using map to iterate over all the objects in the array */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
