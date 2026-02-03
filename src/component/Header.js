import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Swiggy</Link></li>
          <li>Delivering For Everyone</li>
          <li>Newsroom</li>
          <li><Link to="/city/noida/123">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;