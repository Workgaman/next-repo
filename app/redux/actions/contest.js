import {base_url,CALL_API} from './config';
import axios from  'axios';
import {message} from 'antd'


export const getTheme = () => {
return async  (dispatch, getState) => {  	
  await CALL_API("post",base_url+"ottgetallthemes.json?clId=AMIT202002CID").then((res)=>{
 	  dispatch({type:"GET_THEME",paylod:res.data.ottresp});
  })
}
}


export const getJoinedCount = () => {
return async  (dispatch, getState) => {  
  const state= getState() ;
  var data=state.get('contest').todayContest;
  var coId=data.contest.coId;

  await CALL_API("post",base_url+"livegettotalusercount.json?clId=AMIT202002CID&coId="+coId).then((res)=>{
    dispatch({type:"GET_JOINED",paylod:res.data.liveresp});
  })
}
}


export const getTodayQuestion = () => {
return async  (dispatch, getState) => {   
  const state= getState() ;
  var data=state.get('contest').todayContest;
  var coId=data.contest.coId;
  await CALL_API("post",base_url+"livegetquestion.json?clId=AMIT202002CID&coId="+coId).then((res)=>{
    dispatch({type:"TODAY_QUESTION",paylod:res.data.liveresp});
  }).catch(()=>{
       dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}

export const getTodayContest = () => {
return async  (dispatch, getState) => {  	
  await CALL_API("post",base_url+"livegettodayscontest.json?clId=AMIT202002CID").then((res)=>{
 	  dispatch({type:"GET_TODAYCONTEST",paylod:res.data.liveresp});
  }).catch(()=>{
	     dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}



export const changeData = (data) => {
return async  (dispatch, getState) => {   
    const state= getState() ;
    var data=state.get('contest').todayContest;
    var nextdata=state.get('contest').nextdata;
    if(nextdata){
    

        dispatch({type:"SETCONTESTDATA",paylod:nextdata});
       if(nextdata.summaryWinners){
        dispatch({type:"SETSUMMWIN",paylod:nextdata.summaryWinners});
        }

        if(nextdata.jackpotWinners){
        dispatch({type:"SETJACK",paylod:nextdata.jackpotWinners});
        }


        if(nextdata.grandWinners){
        dispatch({type:"SETGRAND",paylod:nextdata.grandWinners});
        }

        
        
    }else{
        dispatch({type:"SETCONTESTDATA",paylod:data});
    }


}
}




export const EndContest = () => {
return async  (dispatch, getState) => {    
  const state= getState() ;
  // var data=state.get('contest').todayContest
  // console.log(state.get('contest').todayContest);
  var data=state.get('contest').todayContest
  var dataToShow=state.get('contest').dataToShow
  var coId=data.contest.coId;

  var url="liveendcontest.json";

  await CALL_API("post",base_url+url+"?clId=AMIT202002CID&coId="+coId).then((res)=>{
     dispatch({type:"END",paylod:res.data.liveresp});


  }).catch(()=>{
       dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}


export const TodaysloadNextURL = () => {
return async  (dispatch, getState) => {  	
	const state= getState() ;
  // var data=state.get('contest').todayContest
	// console.log(state.get('contest').todayContest);
  var data=state.get('contest').todayContest
	var dataToShow=state.get('contest').dataToShow
	var coId=data.contest.coId;



	var url=dataToShow.nxtApi;

  await CALL_API("post",base_url+url+"?clId=AMIT202002CID&coId="+coId).then((res)=>{

  if(res.data.liveresp.answerCount){
      dispatch({type:"answerCount",paylod:res.data.liveresp.answerCount});
  }

  if(dataToShow.btnText.includes("QUESTION")){
      dispatch({type:"answerCount",paylod:null});
  }


    if(res.data.liveresp.isProdConfig){
      dispatch({type:"isProd",paylod:true});
    }

 	  dispatch({type:"NEXTDATA",paylod:res.data.liveresp});
  }).catch(()=>{
	     dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}


export const ShopContestProduct = () => {
return async  (dispatch, getState) => {    
  const state= getState() ;
  // var data=state.get('contest').todayContest
  // console.log(state.get('contest').todayContest);
  var data=state.get('contest').todayContest
  var dataToShow=state.get('contest').dataToShow
  var coId=data.contest.coId;
  var url="shopgetcontestproductsets.json?coId="+coId+"&clId=AMIT202002CID";

  await CALL_API("post",base_url+url).then((res)=>{
     dispatch({type:"PRODSHOP",paylod:res.data.shopresp.products});
  }).catch(()=>{
       dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}




export const DisplayProd = () => {
return async  (dispatch, getState) => {    
  const state= getState() ;
  // var data=state.get('contest').todayContest
  // console.log(state.get('contest').todayContest);
  var data=state.get('contest').todayContest
  var dataToShow=state.get('contest').dataToShow
  var coId=data.contest.coId;

  var prodId=localStorage.prodId; 
 
  var url="shopdisplaycontestproducts.json?coId="+coId+"&clId=AMIT202002CID&merchId="+localStorage.merId+"&prodIds="+prodId;

  await CALL_API("post",base_url+url).then((res)=>{
     // dispatch({type:"PRODSHOP",paylod:res.data.shopresp.products});
      message.success(res.data.shopresp.msg);

  }).catch(()=>{
       dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}


export const HideProd = () => {
return async  (dispatch, getState) => {    
  const state= getState() ;
  // var data=state.get('contest').todayContest
  // console.log(state.get('contest').todayContest);
  var data=state.get('contest').todayContest
  var dataToShow=state.get('contest').dataToShow
  var coId=data.contest.coId;
  var prodId=localStorage.prodId; 
  var url="shophidecontestproducts.json?coId="+coId+"&clId=AMIT202002CID&merchId="+localStorage.merId+"&prodIds="+prodId;


  await CALL_API("post",base_url+url).then((res)=>{
     // dispatch({type:"PRODSHOP",paylod:res.data.shopresp.products});
      message.success(res.data.shopresp.msg);

  }).catch(()=>{
       dispatch({type:"ERROR",paylod:"Something Went Worng"});
  });
}
}

