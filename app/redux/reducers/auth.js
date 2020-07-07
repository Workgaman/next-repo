const initState = {
	error:false,
  data:["a"],
  loading:false,
  message:null,
  variant:"success",
};

const reducer = (state = initState, action) => {
  console.log('init state -----------------------------> ', state)
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        data:action.paylod,
        error:false,
        loading:false,
        isLoggedIn:true,
        message:null,
        variant:"success"
      };
      case "SUBMITING":
      return{
          ...state,
           loading:true,
      };
      case "LOGOUT":{
        return{
          ...state,
          isLoggedIn:false
        }
      };
      case "HIDE_MSG":
        return{
           message:null,
           error:false
        };
        case "ERROR":
        return{
          ...state,
          error:true,
          message:action.paylod,
          variant:"error",
          loading:false
        };
        break;
    default:
      return state;
  }
};

export default reducer;
