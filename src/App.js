import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  // Run code based on a given condition
  // equivalent of componentDidMount() method
  useEffect(() => {
    // code ...
    const hash = getTokenFromUrl();
    window.location.hash = ""; // to hide the token from the url
    const _token = hash.access_token; // standard for temporary variables

    if (_token) {
      // setToken(_token);
      // spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // getting the details of the user from spotify
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    //console.log("I have a token 👉", token);
  }, []);

  console.log("👱 dispatch", user);
  console.log("👽", token);

  return (
    //BEM
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
