import { fromJS, List, Map } from 'immutable';
import notif from 'enl-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'enl-redux/constants/notifConstants';
import {GET_QUESTION} from "./action";

const initialState = {
	data:null
};
// let editingIndex = 0;


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_QUESTION:
      return {
      	...state,
      	data:action.payload
      }
    default:
      return state;
  }
}
