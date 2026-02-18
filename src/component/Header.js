import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  // Toggle login/logout state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="header flex items-center justify-between p-4 bg-white shadow-md">
      <div className="logo">
        <img src={LOGO_URL} alt="logo image" className="h-10" />
      </div>

      <div className="nav-items">
        <ul className="flex gap-4 items-center">
          <li>Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Swiggy</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/city/noida/123">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Careers</li>

          <li>
            <button
              onClick={handleLoginToggle}
              className="px-4 py-1 bg-blue-400 text-white rounded hover:bg-blue-400 transition"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
