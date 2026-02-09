import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  const dispatch = useDispatch();

  const handleAddItem = (res) => {
    //dispatch an action
    dispatch(addItem(res));
  };

  // console.log(params);

  const fetchMenuList = async () => {
    // const response = await fetch(
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5962027&lng=77.3842715&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`,
    // );

    const response = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json",
    );

    // console.log("Response Object:", response);
    // console.log("Status:", response.status);
    // console.log("OK:", response.ok);

    const json = await response.json();
    // console.log(json);
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenuList();
  }, []);

  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

  const restaurants =
    resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="w-full flex justify-center my-10">
      <div className="max-w-6xl w-full px-10 py-8">
        {restaurants?.map((res) => {
          const {
            id,
            name,
            cloudinaryImageId,
            areaName,
            cuisines,
            avgRating,
            availability,
            sla,
            locality,
            costForTwo,
          } = res.info;

          return (
            <div
              key={id}
              className="flex justify-between items-start border-b py-3 px-2"
            >
              <div className="w-3/4 space-y-2">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">
                  Cuisines: {cuisines.join(", ")}
                </p>{" "}
                <p className="text-sm text-gray-500">
                  locality: {locality} , area: {areaName}{" "}
                </p>
                <p className="text-sm">
                  ⭐ {avgRating} • {sla?.deliveryTime} mins • {costForTwo}
                </p>
                <p
                  className={`text-sm font-medium ${
                    availability?.opened ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {availability?.opened ? "Open" : "Closed"}
                </p>
              </div>
              <div className=" relative w-1/4 flex justify-end">
                <img
                  src={CDN_URL + cloudinaryImageId}
                  alt={name}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <button
                  className="absolute bg-amber-50 px-2 font-bold rounded-md inline-block"
                  onClick={() => handleAddItem(res)}
                >
                  Add+
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
