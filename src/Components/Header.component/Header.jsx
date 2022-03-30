import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        src={require("./tfn_logo.png")}
        alt="Transport for the North Logo"
        className="logo"
      />
      <div className="appTitle">Northern Highway Assignment Model Outputs</div>
      <div className="nav">
        <Link to="/" className="navLink">
          Single scenario
        </Link>
        <Link to="Difference" className="navLink">
          Difference
        </Link>
      </div>
    </div>
  );
};

export default Header;
