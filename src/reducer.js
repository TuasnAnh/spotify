export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  //   token: null,
  //   token:
  //     "BQDc1P9AeswGa5qhrHMMU-96loKb_8cY-w_URVmUWm1HcV6-w_YIiiXJQKBlxOQuRdxm5rl3t-IwqmPm3dMfITodpsTXqJfGsK7zwFCxxJvb539eqMqx9UF2JimbHKTk2tlnytWBLRbqx7sg69kX3eZuEGVtlxPCNItDL7P8aKQiJCeD",
};

const reducer = (state, action) => {
  console.log(action);

  // Action => type, [payload]

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
