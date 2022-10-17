import React from "react";
// import Headericon from '../../images/headericon'
import headerimage from "../../images/headericon.svg";
import profileimg from "../../images/profileicon.svg";
const Header = () => {
  return (
    <div className="app-header">
      <div className="header-main-div">
        <div className="app-header-icon">
          <img src={headerimage} alt="head-icon" />
          <div>
            <p className="header-link">Client View</p>
          </div>
        </div>
        <div className="app-header-profile">
          <img src={profileimg} alt="head-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
