import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  // Run code based on a given condition
  // equivalent of componentDidMount() method
  useEffect(() => {
    // code ...
    const hash = getTokenFromUrl();
    window.location.hash = ""; // to hide the token from the url
    const _token = hash.access_token; // standard for temporary variables

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      // getting the details of the user from spotify
      spotify.getMe().then((user) => {
        console.log("👱", user);
      });
    }

    console.log("I have a token 👉", token);
  }, []);

  return (
    //BEM
    <div className="App">
      {token ? <Player /> : <Login />}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
