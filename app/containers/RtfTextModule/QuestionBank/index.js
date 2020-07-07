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
{name:"Question Text",key:"qtx",formatter: formatter,width:160},
{name:"A",key:"opa",formatter: formatter},
{name:"B",key:"opb",formatter: formatter},
{name:"C",key:"opc",formatter: formatter},
{name:"D",key:"opd",formatter: formatter},
{name:"Category",key:"ctyp",formatter: formatter},
{name:"Sub Category",key:"sctyp",formatter: formatter},
{name:"Answer",key:"cans",formatter: formatter},
{name:"Answer Type",key:"anstype",formatter: formatter},
{name:"Orientation",key:"qOrientn",formatter: formatter},
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
    const {qtx,opa,opb,opc,opd,cans,anstype,ctyp,sctyp,qOrientn}=this.state;
    if(!qtx || !opa || !opb  || !anstype ||!ctyp || !sctyp){
      message.error("All fields are required!")
      this.setState({
        showError:true
      });
      return;
    }

    if(qOrientn=="vertical" && !cans){
      message.error("All fields are required!")
      this.setState({
        showError:true
      });
      return;
    }


    var url="ottaddquebank.json?clId=AMIT202002CID&qtx="+qtx+"&opa="+opa+"&opb="+opb+"&opc="+opc+"&opd="+opd+"&cans="+cans+"&anstype="+anstype+"&ctyp="+ctyp+"&qOrientn="+qOrientn+"&sctyp="+sctyp
   
   CALL_API("post",API_URL+url).then((res)=>{
    var result=res.data.ottresp;
     if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
      
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
   const {qsnbnkid}=d;
   CALL_API("get",API_URL+"ottdeletequebank.json?clId=AMIT202002CID&qbId="+qsnbnkid).then((res)=>{
      //console.log(res);
      if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
     }
      if(res.data.ottresp.sts==1){
          message.success(res.data.ottresp.msg);
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
   const {qsnbnkid}=d;
   const {qtx,opa,opb,opc,opd,cans,anstype,ctyp,qOrientn,sctyp}=this.state;
    if(!qtx || !opa || !opb  || !anstype ||!ctyp || !sctyp){
      message.error("All fields are required!")
      this.setState({
        showError:true
      });
      return;
    }
    if(qOrientn=="vertical" && !cans){
      message.error("All fields are required!")
      this.setState({
        showError:true
      });
      return;
    }
   CALL_API("post",API_URL+"otteditquebank.json?clId=AMIT202002CID&qbId="+qsnbnkid+"&qtx="+qtx+"&opa="+opa+"&opb="+opb+"&opc="+opc+"&opd="+opd+"&cans="+cans+"&anstype="+anstype+"&ctyp="+ctyp+"&qOrientn="+qOrientn+"&sctyp="+sctyp).then((res)=>{
       if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
     }else{
          message.success(res.data.ottresp.msg);
       }
      if(res.data.ottresp.sts==1){
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
   const {qsnbnkid,qtx,opa,opb,opc,opd,cans,anstype,ctyp,qOrientn,sctyp}=d;
 this.setState({
  selectedIds:id,
  isEdited:true,
  qsnbnkid,qtx,opa,opb,opc,opd,cans,anstype,ctyp,qOrientn,sctyp
 });
      this.getSubCat(ctyp);
 //console.log(this.state);
 this.handleOpen();
}
getLisQuestion=(loadingIndicator)=>{
    const {fil}=this.state
     this.setState({
      showTable:false
      });

CALL_API("post",API_URL+"ottgetallquebank.json?clId=AMIT202002CID&sts=TRUE&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
      // abc();
      if(res.data.ottresp.sts===0){
          message.error("Something Went Worng!")
     }
    datas=res.data.ottresp.qbList;
    this.setState({
      isNext:this.state.pgNo<res.data.ottresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.ottresp.pagination.totalRows,
      totalPages:res.data.ottresp.pagination.totalPages,
      pageNum:res.data.ottresp.pagination.pageNum,
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
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            

            <Select
              value={this.state.ctyp}
              onChange={this.handleChange}
              inputProps={{
                name: 'ctyp',
                id: 'ctyp',
              }}
              error={!this.state.ctyp && showError}
              helperText="this field is required"
            >
            
              {this.props.state.cat && this.props.state.cat.map((e)=>{
              return <MenuItem value={e.cattype}>{e.cattype}</MenuItem>                
              })}
            </Select>
          </FormControl>
            </div>
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
          <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Subcategory</InputLabel>
            <Select
              value={this.state.sctyp}
              onChange={this.handleChange}
              inputProps={{
                name: 'sctyp',
                id: 'sctyp',
              }}
               error={!this.state.sctyp && showError}
              helperText="this field is required"
            >
             
           {this.props.subcat && this.props.subcat.map((e)=>{
                return <MenuItem value={e.subcattype}>{e.subcattype}</MenuItem>;              
            })}

            </Select>
          </FormControl>
            </div>
            </div>


            <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Question Text</InputLabel>
                <Input id="name-simple"
               error={!this.state.qtx && showError}
              helperText="this field is required"
               name="qtx" value={this.state.qtx} onChange={this.handleChange} />
              </FormControl>
              </div>



            <div className="flex_div " style={{paddingLeft:10,marginTop:10,paddingRight:10}}>
            <div className="flex_div" style={{flex:1,alignItems:"center"}}>
            <h4 style={{flex:1,fontSize:14,fontWeight:"bold",margin:0}}>Answer Type</h4>
             <RadioGroup style={{display:"flex",flexDirection:"row"}} aria-label="gender" name="anstype" value={this.state.anstype} onChange={this.handleRadio}>    
               <FormControlLabel value="FEEDBACK" control={<Radio />} label="Feed Back" />
               <FormControlLabel value="REGULAR" control={<Radio checked={this.state.anstype=="REGULAR"} />} label="Regular" />
               </RadioGroup>
            </div>
            <div className="flex_div" style={{flex:1,alignItems:"center"}}>
                <h4 style={{flex:1,fontSize:14,fontWeight:"bold",margin:0,marginLeft:10}}>Orientation</h4>
             <RadioGroup style={{display:"flex",flexDirection:"row"}} aria-label="gender" name="qOrientn" value={this.state.qOrientn} onChange={this.handleRadio}>    
               <FormControlLabel value="HORIZONTAL" control={<Radio />} label="Horizontal" />
               <FormControlLabel value="VERTICAL" control={<Radio checked={this.state.qOrientn=="VERTICAL"}/>} label="Vertical" />
               </RadioGroup>
            </div>
            </div>


            <div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Option A</InputLabel>
                <Input id="name-simple" 
                  error={!this.state.opa && showError}
                  helperText="this field is required"
                   name="opa" value={this.state.opa}  onChange={this.handleChangeOption} />
              </FormControl>
            </div>
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Option B</InputLabel>
                <Input id="name-simple"
                  error={!this.state.opb && showError}
                  helperText="this field is required"
                  name="opb" value={this.state.opb} onChange={this.handleChangeOption} />
              </FormControl>
            </div>
              </div>

<div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Option C</InputLabel>
                <Input id="name-simple" name="opc" disabled={!this.state.opb} value={this.state.opc} onChange={this.handleChangeOption} />
              </FormControl>
            </div>
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Option D</InputLabel>
                <Input id="name-simple" name="opd" disabled={!this.state.opc} value={this.state.opd} onChange={this.handleChangeOption} />
              </FormControl>
            </div>
              </div>
        


    

         <div style={{paddingLeft:10,paddingRight:10,flex:1,opacity: this.state.anstype =="REGULAR"?1:0,visiblity: this.state.anstype =="REGULAR"?'visible':'hidden'}}>
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Answer</InputLabel>
            <Select
              value={this.state.cans}
              disabled={this.state.type =="REGULAR"}
              onChange={this.handleChange}
              inputProps={{
                name: 'cans',
                id: 'cans',
                disabled:this.state.anstype !=="REGULAR"
              }}
                              error={!this.state.cans && showError}
                  helperText="this field is required"
            >

              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              {this.state.answer_selected.map((e,i)=>{
                 return <MenuItem value={e}>{e}</MenuItem>
             })}
             
            

               </Select>
          </FormControl>
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

