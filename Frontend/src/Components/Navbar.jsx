import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>AL-CART</h2>
      <ul className="nav-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/cart">
        <img src="https://img.pikbest.com/png-images/shopping-cart-icon---vector-template---transparent-background_1794341.png!sw800" alt="Cart" className="cart-icon" />
        </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to ="/login">
        <button>Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
