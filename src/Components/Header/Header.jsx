import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();
  return (
    <div className="header">
      <nav>
        <li onClick={() => Navigate("/")}>Home</li>
        <li onClick={() => Navigate("/about")}> About</li>
        <li onClick={() => Navigate("/service")}> Service</li>
        <li onClick={() => Navigate("/contact")}>Contact</li>
      </nav>
    </div>
  );
};

export default Header;
