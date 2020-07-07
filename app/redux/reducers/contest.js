const initState = {
	theme:[],
  todayContest:{},
  nextdata:{},
  dataToShow:{},
  joinUser:{count:0},
  isEnd:false,
  isProdConfig:false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_THEME":
      return {
        ...state,
        theme:action.paylod,
      };
        break;
        case "GET_TODAYCONTEST":
        return{
          ...state,
          todayContest:action.paylod,
          nextdata:null,
          isEnd:false,
        }
        break;
          break;
        case "NEXTDATA":
        return{
          ...state,
          nextdata:action.paylod,
          isEnd:false,

        }
        break;
        case "SETCONTESTDATA":
        return{
          ...state,
          dataToShow:action.paylod,
          isEnd:false,
          jackpotWinners:null
          
        }

        case "SETJACK":
        return{
          ...state,
          jackpotWinners:action.paylod
        }
        case "TODAY_QUESTION":
        return{
          ...state,
          question:action.paylod
        }

        case "isProd":
        return{
          ...state,
          isProdConfig:true
        }
        case "answerCount":
        return{
          ...state,
          answerCount:action.paylod
        }
        case "GET_JOINED":
        return{
          ...state,
          joinUser:action.paylod
        }
        case "PRODSHOP":
        return{
          ...state,
          contestProduct:action.paylod
        }
        case "SETSUMMWIN":
        return{
          ...state,
          summaryWinners:action.paylod,
          jackpotWinners:null,
          grandWinners:null
        }
        case "SETGRAND":
        return{
          ...state,
          grandWinners:action.paylod,
          jackpotWinners:null,
          summaryWinners:null
        }
        case "END":
        return{
          ...state,
          dataToShow:{},
          nextdata:{},
          todayContest:action.paylod,
          isEnd:true,
          summaryWinners:null,
          jackpotWinners:null,
          grandWinners:null,
          isProdConfig:false


        }
    default:
      return state;
  }
};

export default reducer;

