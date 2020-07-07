import {base_url,CALL_API} from './config';


export const getCat =()=>{
return async  (dispatch, getState) => {  
CALL_API("get",base_url+"ottgetallcategory.json?clId=AMIT202002CID&sts=TRUE&pNo=1").then((res)=>{
     if(res.data.ottresp.sts===0){
	     dispatch({type:"ERROR",paylod:res.data.ottresp.msg});    
     }else{
	     dispatch({type:"GET_CAT",paylod:res.data.ottresp.catlist});     	
     }
     }); 
 }
}
 
export const getsubCat =(val)=>{
return async  (dispatch, getState) => {  
CALL_API("get",base_url+"ottgetallSubCatForcategory.json?clId=AMIT202002CID&sts=TRUE&catty="+val).then((res)=>{
	if(res.data.ottresp.sts===0){
	     dispatch({type:"ERROR",paylod:res.data.ottresp.msg});    
     }else{
       var subcat=res.data.ottresp.sCatlist;
	     dispatch({type:"GET_SUBCAT",paylod:subcat});
     }
    });
 }
}
 