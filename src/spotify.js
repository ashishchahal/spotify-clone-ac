// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

export const authEndpoint = "https://accounts.spotify.com/authorize";

// we filled this in the spotify developers dashboard
//for live app
//const redirectUri = "https://spotify-clone-ac.web.app/";

// for dev
const redirectUri = "http://localhost:3001/";

// it was provided in the spotify developers dashboard when we created the app
const clientId = "aac1a158cf4f48578a3c2f2fe20525a4";

// kind of permissions for the user in the app...very important to correctly note this
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// logic to extract access token for url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) // get the first substring
    .split("&") // we dont want any excess parameter after access token
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=sonny
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

/* logic to create login url used on the login with spotify button.
    This redirects the user to the spotify app and
     then redirects it back to our app after login with access_token */
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
