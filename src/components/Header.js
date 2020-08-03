import React from "react";
import logo from "../asset/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img
            style={{ cursor: "pointer" }}
            alt="logo"
            className="logo"
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="header-btns">
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
      <Link to="/login">
        <button className="whitebutton">
          <FontAwesomeIcon icon="user" />
          <br />
          <span style={{ marginLeft: 8 }}>Mon compte</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
