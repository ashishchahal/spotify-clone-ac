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
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      // getting the details of the user from spotify
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify
        .getMyDevices()
        .then((res) => {
          // this logic is not right..find one!!
          let id;
          const devices = res?.devices.map((devId) =>
            devId.is_active
              ? (id = devId.id)
              : (id = "f61f3a9ce8921c5ec58c6a6b969b7d132fe46ea3")
          );

          console.log(id, "🕵️‍♂️");

          dispatch({
            type: "SET_DEVICE_ID",
            deviceId: "f61f3a9ce8921c5ec58c6a6b969b7d132fe46ea3",
          });
          console.log("devices", res.devices);
        })
        .catch((error) => console.log(error, "devices error"));

      // device id of samsung m31s -> "f61f3a9ce8921c5ec58c6a6b969b7d132fe46ea3"
      // device id of macbook air ==> "a3859ef2bd4a719bf41c4c6c755311a2d095583b"
      // device id of Echo --> "ce0d01b6ce014b4c79b49beca30581de4b49c586"

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      // getting the details of My Discover Weekly playlist
      spotify.getPlaylist("2BHHJbvo6Az3XD3MvLie2i").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }

    //console.log("I have a token 👉", token);
  }, []);

  // console.log("👱 User", user);
  // console.log("👽", token);

  return (
    //BEM
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Login with spotify button */}
    </div>
  );
}

export default App;
