import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ swiggyData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    availability,
  } = swiggyData.info;
  return (
    <div key={id} className="cards">
      <img src={CDN_URL + cloudinaryImageId} alt="food" />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="card-details">
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

//higher order functio to show the open lable on the cards it will take Restaurant card as input and output will be availabilityCheck (with open lable)
// there are two return bcs hof return a componenet (first return) and the componenet is also a function that's why second return conatine the jsx

export const availabilityCheck = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-amber-100 text-black font-bold px-3 py-1 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
