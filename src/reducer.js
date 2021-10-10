export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // Remove after finished developing
  // token:
  //   " BQCcNTyP1NsQS9huTgsCsk3pLODaxH8BfU_CLa2L_p7LKG-QlEiE7ECZpJxzX5dJ8Ndf6p8feQLjahxR2CtGqrfxWK096Fa-BbHqOqjw1wqpAObtL8h5K7njDTD8drgvFfMI7S70edXiIGCLJDdWcNPVkpEPP7r5feXLxhZr-nXgNlSz",
};

//action: how we manipulate data layer --> type -->[payload]
// state: data in data layer

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        //this is what new state will look like
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
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
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
