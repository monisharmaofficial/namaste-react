import { useEffect, useState } from "react";
import { RES_URL } from "./constant";

const useRestaurentCard = () => {
  let [RestaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurentCard();
  }, []);

  const fetchRestaurentCard = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurantsList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (err) {
      console.error(err);
    }
  };

  return {
    RestaurantsList,
    setRestaurantsList,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurentCard;
