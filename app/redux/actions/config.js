import axios from  'axios';
var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}

//export const base_url="//pluginsadminapi.rewardthefan.com/";
export const base_url="//52.201.48.95:8085/adminapi/";
export const commonParams="&cau="+udata.userid+"&Cuid="+udata.useremail

export function CALL_API(method,url,data){
	var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{};
	url=url.replace("clId=AMIT202002CID","clId="+JSON.parse(localStorage.user_data).clId);
	 var params="&cau="+udata.userid+"&Cuid="+udata.useremail
	 

		if(data){
		return axios[method](url+params,data)
		}else{
		return axios[method](url+params)
		}
}

export const messageLables={
	validationMessage:(lable)=>{
		return `Invalid ${lable}`;
	},
	mandatory:"All fields marked with * are mandatory",
	required:"This field is required"
}