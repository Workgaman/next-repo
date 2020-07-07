import {base_url} from './config';
import axios from  'axios';
import { message } from 'antd';

export const checkLogin =()=>{
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

export const logout =()=>{
return async  (dispatch, getState) => {  
		localStorage.removeItem("user_data");
      dispatch({type:"LOGOUT"});
 }
}


export const login = (id,pass) => {
return async  (dispatch, getState) => {  
dispatch({type:"SUBMITING"});	
  await axios.post(base_url+"clientuserlogin.json?userId="+id+"&pwd="+pass+"&lipa=10.0.0.12").then((res)=>{
    // console.log(res);
 	if(res.data.ottresp.sts===0){
      dispatch({type:"ERROR",paylod:res.data.ottresp.msg});
      message.error({ content:  res.data.ottresp.msg, duration: 2 });

 	}else{
     var ds= res.data.ottresp;
     ds.setting=true;
     console.log(ds);
      localStorage.setItem("user_data",JSON.stringify(ds));
      message.success({ content: 'Successfully Logged in!', duration: 2 });
      dispatch({type:"LOGIN",paylod:res.data.ottresp});

 	}

 	setTimeout(()=>{
      dispatch({type:"HIDE_MSG"})
 	},2000)

  }).catch((e)=>{
      message.error({ content:  "Something Went Wrong! Please try after sometime", duration: 2 });

      dispatch({type:"ERROR",paylod:"Something Went Wrong! Please try after sometime"})
  })
}
}