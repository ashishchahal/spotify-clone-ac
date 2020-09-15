export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  dispatch_weekly: null,
  // REMOVE after finished debugging...used to skip login again & again
  //   token:
  //     "BQDrfci7LFPBFd5VZ2ZvoacUNXpeU5CW8C8kItICHxWqCxFM9NBARmxVyLR3WSCs2FU4kLAVtxREpPRJ4REXrOn9oJ5S61hldRp7g1KVJnXx5b6ECyGOi-UPrPHRugbef9dxTru370oWQVefYUOroUCrvV56A6jcl-hAb7OdcMuyuQEIrhL8XTjy",
};

const reducer = (state, action) => {
  console.log("action in reducer", action);
  // we listens for action inside the reducer
  // Action --> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
