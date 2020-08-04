import React, { useState } from "react";
import logo from "../asset/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = ({ isLogged, logout, setSearch }) => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img
            style={{ cursor: "pointer" }}
            alt="logo"
            className="logo"
            src={logo}
          />
        </Link>

        <div className="header-btns">
          <Link to="/publish" style={{ margin: "auto" }}>
            <button className="orangebutton">
              <FontAwesomeIcon icon="plus" />
              <span style={{ marginLeft: 8 }}>Déposer une annonce</span>
            </button>
          </Link>
          <button className="whitebutton">
            <FontAwesomeIcon icon="search" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher"
              style={{ marginLeft: 8, border: "none" }}
            ></input>
          </button>
        </div>
      </div>
      {!isLogged ? (
        <Link to="/login">
          <button className="whitebutton">
            <FontAwesomeIcon icon="user" />
            <br />
            <span style={{ marginLeft: 8 }}>Mon compte</span>
          </button>
        </Link>
      ) : (
        <button
          onClick={() => {
            logout();
          }}
          className="whitebutton"
        >
          <FontAwesomeIcon icon="user" />
          <br />
          <span style={{ marginLeft: 8 }}>Deconnection</span>
        </button>
      )}
    </div>
  );
};

export default Header;
