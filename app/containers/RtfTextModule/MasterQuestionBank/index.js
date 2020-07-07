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
import Pager from 'enl-components/Pager/';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {getCat,getsubCat} from 'enl-redux/actions/common';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { bindActionCreators } from 'redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import {connect} from 'react-redux';
import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';
import moment from 'moment';
import { Snackbar } from '@material-ui/core';
import AppTable from 'enl-components/Table';
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';
import {message} from 'antd';


function formatter(row, cell, value, columnDef, dataContext) {
        return value;
}
  function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       <button class="del" onClick="window.delete(${row})">
          <img src="${delete_icon}" alt="" />
       </button>
       <button class="edit" onClick="window.edit(${row})">
       <img src="${edit}" alt="" />
       </button>
        
        </div>`;
    }
var head=[
{name:"Name",key:"mstqsnbnk",formatter: formatter,width:160},
{name:"Description",key:"mstqsnbnkdesc",formatter: formatter},
{name:"Updated By",key:"updBy",formatter: formatter},
{name:"Updated Date",key:"upDateTimeStr",formatter: formatter},
{name:"Created By",key:"creBy",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
];


let id = 0;
let datas = [];
class  QuestionBank extends React.Component  {
   state = {
    open: false,
    anstype:"REGULAR",
    qOrientn:"VERTICAL",
    scroll: 'paper',
    answer_selected:["C","D"],
    options:["C","D"],
    pgNo:1,
    fil:"",
    showTable:false
  };

   handleRadio= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };
  handleOption=()=>{
    const {answer_selected}=this.state
   
      var as=[];
      if(this.state.opc){
        as.push("C")
      }else{
        as.splice(as.indexOf("C"),1)
      }
      if(this.state.opd){
        as.push("D")
      }else{
        // as.splice(as.indexOf("D"),1)
      }
      this.setState({
        answer_selected:as
      },()=>{
        //console.log(this.state,this.state.answer_selected)
      });

    
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  componentWillUnmount(){
      $('.s_menu').remove();
  }
  
 handleErrorClose=()=>{
     this.setState({
         errorMsg:"",
         isError:false
       })
  }


  getSubCat=(val)=>{
    this.props.getsubCat(val);
   }

  addQuestion=()=>{
    const {name,desc}=this.state;
    if(!name || !desc){
      message.error("All fields are required!")
      this.setState({
        showError:true
      });
      return;
    }




    // var url="ottaddquebank.json?clId=AMIT202002CID&qtx="+qtx+"&opa="+opa+"&opb="+opb+"&opc="+opc+"&opd="+opd+"&cans="+cans+"&anstype="+anstype+"&ctyp="+ctyp+"&qOrientn="+qOrientn+"&sctyp="+sctyp
  var url="masterqbankadd.json?clId=AMIT202002CID&mstqsnbnk="+name+"&mstqsnbnkdesc="+desc;
   CALL_API("post",API_URL+url).then((res)=>{
    var result=res.data.commresp;
     if(res.data.commresp.sts===0){
          message.error(res.data.commresp.msg);
      
     }else{
          message.success("Question Added Successfully");
          this.getData();
          this.handleClose();
      }
    }).catch(()=>{
          message.error("Something Went Worng");
    })    
  }

  handleClose = () => {
    this.setState({ 
      open: false ,
    qtx:"",opa:"",opb:"",opc:"",opd:"",cans:"",anstype:"REGULAR",ctyp:"",sctyp:"",qOrientn:"VERTICAL",
    showError:false,
    isEdited:false
    });
  };




handleChangeOption=event=>{
   this.setState({
    [event.target.name]: event.target.value ,
   },()=>{
      setTimeout(()=>{

      this.handleOption();
      },500)
   });
}
  handleChange = event => {
   this.setState({
    [event.target.name]: event.target.value ,
   },()=>{
    if(event.target){      
    if([event.target.name]=="ctyp"){
      this.getSubCat(event.target.value);
    }
    }
    });
  };

   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  getData=()=>{
    this.getLisQuestion();

  }



deleteContest=async (id)=>{
   var cnf= await window.confirm("Are you sure?")
 if(!cnf){
   return
 }
 var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {mstqsnbnkid}=d;
   CALL_API("get",API_URL+"masterqbankdelete.json?clId=AMIT202002CID&qbId="+mstqsnbnkid).then((res)=>{
      //console.log(res);
      if(res.data.commresp.sts===0){
          message.error(res.data.commresp.msg);
     }
      if(res.data.commresp.sts==1){
          message.success(res.data.commresp.msg);
          this.getData();
      }
    });
   }

refresh=()=>{

}

editBank=()=>{
 var d=datas.filter((e,i)=>{
      return i==this.state.selectedIds;        
    })[0];



   const {mstqsnbnkid}=d;
   const {name,desc}=this.state;


   CALL_API("post",API_URL+"masterqbankedit.json?clId=AMIT202002CID&qbId="+mstqsnbnkid+"&mstqsnbnk="+name+"&mstqsnbnkdesc="+desc).then((res)=>{
       if(res.data.commresp.sts===0){
          message.error(res.data.commresp.msg);
     }else{
          message.success(res.data.commresp.msg);
       }
      if(res.data.commresp.sts==1){
        this.setState({
          isEdited:false
        });
          this.getData();
          this.handleClose();
      }
    });
}
editContent=(id)=>{
  var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {mstqsnbnk,mstqsnbnkdesc}=d;
 this.setState({
  selectedIds:id,
  isEdited:true,
  name:mstqsnbnk,
  desc:mstqsnbnkdesc
 });
      // this.getSubCat(ctyp);
 //console.log(this.state);
 this.handleOpen();
}
getLisQuestion=(loadingIndicator)=>{
    const {fil}=this.state
     this.setState({
      showTable:false
      });

CALL_API("post",API_URL+"masterqbanklist.json?clId=AMIT202002CID&sts=1&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
      // abc();
      if(res.data.commresp.sts===0){
          message.error("Something Went Worng!")
     }
    datas=res.data.commresp.mqblist;
    this.setState({
      isNext:this.state.pgNo<res.data.commresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.commresp.pagination.totalRows,
      totalPages:res.data.commresp.pagination.totalPages,
      pageNum:res.data.commresp.pagination.pageNum,
      showTable:true,
      datas:datas

    })
   
   if(loadingIndicator){
       loadingIndicator.remove();
   }

    // this.makeTable();
  }).catch(()=>{
          message.error("Something Went Worng!")
if(loadingIndicator){
       loadingIndicator.remove();
   }
  }); 
}

  async componentDidMount(){
    // this.getCat();
    await this.props.getCat()
    console.log("akfnnalfs",this.props.state.cat);
     
    this.getLisQuestion()

    this.refresh();
    
 }

 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.getLisQuestion();
  });

 }
 changeFil=(fil)=>{
  this.setState({
    fil
  },()=>{
        this.getData();  
  });
 }
 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.getLisQuestion()
  })
 }


 goLast=()=>{
 if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:this.state.totalPages
  },()=>{
    this.getLisQuestion()
  })  
 }
 goFirst=()=>{
 if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:1
  },()=>{
    this.getLisQuestion()
  })  
 }

  render(){

  const { classes } = this.props;
  const { open,category,checkedA,value, selectedValue,options,showError } = this.state;
  const trueBool = true;



  return (
    <Fragment >
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
      <Helmet>
          <title>RTF Customer Dashboard</title>
        </Helmet>

       <div><Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Question
          </Button> 
    </div>
  <div class="ques_wrap">   
  <Paper className={classes.root} elevation={5} >
       <AppTable 
    showTable={this.state.showTable}
    changeFil={this.changeFil}
    getData={this.getLisQuestion}
    data={this.state.datas}
    head={head}
    editContent={this.editContent}
    deleteContest={this.deleteContest}
    />
    
     <Pager
    isPrev={this.state.isPrev}
    goFirst={this.goFirst}
    isNext={this.state.isNext}
    prev={this.prev}
    next={this.next}
    goLast={this.goLast}
    totalPages={this.state.totalPages}
    pageNum={this.state.pageNum}
    totalRows={this.state.totalRows}
        />
        
       </Paper>

       </div>     

          

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
          <DialogTitle id="scroll-dialog-title"> Add Question</DialogTitle>
          }
          {
          this.state.isEdited &&
          <DialogTitle id="scroll-dialog-title"> Edit Question</DialogTitle>
          }
          <DialogContent >
          
          
          <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>

          <div style={{width:'100%',padding:10}}>
        

         


<div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple" name="name"  value={this.state.name} onChange={this.handleChange} />
              </FormControl>
            </div>
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Description</InputLabel>
                <Input id="name-simple" name="desc"  value={this.state.desc} onChange={this.handleChange} />
              
              </FormControl>
            </div>
              </div>
        





          </div>

       </DialogContent>
          <DialogActions>
         
            {
              !this.state.isEdited &&            <Button variant="contained"  onClick={this.addQuestion} color="primary" className={classes.button}>
              Save
            </Button>
          }

            {
              this.state.isEdited && <Button variant="contained"  onClick={this.editBank} color="primary" className={classes.button}>
              Update
            </Button>
            }
            
          </DialogActions>
        </Dialog>

    </Fragment>
  );
  }
}

QuestionBank.propTypes = {
  classes: PropTypes.object.isRequired,
};





const reducer = 'common';
const mapStateToProps = state => ({
  state: state.get(reducer),
  cat:state.get(reducer).cat,
  subcat:state.get(reducer).subcat,

});

const mapDispatchToProps = dispatch => ({
  getCat: bindActionCreators(getCat, dispatch),
  getsubCat: bindActionCreators(getsubCat, dispatch)
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionBank);

export default withStyles(styles)(LoginMapped);

