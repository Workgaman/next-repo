import React, { Fragment } from 'react';
import {Dialog,DialogTitle,DialogContent,FormControl,InputLabel,Input,DialogActions,Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import {message} from 'antd'
import {base_url as API_URL,messageLables as LABLES,CALL_API} from 'enl-redux/actions/config';

    var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}

export default class  PrizePopup extends React.Component  {
	state={
	scroll: 'paper'
	}
	handleClose=()=>{
		this.props.closePrize()
	}

handleChange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
}
  componentDidMount(){
// //console.log(this.props.coId);
    CALL_API("post",API_URL+"snwgetallcontestrewards.json?clId=AMIT202002CID&coId="+this.props.coId+"&cau="+udata.userid).then((res)=>{
      //console.log(res);
      window.msg=message.success;
    
    res.data.snwresp.rewards.forEach((e)=>{
      this.setState({
        [e.type]:e.rwdVal
      })      
    })

      this.setState({
        data:res.data.snwresp.rewards
      })

    });
  }

  savePrize=()=>{
    var url="snwupdatecontestrewards.json?clId=AMIT202002CID&coId="+this.props.coId+"&cau="+udata.userid;
    this.state.data.forEach((e)=>{
      var val=this.state[e.type]
      url+="&"+e.type+"="+val
    });
    //console.log(url);
    // return;

    CALL_API("post",API_URL+url).then((res)=>{
      //console.log(res);
      if(res.data.snwresp.sts==1){
        this.handleClose()
          message.success(res.data.snwresp.msg);
      }else{
          message.error(res.data.snwresp.msg);
      }
    }).catch((e)=>{
          message.error("Something Went Worng !");

    });

  }
	render(){
		const {classes}=this.props;
		return (  <Dialog
          open={this.props.prizeOpen}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
          <DialogTitle id="scroll-dialog-title">Configure Prize</DialogTitle>
          <DialogContent>
          <div style={{width:'100%',padding:10}}>
            <div className="flex_div gapTwo">
          
            {this.state.data && this.state.data.map((e)=>{
           return (<div style={{paddingLeft:10,paddingRight:10,width:'50%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">{e.type} </InputLabel>
                <Input id="name-simple" name={e.type} value={this.state[e.type]} onChange={this.handleChange} />
              </FormControl>
              </div>)
            })}
          

              </div>



              </div>
</DialogContent>
          <DialogActions>
             <Button variant="contained"  onClick={this.savePrize} color="primary" className={classes.button}>
              Save
            </Button>
          </DialogActions>
        </Dialog>)
	}
}