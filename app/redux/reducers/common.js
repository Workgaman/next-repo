const initState = {
	theme:[]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CAT":
      return {
        ...state,
        cat:action.paylod,
      };
      break;
         case "GET_SUBCAT":
      return {
        ...state,
        subcat:action.paylod,
      };
    default:
      return state;
  }
};

export default reducer;
