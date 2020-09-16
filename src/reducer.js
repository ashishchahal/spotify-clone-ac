export const initialState = {
  user: null,
  spotify: null,
  deviceId: "f61f3a9ce8921c5ec58c6a6b969b7d132fe46ea3",
  playlists: [],
  playing: false,
  item: null,
  dispatch_weekly: null,
  // REMOVE after finished debugging...used to skip login again & again
  // token:
  //   "BQDrfci7LFPBFd5VZ2ZvoacUNXpeU5CW8C8kItICHxWqCxFM9NBARmxVyLR3WSCs2FU4kLAVtxREpPRJ4REXrOn9oJ5S61hldRp7g1KVJnXx5b6ECyGOi-UPrPHRugbef9dxTru370oWQVefYUOroUCrvV56A6jcl-hAb7OdcMuyuQEIrhL8XTjy",
};

const reducer = (state, action) => {
  //console.log("action in reducer", action);
  // we listens for action inside the reducer
  // Action --> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_DEVICE_ID":
      return {
        ...state,
        deviceId: action.deviceId,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
