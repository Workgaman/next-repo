import axios from 'axios';
export const GET_QUESTION = 'GET_QUESTION';

export const getQuestion = (id,data) => {
return async  (dispatch, getState) => {   
const users = await axios({
  method: 'post',
  url: base_url+"ottgq.json?cuId=cust12345&clientId="+data.clId+"&playId="+data.playerId+"&coId="+data.coId+"&qslno="+id,
})
  .then(function (response) {
        if(response.data.ottresp.sts==1){
         dispatch({type:GET_QUESTION,paylod:response.data});
        }else{
         dispatch({type:GET_QUESTION,paylod:response.data});
         dispatch({type:ERROR,paylod:"error"});
        }
  }).catch(error => {
         dispatch({type:ERROR,paylod:"error"});
  });
}
}