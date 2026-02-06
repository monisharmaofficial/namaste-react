import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus()

   const cartItems = useSelector((store)=>store.cart.items)
   console.log(cartItems)

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="logo image"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Status: {onlineStatus?"✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Swiggy</Link></li>
          <li className="font-bold">Cart - ({cartItems.length} items)</li>
          <li><Link to="/city/noida/123">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;