import {LOGO_URL} from "../utils/constant";

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
          <li>About Swiggy</li>
          <li>Our Businesses</li>
          <li>Delivering For Everyone</li>
          <li>Newsroom</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;