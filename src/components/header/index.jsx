import React from "react";
// import Headericon from '../../images/headericon'
import headerimage from "../../images/headericon.svg";
import profileimg from "../../images/profileicon.svg";
import activeicon from "../../images/activeicon.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { clientview, digitalfabric } = props;
  return (
    <div className="app-header">
      <div className="header-main-div">
        <div className="app-header-icon">
          <img src={headerimage} alt="head-icon" />
          <div className="d-flex">
            <Link to="/clientview">
            <p
              className={`link-style ${clientview ? "link-style-active" : ""}`}
            >
              Client View
            </p>
            </Link>
            
            <Link to="/digital-fabric-action">
            <p
              className={`link-style ${
                digitalfabric ? "link-style-active" : ""
              }`}
            >
              Digital Fabric
            </p>
            </Link>
            
          </div>
        </div>
        <div className="app-header-profile">
          <img src={profileimg} alt="head-icon" />
          <img src={activeicon} alt="" className="headeractiveprofile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
