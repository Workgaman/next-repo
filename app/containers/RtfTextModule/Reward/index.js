import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Helmet } from 'react-helmet';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


import { Snackbar } from '@material-ui/core';



import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';

import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';

import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';

import moment from 'moment';
import { CloudUploadOutlined} from '@ant-design/icons';
import {message} from 'antd'

import AppTable from 'enl-components/Table';



  function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
    function stsformatter(row, cell, value, columnDef, dataContext){
    return value?"Active":"Delete"
}
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
          <button class="del" onClick="window.delete(${row})"><img src="${delete_icon}" alt="" /></button>
       <button class="edit" onClick="window.edit(${row})"><img src="${edit}" alt="" /></button>
        </div>`;
    }
    


function imageformatter(row, cell, value, columnDef, dataContext){
    var img;
    img= `<img class="myIcon_new"   src="${value}" alt="" />`;
    return img;
}


var head=[
{name:"Name",key:"rwdtype",formatter: formatter},
{name:"desc",key:"rwddesc",formatter: formatter},
{name:"Reward Unit",key:"rwdunimesr",formatter: formatter},
{name:"Icon",key:"rwdimgurl",formatter: imageformatter},
{name:"Status",key:"isactive",formatter: stsformatter},
{name:"Created By",key:"creby",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Updated By",key:"updby",formatter: formatter},
{name:"Updated Date",key:"upDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
]




    var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}


  var columnFilters = {};
  var p=[];

let id = 0;

let datas = [];


class  Reward extends React.Component  {
   state = {
    open: false,
    type:"regular",
    orientation:"vertical",
    scroll: 'paper',
    tabvalue:0,
    list:[],
      rwdtype:"",
      rwdunimesr:"",
      rwddesc:"",
      fil:"",
      pgNo:1,
      showTable:false
  };

   handleRadio= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };
 
 changeFil=(fil)=>{
  this.setState({
    fil
  },()=>{
        this.getReward();  
  });
 }
  getReward=(loadingIndicator)=>{

   this.setState({
      showTable:false
      });


      var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}
    const {fil}=this.state
   CALL_API("post",API_URL+"ottgetallrewards.json?clId="+udata.clId+"&sts=TRUE&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
       datas=res.data.ottresp.rewardList;
          this.setState({
      isNext:this.state.pgNo<res.data.ottresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.ottresp.pagination.totalRows,
      totalPages:res.data.ottresp.pagination.totalPages,
      pageNum:res.data.ottresp.pagination.pageNum,
      datas:datas,
      showTable:true
 })
   
       this.setState({
         list:res.data.ottresp.rewardList
       });

      if(loadingIndicator){
       loadingIndicator.remove();
       }
       
       // this.loadRward()

    }).catch((err)=>{
    if(loadingIndicator){
       loadingIndicator.remove();
   }
    })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false,
     rwdtype:"",rwddesc:"",rwdunimesr:"",isEdited:false,baseImage:null
     });

  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount(){
      this.getReward()
    columnFilters={};
  }
    componentWillUnmount(){
      $('.s_menu').remove();
  }

 

editReward=(id)=>{
 var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {rwdtype,rwddesc,rwdunimesr,rwdimgurl}=d;

   this.setState({
     rwdtype,rwddesc,rwdunimesr,isEdited:true,baseImage:rwdimgurl
   })
   //console.log(this.state);
   this.handleOpen()
   $('body,html').animate({
    scrollTop:0
  });


}

deleteReward=async (id)=>{
 var cnf= await window.confirm("Are you sure?")
 if(!cnf){
   return
 }
 var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {rwdtype}=d;

CALL_API("get",API_URL+"ottdeleterewards.json?clId="+udata.clId+"&rwdtype="+rwdtype).then((res)=>{
      if(res.data.ottresp.sts==1){
          message.error(res.data.ottresp.msg);
       
        this.getReward()
      }
  });

}
saveReward=()=>{
const  {rwdtype,rwddesc,rwdunimesr,file}=this.state;
var data=new FormData();
if(file){
  data.append("filename",file);
}
var sts=file?"TRUE":false;
  CALL_API("post",API_URL+"otteditdrewards.json?clId="+udata.clId+"&rwdtype="+rwdtype+"&rwddesc="+rwddesc+"&rwdunimesr="+rwdunimesr+"&isimgupd="+sts,data).then((res)=>{
if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
        
     }else{
          message.success("Reward Updated Successfully");

        this.setState({
       
          rwdtype:"",
          rwdunimesr:"",
          rwddesc:"",
          isEdited:false,
          file:null,
          baseImage:null
        });
        this.getReward();
        this.handleClose()
      }
    });
}

addReward=()=>{
const  {rwdtype,rwddesc,rwdunimesr,file}=this.state;
var data=new FormData();
  data.append("filename",file);
  CALL_API("post",API_URL+"ottaddrewards.json?clId="+udata.clId+"&rwdtype="+rwdtype+"&rwddesc="+rwddesc+"&rwdunimesr="+rwdunimesr+"&cau="+udata.userid,data).then((res)=>{
     if(res.data.ottresp.sts===0){
      

          message.error(res.data.ottresp.msg);
        

     }else{
                 message.success("Reward Added Successfully");
        this.setState({
          rwdtype:"",
          rwdunimesr:"",
          rwddesc:"",
          baseImage:null,
          file:null
        });
        this.getReward();
        this.handleClose()
      }
  }).catch(()=>{
          message.error("Something Went Worng");
  })
}


 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.getReward();
  });

 }
 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.getReward()
  })
 }



 goLast=()=>{
 if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:this.state.totalPages
  },()=>{
    this.getReward()
  })  
 }
 goFirst=()=>{
 if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:1
  },()=>{
    this.getReward()
  })  
 }





   getBase64=()=> {
    var file = document.querySelector('input[type="file"]').files[0];
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
 
 onUploadChange=()=>{
    var file = document.querySelector('input[type="file"]').files[0];
  //console.log(file["type"],file["type"].includes("image"));
  if(!file["type"].includes("image")){
        $('input[type="file"]').val();
      message.error("Only images are allowed, Please Try Again!");
    return;
  }
      this.getBase64().then((data)=>{
        // //console.log(data);
        this.setState({
          file:file,
          baseImage:data
        })
      })
 }





  
  render(){

  const { classes } = this.props;
  const { open,category,checkedA,value, selectedValue,tabvalue } = this.state;
  const trueBool = true;
  return (
    <Fragment >
      <Helmet>
          <title>RTF Customer Dashboard</title>
        </Helmet>


<Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={this.state.isError}
          onClose={this.handleErrorClose}
        autoHideDuration={3000}
        message={this.state.errorMsg}
      />
         <Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Reward
          </Button> 
        <Paper className={classes.root} elevation={5}>
          {tabvalue===0 && 
             <Dialog
          open={open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
           
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
           {
              !this.state.isEdited &&
          <DialogTitle id="scroll-dialog-title"> Add Reward</DialogTitle>
          }
          {
          this.state.isEdited &&
          <DialogTitle id="scroll-dialog-title"> Edit Reward</DialogTitle>
          }
          <DialogContent >

            <div class="form">
              <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Reward Name</InputLabel>
                <Input id="name-simple" disabled={this.state.isEdited} name="rwdtype" value={this.state.rwdtype} onChange={this.handleChange} />
              </FormControl>
            
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Reward Units</InputLabel>
            <Select
              value={this.state.rwdunimesr}
              onChange={this.handleChange}
               disabled={this.state.isEdited}
              inputProps={{
                name: 'rwdunimesr',
                id: 'rwdunimesr',
             }}
            >

             <MenuItem value="CASH">CASH</MenuItem>
             <MenuItem value="NUMBERS">NUMBERS</MenuItem>
            </Select>
          </FormControl>
                <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Description</InputLabel>
                <Input id="name-simple" multiline="true" name="rwddesc" value={this.state.rwddesc} onChange={this.handleChange} />
              </FormControl>

              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <div class="upload_file">
                <input type="file" accept="image/*" onChange={this.onUploadChange} />
                <Button variant="contained"  onClick={this.addReward} color="primary" className={classes.button}>
                <CloudUploadOutlined style={{marginRight:10}}/> 
                {!this.state.isEdited?"Upload Icon":"Change Icon"}
                </Button>                
    {this.state.baseImage && <img className="myIcon_new_s"   src={this.state.baseImage} alt="" />}
                </div>
              </FormControl>

              </div>
              </div>


                </DialogContent>
          <DialogActions>
         
             {!this.state.isEdited && 
            <Button variant="contained"  onClick={this.addReward} color="primary" className={classes.button}>
              Add
            </Button>
    }
    {this.state.isEdited && 
            <Button variant="contained"  onClick={this.saveReward} color="primary" className={classes.button}>
              Update
            </Button>
    }
            
          </DialogActions>
        </Dialog>




          }


 
            </Paper>

        {tabvalue === 0 && 
        <div class="ques_wrap">   
        <Paper className={classes.root} elevation={5} >

         <AppTable 
    showTable={this.state.showTable}
    changeFil={this.changeFil}
    getData={this.getReward}
    data={this.state.datas}
    head={head}
    editContent={this.editReward}
    deleteContest={this.deleteReward}
    />
       
         
           <div id="pager" style={{width:100,height:20}}> 
        <div className="slick-pager">
        <span className="slick-pager-nav">
        
        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={this.goFirst}>
        <span className={this.state.isPrev?"ui-icon ui-icon-seek-first":"ui-icon ui-icon-seek-first ui-state-disabled"} ></span>
        </span>

        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={this.prev}>
        <span className={this.state.isPrev?"ui-icon ui-icon-seek-prev":"ui-icon ui-icon-seek-prev ui-state-disabled"} ></span>
        </span>
        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={this.next}>
        <span className={this.state.isNext?"ui-icon ui-icon-seek-next":"ui-icon ui-icon-seek-next ui-state-disabled"}></span>
        </span>
  

        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={this.goLast}>
        <span className={this.state.isNext?"ui-icon ui-icon-seek-end":"ui-icon ui-icon-seek-end ui-state-disabled"} ></span>
        </span>

        <span className="slick-pager-status">Showing Page {this.state.pageNum} of {this.state.totalPages}, Total Rows {this.state.totalRows}</span>
        </span>
        </div>
        </div>

       </Paper>
       </div>}


          

    </Fragment>
  );
  }
}

Reward.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reward);
