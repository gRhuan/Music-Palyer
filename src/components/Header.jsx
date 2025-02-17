import React from "react";
import logoMusic from "../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logoMusic} alt="Logo" />
      <a className="header__link" href="/">
        <h1>Music</h1>
      </a>
    </div>
  );
};

export default Header;
