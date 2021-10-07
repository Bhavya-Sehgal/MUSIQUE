export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  // Remove after finished developing
  // token:
  //   " BQCcNTyP1NsQS9huTgsCsk3pLODaxH8BfU_CLa2L_p7LKG-QlEiE7ECZpJxzX5dJ8Ndf6p8feQLjahxR2CtGqrfxWK096Fa-BbHqOqjw1wqpAObtL8h5K7njDTD8drgvFfMI7S70edXiIGCLJDdWcNPVkpEPP7r5feXLxhZr-nXgNlSz",
};

//action: how we manipulate data layer --> type -->[payload]
// state: data in data layer

const reducer = (state, action) => {
  console.log(action);

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
    default:
      return state;
  }
};

export default reducer;
