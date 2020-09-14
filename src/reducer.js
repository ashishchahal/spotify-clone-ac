export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished debugging
  token:
    "BQDrfci7LFPBFd5VZ2ZvoacUNXpeU5CW8C8kItICHxWqCxFM9NBARmxVyLR3WSCs2FU4kLAVtxREpPRJ4REXrOn9oJ5S61hldRp7g1KVJnXx5b6ECyGOi-UPrPHRugbef9dxTru370oWQVefYUOroUCrvV56A6jcl-hAb7OdcMuyuQEIrhL8XTjy",
};

const reducer = (state, action) => {
  console.log("action in reducer", action);

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
    default:
      return state;
  }
};

export default reducer;
