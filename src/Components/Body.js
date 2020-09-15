import React from "react";
import "../Styles/Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
    </div>
  );
}

export default Body;
