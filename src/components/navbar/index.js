import React from "react";
import logo from "../logo/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo} alt="logo" />
        <div className="navbar-btns">
          <button className="orangebutton">
            <FontAwesomeIcon icon="plus" />
            <span style={{ marginLeft: 8 }}>Déposer une annonce</span>
          </button>
          <button className="whitebutton">
            <FontAwesomeIcon icon="search" />
            <input
              placeholder="Rechercher"
              style={{ marginLeft: 8, border: "none" }}
            ></input>
          </button>
        </div>
      </div>
      <button className="whitebutton">
        <FontAwesomeIcon icon="user" />
        <br />
        <span style={{ marginLeft: 8 }}>Mon compte</span>
      </button>
    </div>
  );
};

export default NavBar;
