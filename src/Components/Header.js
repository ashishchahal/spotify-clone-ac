import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, songs, genres, albums"
        />
      </div>
      <div className="header__right">
        <Avatar src="" alt="PA" />
        <h4>Ashish Chahal</h4>
      </div>
    </div>
  );
}

export default Header;
