import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({ swiggyData }) => {
  const{id,name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=swiggyData.info;
  return (
    <div key={id} className="cards">
      <img src={CDN_URL+cloudinaryImageId} alt="food" />
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
export default RestaurantCard;