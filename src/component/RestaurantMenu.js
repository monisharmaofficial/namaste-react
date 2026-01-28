import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  console.log("Restaurant ID:", restaurantId);
  return (
    <div className="menu-cards">
      <h2>This is the RestaurantMenu</h2>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>Sushi</li>
        <li>Dessert</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;