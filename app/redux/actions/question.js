import {base_url} from './config';
import axios from  'axios';
import { message } from 'antd';

export const getQuestion =()=>{
return async  (dispatch, getState) => {  
	  if(localStorage.user_data){
	  var data=JSON.parse(localStorage.user_data);
      dispatch({type:"LOGIN",paylod:data});
      setTimeout(()=>{
	      dispatch({type:"HIDE_MSG"})
	 	},2000);
	  }else{
	      dispatch({type:"LOGOUT"})
	  }
 }
}
