import React from "react";
import "../Styles/Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify_Image"
        className="login__image"
      />
      <a href="" className="login__button">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
