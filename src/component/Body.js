import React from "react";
import { useState, useEffect } from "react";
import { resData, swiggyRestaurants } from "../utils/mockdata";
import RestaurantCard from "../component/RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //  let [RestaurantsList, setRestaurantsList] = useState(resData);
  // let [RestaurantsList, setRestaurantsList] = useState(swiggyRestaurants);

  let [RestaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered before useEffect");

  useEffect(() => {
    // This effect runs when the component mounts
    console.log("Component mounted using useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    setRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  console.log("Body Rendered after useEffect");

  //Conditional Rendering
  return RestaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    (console.log("Body Rendered in return statement"),
    (
      <div className="main-content">
        <div className="filter-search-container">
          <button
            onClick={() => {
              const filtered = RestaurantsList.filter(
                (restaurant) => restaurant.info.avgRating > 4,
              );

              setRestaurantsList(filtered);
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search for food and restaurants"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={() => {
              // Implement search functionality here filtering based on input value and updating RestaurantsList state for search results and updated display
              console.log(searchText);
              const searched = RestaurantsList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(searched); 
            }}>Search</button>
          </div>
        </div>

        <div className="restaurant-cards">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} swiggyData={restaurant} />
          ))}
        </div>
      </div>
    ))
  );
};

export default Body;
