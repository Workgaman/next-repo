import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Helmet } from 'react-helmet';
import { MaterialDropZone } from 'enl-components';
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
import { Snackbar } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
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
import ColorPicker from 'material-ui-color-picker'
import moment from 'moment';
import Addquestion from './addquestion';
import Addproduct from './addproduct';
import PrizePopup from './prizePopup';
import ThemePopup from './themePopup';
import { bindActionCreators } from 'redux';
import {message} from 'antd'
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';
import { getTheme } from 'enl-redux/actions/contest';
import {connect} from 'react-redux'
import Pager from 'enl-components/Pager/';
import AppTable from 'enl-components/Table';
import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';

var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}

var datas = [];
class  Contest extends React.Component  {
   state = {
    open: false,
    qMode:"RANDOM",
    type:"REGULAR",
      qType:"REGULAR",
    orientation:"vertical",
   isSummSplit:"false",
   isLottery:"false",

    selectedDate:new Date(),
    isEdit:false,
        scroll: 'paper',
    themeColor:"000",
    themeImage:null,
    addquestion:false,
        prizeOpen:false,
        themes:[],
        popOpen:false,
        pgNo:1,
        stDate:new Date(),
        enDate:new Date(),
        elmType:false,
        subCat:"",
        isElimination:false,

         cat:"",
      subCat:"",
      qType:"",
      elmType:"",
      rwdType:"",
      rwdVal:"",
      qSize:"",
      dSeq:"",
         extName:"",
     stHour:"",
   stMinutes:"00",
   cat:"",
   subCat:"",
   coType:"",
   qType:"",
   elmType:"",
   sumRwdType:"",
   sumRwdVal:"",
   partRwdType:"",
   partRwdVal:"",
   queRwdType:"",
   winRwdType:"",
   winRwdVal:"",
   winCount:"",
        hour:[
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
       ],
        min:["00","15","30","45"],
  };

  handlePrizeOpen=()=>{
    if(!this.state.sortedSelectedRows){
          message.error("Select Contest First To Configure Prize");
      return;
    }
    this.setState({
      prizeOpen:true
    });
  }
  closePrize=()=>{
    this.setState({
      prizeOpen:false,
    });  
  }

  showSnackbar=(msg)=>{
    message.success(msg);
  }

  handleEndDateChange = date => {
    this.setState({
      enDate:moment(date).format("MM/DD/YYYY")
    })
  };
   handleDateChange = date => {
    this.setState({
      stDate:moment(date).format("MM/DD/YYYY")
    })
  };

  closePop=()=>{
    this.setState({
      popOpen:false
    })
  }
  openThemePop=()=>{
    this.setState({
      popOpen:true
    })
  }


   handleRadio= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };

    componentWillUnmount(){
      $('.s_menu').remove();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
       open: false,
      isEdit:false,
      name:"",
      stDate:new Date(),
      enDate:new Date(),
      cat:"",
      subCat:"",
      qType:"",
      elmType:"",
      rwdType:"",
      rwdVal:"",
      qSize:"",
      dSeq:"",
       extName:"",
     stHour:"",
   stMinutes:"00",
   cat:"",
   subCat:"",
   qType:"",
   elmType:"",
   isSummSplit:"false",
   sumRwdType:"",
   sumRwdVal:"",
   partRwdType:"",
   partRwdVal:"",
   queRwdType:"",
   isLottery:"false",
   winRwdType:"",
   winRwdVal:"",
   winCount:"",

      themeImage:null,
      themeColor:"000",
      thmId:null,
      showError:false,
      elmType:false,
        qType:"REGULAR",
        subCat:""
   });
  };

  handleChangeSelect=event=>{

    this.setState({
      [event.target.name]:event.target.value
    })
  
  }

  handleChange = (event,min) => {
    if(!isNaN(event.target.value) && event.target.value<0){
      message.error("Number Should Not be Negative");
      this.setState({
         [event.target.name]:""   
      })
      return;
    }

    if(event.target.type=="phone"){
      var nonNumReg = /[^0-9]/g;
      this.setState({
        [event.target.name]: event.target.value.replace(nonNumReg, '')
      })
      return;
    }


    if(event.target.type=="tel"){

      var nonNumReg = /[^0-9]/g;
      console.log(event.target);
      if(min=="0"){

      }else{

      if(Number(event.target.value)<=0){
      this.setState({
        [event.target.name]:""
      })  
      return;
      }
      }

      this.setState({
        [event.target.name]: event.target.value.replace(nonNumReg, '')
      })
      return;
    }

    this.setState({[event.target.name]: event.target.value },()=>{
    if(event.target){      
    if([event.target.name]=="cat"){
      this.getSubCat(event.target.value);
    }
    }
    });
  };

  
deleteContest= async (id)=>{
 var cnf= await window.confirm("Are you sure?")
 if(!cnf){
   return
 }
 var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {coId}=d;
   var __this=this;
CALL_API("get",API_URL+"livedeletecontests.json?clId=AMIT202002CID&coId="+coId).then((res)=>{
      //console.log(res);
      if(res.data.liveresp.sts==1){
          message.success(res.data.liveresp.msg);
       

    __this.getContest()



      }else{
          message.error(res.data.liveresp.msg);

      }
    }).catch(()=>{
          message.error("Something Went Worng !");

    });
   }
  editContent=(id)=>{

    var ds=datas.filter((e,i)=>{
      return i==id;        
    })[0];




CALL_API("get",API_URL+"liveeditcontests.json?clId=AMIT202002CID&coId="+ds.coId).then((res)=>{
  console.log(res)
  
  var d=res.data.liveresp.contest;

   const {    
    name,
   extName,
   stDate,
   stDateStr,
     stHour,
   stMinutes,
   cat,
   subCat,
   coType,
   ansType,
   elmType,
   qSize,
   seqNo,
   thmId,
   cau,
   isSplitSummary,
   isElimination,
   sumRwdType,
   sumRwdVal,
   partiRwdVal,
   partiRwdType,
   queRwdType,
   isLotEnbl,
   winRwdType,
   coId,
   winRwdVal,
   isPwd,
   conPwd,
   winnerCount}=d;
   // console.log(stMinutes);

// alert(d)
console.log(d);


if(ds.status==="LIVE"){
      message.error("Contest is LIVE, can not edit the contest")
  return;
}


    this.setState({
        name,stDate:moment(stDateStr).format("MM/DD/YYYY"),
         extName,
     stHour,
   stMinutes:stMinutes!=0?stMinutes:"00",
   cat,
   subCat:subCat?subCat:"",
   coType,
   qType:ansType,
   elmType:isElimination?"true":"false",
   isPwd:isPwd?"true":"false",
   qSize,
   conPwd,
   dSeq:seqNo,
   thmId,
   cau,
   isSummSplit:isSplitSummary?"true":"false",
   sumRwdType,
   sumRwdVal,
   partRwdType:partiRwdType,
   partRwdVal:partiRwdVal,
   queRwdType:queRwdType?queRwdType:"",
   isLottery:isLotEnbl?"true":"false",
   winRwdType,
   coId,
   winRwdVal,
   winCount:winnerCount,
        isEdit:true
    });

   this.getSubCat(cat);

    // console.log(d);
    this.handleOpen();
});
  
  }

  editContest=()=>{
  const {
      name,
   extName,
   stDate,
     stHour,
   stMinutes,
   cat,
   subCat,
   coType,
   qType,
   elmType,
   qSize,
   dSeq,
   thmId,
   cau,
   isSummSplit,
   sumRwdType,
   sumRwdVal,
   partRwdType,
   partRwdVal,
   queRwdType,
   isLottery,
   winRwdType,
   winRwdVal,
   coId,
   winCount,
   isPwd,
   conPwd
 }=this.state;

 

   




    if(!name || !stDate  || !cat   || !qType    || !dSeq){
      message.error("All fields marked with * are mandatory")
      this.setState({
        showError:true
      });
      return;
    }
    if(!thmId){
     message.error("Theme is mandatory")
      this.setState({
        showError:true
      });
      return;
    }

    if(isPwd=="true" && !conPwd){
     message.error("All fields marked with * are mandatory")
      this.setState({
        showError:true
      });
      return;
    }


    if(!sumRwdType){
     message.error("Summary Reward Type is mandatory")
        this.setState({
        showError:true
      });
      return;
    }



    if(sumRwdVal===""){
     message.error("Summary Reward Value is mandatory")
        this.setState({
        showError:true
      });
      return;
    }




var valRwd=partRwdType?partRwdVal:"";
    var elm=qType=="REGULAR"?elmType:"false";
    var subCats=subCat?subCat:"";

    var partRwd=partRwdType?partRwdType:"";

 var url="liveupdatecontests.json?clId=AMIT202002CID&coId="+coId+"&name="+encodeURIComponent(name)+"&extName="+extName+"&stDate="+moment(new Date(stDate)).format("MM/DD/YYYY")+"&stHour="+stHour+"&stMinutes="+stMinutes+"&cat="+cat+"&subCat="+subCats+"&coType="+coType+"&qType="+qType+"&elmType="+elm+"&qSize="+qSize+"&dSeq="+dSeq+"&thmId="+thmId+"&isSummSplit="+isSummSplit+"&sumRwdType="+sumRwdType+"&sumRwdVal="+sumRwdVal+"&partRwdType="+partRwd+"&partRwdVal="+valRwd+"&queRwdType="+queRwdType+"&isLottery="+isLottery+"&winCount="+winCount+"&isPwd="+isPwd;
 
 if(isPwd){
  url+="&conPwd="+encodeURIComponent(conPwd);
 }

  if(isLottery!="false"){
  url+="&winRwdType="+winRwdType+"&winRwdVal="+winRwdVal+"&winCount="+winCount;
  }    

   

   CALL_API("post",API_URL+url).then((res)=>{
     var result=res.data.liveresp;
     if(res.data.liveresp.sts===0){

       // this.setState({
       //   errorMsg:res.data.ottresp.msg,
       //   isError:true
       // })
     }else{
       // this.setState({
       //   errorMsg:res.data.ottresp.msg,
       //   isError:true
       // }); 
     }

    
    this.getContest()

   
 if(res.data.liveresp.sts==1){
        this.handleClose()
          message.success(res.data.liveresp.msg);
      }else{
          message.error(res.data.liveresp.msg);
      }
   }).catch((e)=>{
          message.error("Something Went Worng !");
   });

   

   // this.handleClose();
  }


  addContest=()=>{
    const {
       name,
   extName,
   stDate,
     stHour,
   stMinutes,
   cat,
   subCat,
   coType,
   qType,
   elmType,
   qSize,
   dSeq,
   thmId,
   cau,
   isSummSplit,
   sumRwdType,
   sumRwdVal,
   partRwdType,
   partRwdVal,
   queRwdType,
   isLottery,
   winRwdType,
   winRwdVal,
   winCount,
   isPwd,
   conPwd
 }=this.state;
    // //console.log("THEME",this.state.color);
   
   this.setState({
        qMode:"RANDOM",
    type:"REGULAR",
      qType:"REGULAR",
    orientation:"vertical",
   isSummSplit:"false",
   isLottery:"false",
   })




    if(!name || !stDate  || !cat   || !qType    || !dSeq){
      message.error("All fields marked with * are mandatory")
      this.setState({
        showError:true
      });
      return;
    }
    if(!thmId){
     message.error("Theme is mandatory")
      this.setState({
        showError:true
      });
      return;
    }


if(isPwd=="true" && !conPwd){
     message.error("All fields marked with * are mandatory")
      this.setState({
        showError:true
      });
      return;
    }

    if(!sumRwdType){
     message.error("Summary Reward Type is mandatory")
        this.setState({
        showError:true
      });
      return;
    }

    if(sumRwdVal===""){
     message.error("Summary Reward Value is mandatory")
        this.setState({
        showError:true
      });
      return;
    }




var valRwd=partRwdType?partRwdVal:"";
    var elm=qType=="REGULAR"?elmType:"false";
    var partRwd=partRwdType?partRwdType:"";
    var subCats=subCat?subCat:"";

var url="liveaddcontests.json?clId=AMIT202002CID&name="+encodeURIComponent(name)+"&extName="+extName+"&stDate="+moment(new Date(stDate)).format("MM/DD/YYYY")+"&stHour="+stHour+"&stMinutes="+stMinutes+"&cat="+cat+"&subCat="+subCats+"&coType="+coType+"&qType="+qType+"&elmType="+elm+"&qSize="+qSize+"&dSeq="+dSeq+"&thmId="+thmId+"&isSummSplit="+isSummSplit+"&partRwdType="+partRwd+"&partRwdVal="+valRwd+"&queRwdType="+queRwdType+"&isLottery="+isLottery+"&isPwd="+isPwd;

if(isPwd){
  url+="&conPwd="+encodeURIComponent(conPwd);
 }


if(isLottery!="false"){
  url+="&winRwdType="+winRwdType+"&winRwdVal="+winRwdVal+"&winCount="+winCount;
}    

  url+="&sumRwdType="+sumRwdType+"&sumRwdVal="+sumRwdVal

// if(isSummSplit!="false"){
// }


   CALL_API("post",API_URL+url).then((res)=>{
     //console.log(res);
      this.setState({
          sortedSelectedRows:null
       })

     var result=res.data.liveresp;
     if(res.data.liveresp.sts===0){
          message.error(res.data.liveresp.msg);
       
     }else{
          message.success("Contest Added Successful");
     this.handleClose();
    this.getContest()
       this.setState({
          sortedSelectedRows:null
       })

     }
   });
  }


   copyAbleTable=()=>{
     var ds=[];
var text=[];

$(document).click(()=>{
    $('.s_menu').remove();
})

document.oncontextmenu = function (e) {
    e.preventDefault();
return false;
}
$('.grid-canvas .slick-cell').mousedown(function(event) {
    event.preventDefault();
    //console.log(event);
    switch (event.which) {
        case 3:
        text=[];
            // getData($(this));
            makeMenu(event.pageY,event.pageX,$(this));
            break;
        default:
    }
           $('.slick-row.active').removeClass('active');
      $(this).parent().addClass('active');
return false;
});

function makeMenu(posY,posX,_this){
  window.selected=_this;
  var temp=`<div class="s_menu" style="top:${posY}px;left:${posX}px">
    <ul>
      <li onclick="getCell(selected)">Copy Cell</li>
      <li onclick="getRow(selected)">Copy Row</li>
      <li onclick="getColumn(selected)">Copy Column</li>
    </ul>
  </div>`;
    $('.slick-row.active').removeClass('active');
  window.selected.parent().addClass('active');
  $('.s_menu').remove();
  $('body').append(temp);
}

function getCell(){
  $('.s_menu').remove();
  copyTextToClipboard(window.selected.text());
}

function getColumn(){

  $('.s_menu').remove();
  
  window.selected.parents('.ui-widget-content').parents('.grid-canvas').find('.ui-widget-content').each((e,i)=>{
// //console.log($(i).find('div')[window.selected.index()]);
var divs=$(i).find('div')[window.selected.index()];
    text.push($(divs).text());
 
});
  
    var str=text.join(', ');
  copyTextToClipboard(str.toString());
}


function getRow(_this){
  //console.log(_this); 
  $('.s_menu').remove();
  _this.parents('.ui-widget-content').find('.slick-cell').each((i,e)=>{
    text.push($(e).text());
    // //console.log(text);
  });
  text.pop();
    var str=text.join(', ');
  copyTextToClipboard(str.toString());
}
window.getColumn=getColumn;
window.getRow=getRow;
window.getCell=getCell;


function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    //console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    //console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
   }
  
  handleErrorClose=()=>{
     this.setState({
         errorMsg:"",
         isError:false
       })
  }

handleChangeColor=(color)=>{
  //console.log(color);
  this.setState({
    themeColor:color.toString(),
    color:color.toString()
  });

}
   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

getRewd=()=>{

    CALL_API("post",API_URL+"ottgetallrewards.json?clId=AMIT202002CID&pNo=1&cau="+udata.userid).then((res)=>{
      //console.log(res);
      if(res.data.ottresp.sts===0){

          message.error(res.data.ottresp.msg);

     }
      var rewardList=res.data.ottresp.rewardList;
      this.setState({
        rewardList:rewardList
      })
    }); 
  }




getCat=()=>{
  CALL_API("post",API_URL+"ottgetallcategory.json?clId=AMIT202002CID&sts=TRUE&pNo=1&cau="+udata.userid).then((res)=>{
      //console.log(res);
      if(res.data.ottresp.sts===0){

          message.error(res.data.ottresp.msg);

     }
      var cat=res.data.ottresp.catlist;
      this.setState({
        catlist:cat
      })
    }); 
  }

 openAddProd=()=>{
    if(!this.state.sortedSelectedRows){
          message.error("Select Contest First To Add Product");
      return;
    }

if(this.state.sortedSelectedRows){
if(this.state.sortedSelectedRows.status==="LIVE"){
      message.error("Contest is LIVE, can not Add the Product")
  return;
}
}

    this.setState({
      addquestionprod:true
    });
  }


  openAdd=()=>{
    if(this.state.qMode){
      if(!this.state.qMode.includes("FIXED")){
          message.error("Questions can be added only to Fixed type contests");

         return;
      }
    }

if(this.state.sortedSelectedRows){
if(this.state.sortedSelectedRows.status==="LIVE"){
      message.error("Contest is LIVE, can not Add the Question")
  return;
}
}

    if(!this.state.sortedSelectedRows){
          message.error("Select Contest First To Add Question");
      return;
    }
    this.setState({
      addquestion:true
    });
  }


  closeAdd=()=>{
    this.setState({
      addquestion:false,
    });
}

closeAddprod=()=>{
    this.setState({
      addquestionprod:false
    });
  }

  showImage=(val)=>{
  this.state.themes.map((e)=>{
                  if(e.thmId===val){

    this.setState({
      openImage:true,
      img:e.thmImgDesk
    })
  }
  });
  }
  closeImage=()=>{
    this.setState({
      openImage:false,
    })  
  }

  getSubCat=(val)=>{
   CALL_API("post",API_URL+"ottgetallSubCatForcategory.json?clId=AMIT202002CID&sts=TRUE&catty="+val+"&cau="+udata.userid).then((res)=>{
      //console.log("abc",res);
      if(res.data.ottresp.sts===0){
      

          message.error(res.data.ottresp.msg);

     }
       var subcat=res.data.ottresp.sCatlist;
      this.setState({
        subcatlist:subcat
      })
    })
   }


  refresh=()=>{
  columnFilters={};

   this.setState({
    fil:""
   },()=>{
          this.getContest();
   })    
   }



makeTable=()=>{
var __this=this;

  var dataView;
  var grid;
  var data = [];
  var options = {
    enableCellNavigation: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    rowHeight: 40,
    topPanelHeight:80,
    forceFitColumns:window.innerWidth<1024?false:true,  
    explicitInitialization: true
  };
  var columns = [];
  var checkboxSelector;
  var isSelectAllCheckboxHidden = true;
  var isSelectAllShownAsColumnTitle = true;

  checkboxSelector = new Slick.CheckboxSelectColumn({
    cssClass: "slick-cell-checkboxsel",
    hideInColumnTitleRow: !isSelectAllShownAsColumnTitle,
    hideInFilterHeaderRow: isSelectAllShownAsColumnTitle,

    // make only 2nd rows as selectable by using the override function
    
  });

  columns.push(checkboxSelector.getColumnDefinition());

window.editContent=__this.editContent;
window.deleteContest=__this.deleteContest;
window.showImage=__this.showImage;




 for (var i = 0; i < head.length; i++) {
    columns.push({
      id: head[i].key,
      name: head[i].name,
      field: head[i].key,
      width: head[i].width?head[i].width:75,
   
      formatter: head[i].formatter
    });
  }

  function filter(item) {
    for (var columnId in columnFilters) {
        //console.log(",",columnFilters[columnId]);
      if (columnId !== undefined && columnFilters[columnId] !== "") {
        var c = grid.getColumns()[grid.getColumnIndex(columnId)];
        //console.log(",",item[c.field]);
        
        if(columnFilters[columnId].toString().toLowerCase()=="no"){
          return item[c.field]==false;
        }else if(columnFilters[columnId].toString().toLowerCase()=="yes"){
          return item[c.field]==true;
        }

          return item[c.field].toString().toLowerCase().includes(columnFilters[columnId].toString().toLowerCase());
        
      }
    }
    return true;
  }

  function toggleHideSelectAllCheckbox() {
    isSelectAllCheckboxHidden = !isSelectAllCheckboxHidden;
    checkboxSelector.setOptions({ hideSelectAllCheckbox: isSelectAllCheckboxHidden });
  }

  function toggleWhichRowToShowSelectAll() {
    isSelectAllShownAsColumnTitle = !isSelectAllShownAsColumnTitle;
    checkboxSelector.setOptions({
      hideInColumnTitleRow: !isSelectAllShownAsColumnTitle,
      hideInFilterHeaderRow: isSelectAllShownAsColumnTitle,
    });
  }






  $(function () {
    for (var i = 0; i < datas.length; i++) {
      var d = (data[i] = {});
      d["id"] = i;
     
      d["name"] = datas[i].name;
      d["stDateTimeStr"] = datas[i].stDateTimeStr;
      d["enDateTimeStr"] = datas[i].enDateTimeStr;
      d["cat"] = datas[i].cat;
      d["subCat"] = datas[i].subCat;
      d["qMode"] = datas[i].qMode;
      d["ansType"] = datas[i].ansType;
      d["isElimination"] = datas[i].isElimination;
      d["rwdType"] = datas[i].rwdVal+" "+datas[i].rwdType ;
      d["qSize"] = datas[i].qSize;
      d["thmId"] = datas[i].thmId;

      d["seqNo"] = datas[i].seqNo;
      d["crBy"] = datas[i].crBy;
      d["crDateTimeStr"] = datas[i].crDateTimeStr;
      d["upBy"] = datas[i].upBy;
      d["upDateTimeStr"] = datas[i].upDateTimeStr;
      d["Action"] = datas[i].coId;
      for (var j = 0; j < columns.length; j++) {
        d[j] = Math.round(Math.random() * 10);
      }
    }
    //console.log(data);
    dataView = new Slick.Data.DataView();
    if($('#myGrid').length<=0){
      return;
    }
    grid = new Slick.Grid("#myGrid", dataView, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: true}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
      // dataView.setPagingOptions({ pageSize: 10 });
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );

      // var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

    

  var  resizer = new Slick.Plugins.Resizer({
        container: '#loading', // DOM element selector, can be an ID or a class
        rightPadding: 5,    // defaults to 0
        bottomPadding: 10,  // defaults to 20
        minHeight: 150,     // defaults to 180
        minWidth: 250,      // defaults to 300
      });
      grid.registerPlugin(resizer)




    dataView.onRowCountChanged.subscribe(function (e, args) {
      grid.updateRowCount();
      grid.render();
    });

    dataView.onRowsChanged.subscribe(function (e, args) {
      grid.invalidateRows(args.rows);
      grid.render();
    });

    grid.onSelectedRowsChanged.subscribe(function (e, args) {
      var previousSelectedRows = args.previousSelectedRows.sort(function (a, b) { return a - b });
      var sortedSelectedRows = args.rows.sort(function (a, b) { return a - b });

      //console.log("Previously Selected Rows: " + previousSelectedRows.toString());
      //console.log("Selected Rows: " + sortedSelectedRows);
      // $('#selectedRows').text(sortedSelectedRows.toString());
      //console.log(sortedSelectedRows);
      if(sortedSelectedRows.length>0){        
      __this.setState({
        sortedSelectedRows:sortedSelectedRows,
        coId:datas[sortedSelectedRows].coId,
        clId:datas[sortedSelectedRows].clId,
        ansType:datas[sortedSelectedRows].ansType,
        qMode:datas[sortedSelectedRows].qMode,

      });
      }else{
      __this.setState({
        sortedSelectedRows:sortedSelectedRows,
        coId:"",
        clId:"",
        ansType:"",
        qMode:""
       })
      }



    });

   

grid.onClick.subscribe(function (e) {
  $('.s_menu').remove();

});

    
     $(grid.getHeaderRow()).on("keyup", ":input", function (e) {
            
                 var keyCode = (e.keyCode ? e.keyCode : e.which);
      var columnId = $(this).data("columnId");
     var val=$.trim($(this).val());
       p=p.filter((e)=>{
        return !e.includes(columnId+":")
      });
     p.push(columnId+":"+val)
     //console.log(p.join(","));
     __this.setState({
      fil:p.join(",")+","
     },()=>{
        if (keyCode == 13) {
var loadingIndicator;

    if (!loadingIndicator) {
        var $g = $('#loading');
        loadingIndicator = $("<span class='loading-indicator'><label>Loading...</label></span>");
       $g.append(loadingIndicator);
        

       
      }
      loadingIndicator.show();
          // __this.getReward(loadingIndicator);
      __this.getContest(loadingIndicator)

        }
      $(this).val($(this).val());
     })
     //console.log(dataView);
      if (columnId != null) {
        columnFilters[columnId] = $.trim($(this).val());
      }
    });


    grid.onHeaderRowCellRendered.subscribe(function(e, args) {
      if (args.column.field !== "sel") {
        $(args.node).empty();
        $("<input type='text'>")
           .data("columnId", args.column.id)
           .val(columnFilters[args.column.id])
           .appendTo(args.node);
      }
    });

    grid.init();

    dataView.beginUpdate();
    dataView.setItems(data);
    dataView.setFilter(filter);
    dataView.endUpdate();
    // clearInterval(cs);
  })

  this.copyAbleTable()
}

slectTheme=(thmId)=>{
  
  if(!thmId){
    this.setState({
      popOpen:false
    });    
      return;
  }
  
  this.setState({
    thmId:thmId,
    popOpen:false
  })
}

  async componentDidMount(){
    await this.props.getTheme();
    //console.log("aaa",this.props.data.theme)
    this.setState({
      themes:this.props.data.theme.themes
    })
    window.showImage=this.showImage;

    this.getCat();
    this.getContest()
    this.getRewd();
  }


  getContest=(loadingd)=>{
      const {fil}=this.state

      this.setState({
        showTable:false
      });



    const{pgNo}=this.state;
    CALL_API("post",API_URL+"livegetallcontests.json?clId=AMIT202002CID&sts=ACTIVE&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
  //console.log(res);
  if(res.data.liveresp.sts===0){
          message.error(res.data.liveresp.msg);
     }
   datas=res.data.liveresp.contests;


       this.setState({
      isNext:this.state.pgNo<res.data.liveresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.liveresp.pagination.totalRows,
      totalPages:res.data.liveresp.pagination.totalPages,
      pageNum:res.data.liveresp.pagination.pageNum,
      datas:datas,
      showTable:true,
      sortedSelectedRows:null
    })

      // this.makeTable();
if(loadingd){
  loadingd.remove();
}
}).catch((error)=>{
  console.log("ERRRRRRR",error);
          message.error("Something went Worng");
});
  
  }


changeFil=(fil)=>{
  this.setState({
    fil
  },()=>{
    this.getContest();  
  });
 }

 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.getContest();
  });

 }
 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.getContest()
  })
 }


 goLast=()=>{
 if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:this.state.totalPages
  },()=>{
    this.getContest()
  })  
 }
 goFirst=()=>{
 if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:1
  },()=>{
    this.getContest()
  })  
 }


startContest=()=>{
  if(!this.state.coId){
    message.error("Please select a contest");
    return;
  }

if(this.state.sortedSelectedRows){
if(this.state.sortedSelectedRows.status==="LIVE"){
      message.error("Contest is LIVE, can not start the contest")
  return;
}
}

CALL_API("post",API_URL+"snwstartcontest.json?clId=AMIT202002CID&coId="+this.state.coId).then((res)=>{
  // console.log(e);
  if(res.data.snwresp.sts===0){
            message.error(res.data.snwresp.msg);
    }else{
          message.success(res.data.snwresp.msg);
    }
});
}
endContest=()=>{
  if(!this.state.sortedSelectedRows){
    message.error("Please select a contest");
    return;
  }
CALL_API("post",API_URL+"liveendcontest.json?clId=AMIT202002CID&coId="+this.state.coId).then((res)=>{
  
  if(res.data.liveresp.sts===0){
          message.error(res.data.liveresp.msg);    
  }else{
          message.success(res.data.liveresp.msg);   
        this.getContest(); 
  }

});
}

resetContest=()=>{
  if(!this.state.sortedSelectedRows){
    message.error("Please select a contest");
    return;
  }
CALL_API("post",API_URL+"liveresetcontests.json?clId=AMIT202002CID&coId="+this.state.coId).then((res)=>{
  
  if(res.data.liveresp.sts===0){
          message.error(res.data.liveresp.msg);    
  }else{
          message.success(res.data.liveresp.msg);    
  }

});
}


handleChangeCheckbox=(e)=>{
  // this.setState({

  // })
  console.log(e.target.checked);
  this.setState({
    [e.target.name]:e.target.checked?"true":"false",
    checkbox:e.target.checked
  })
}

changeCheck=(json)=>{
    this.setState(json);
  }

  render(){

  const { classes } = this.props;
  const { open,scroll,category,checkedA,value, selectedValue,showError,rewardList  } = this.state;
  const trueBool = true;
  var __this=this;
function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
    function NoFalseformatter(row, cell, value, columnDef, dataContext) {
        return value?"Yes":"No";
    }
  

  function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       <button class="del" onClick="window.delete(${row})"><img src="${delete_icon}" alt="" /></button>
       <button class="edit" onClick="window.edit(${row})"><img src="${edit}" alt="" /></button>
        </div>`;
    }
    function imageFormatter(row, cell, value, columnDef, dataContext) {
      var img="No Preview";
         __this.state.themes.map((e)=>{
                  if(e.thmId===value){
                    img= `<img className="rowThme" onClick="window.showImage(${e.thmId})"  src="${e.thmImgDesk}" alt="" />`
                  }
            })
         return img;
      }

    function Dateformatter(row, cell, value, columnDef, dataContext) {
    
        return value;
      }

var head=[
{name:"Name",key:"name",formatter: formatter},
{name:"Start Date",key:"stDateTimeStr",formatter: formatter},

{name:"Category",key:"cat",formatter: formatter},
{name:"Sub Category",key:"subCat",formatter: formatter},
{name:"Question Type",key:"ansType",formatter: formatter},
{name:"Theme Preview",key:"thmId",formatter: imageFormatter},
{name:"Display Sequence",key:"seqNo",formatter: formatter},
{name:"Last Question",key:"lastQue",formatter: formatter},
{name:"Contest Type",key:"coType",formatter: formatter},
{name:"Is Elimination",key:"isElimination",formatter: NoFalseformatter},
{name:"Is Split Summary",key:"isSplitSummary",formatter: NoFalseformatter},
{name:"Summary Reward Type",key:"sumRwdType",formatter: formatter},
{name:"Summary Reward value",key:"sumRwdVal",formatter: formatter},
{name:"Lottery Enable",key:"isLotEnbl",formatter: NoFalseformatter},
{name:"Winner Reward Type",key:"winRwdType",formatter: formatter},
{name:"Winner Reward Value",key:"winRwdVal",formatter: formatter},
{name:"Question Reward Type",key:"queRwdType",formatter: formatter},
{name:"Participants Reward Type",key:"partiRwdType",formatter: formatter},
{name:"Participants Reward Value",key:"partiRwdVal",formatter: formatter},
{name:"Winner Count",key:"winnerCount",formatter: formatter},
{name:"Is Password",key:"isPwd",formatter: NoFalseformatter},
{name:"Status",key:"status",formatter: formatter},
{name:"Created By",key:"crBy",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: Dateformatter},
{name:"Updated By",key:"upBy",formatter: formatter},
{name:"Updated Date",key:"upDateTimeStr",formatter: Dateformatter},
{name:"Action",key:"Action",formatter: buttonFormater,width:160},
];












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

        <div className="btn_wrap_sec">
     {/*
      this.state.addquestion && <div className="flx_col">
      <Button  variant="outlined" color="secondary"  onClick={this.closeAdd}  color="secondary" className={classes.button}>
              BACK 
        </Button> 
     </div>*/}
     <div className="flx_col">
        

        <Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Contest
        </Button>
        
      
       <Button  variant="contained" onClick={this.openAdd} color="primary"    className={classes.button}>
               Add Question
        </Button> 

        <Button  variant="contained" onClick={this.openAddProd} color="primary"    className={classes.button}>
               Add Product
        </Button> 

      {
          /*
     <Button  variant="contained" color="primary" onClick={this.handlePrizeOpen}   color="primary" className={classes.button}>
               Configure Prize
        </Button> 
          */
      }                
    
    <Button onClick={this.resetContest}  variant="contained"  color="primary" className={classes.button}>
              RESET CONTEST 
        </Button> 
        <Button onClick={this.endContest}  variant="contained" color="primary"   color="primary" className={classes.button}>
              END CONTEST  
        </Button> 

       </div>  
        </div>

   <div class="ques_wrap">   <Paper className={classes.root} elevation={5} >
 
  <AppTable 
    showTable={this.state.showTable}
    changeFil={this.changeFil}
    getData={this.getContest}
    data={this.state.datas}
    head={head}
    editContent={this.editContent}
    deleteContest={this.deleteContest}
      changeCheck={this.changeCheck}
    checkbox={true}
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
          open={this.state.openImage}
          onClose={this.closeImage}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
        >
         <div className="close_btn" onClick={this.closeImage}>
            <CloseIcon/>
          </div>
          
          <DialogContent>
            <img src={this.state.img} alt="" />
          </DialogContent>

</Dialog>
      
       <Dialog
          open={open}
          onClose={this.handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
       
       {this.state.isEdit && 
          <DialogTitle id="scroll-dialog-title"> Edit Contest</DialogTitle>
       }
       {!this.state.isEdit && 
          <DialogTitle id="scroll-dialog-title"> Add Contest</DialogTitle>
       }
          <DialogContent>


          <MuiPickersUtilsProvider utils={DateFnsUtils}>
         
          <div style={{width:'100%',padding:10}}>
           
            <div className="flex_div">
           <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Name *</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.name && showError}
                helperText="this field is required"
                name="name"
                 value={this.state.name} onChange={this.handleChange} />
              {!this.state.name && showError && <span className="err">This field is required.</span>}
         
              </FormControl>
              </div>

                <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Extended Contest Name *</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.extName && showError}
                helperText="this field is required"
                name="extName"
                 value={this.state.extName} onChange={this.handleChange} />
                       {!this.state.extName && showError && <span className="err">This field is required.</span>}
              </FormControl>
              </div>
              </div>

         

 <div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Category *</InputLabel>
            

            <Select
              value={this.state.cat}
                         error={!this.state.cat && showError}
          helperText="this field is required"
              onChange={this.handleChange}
              inputProps={{
                name: 'cat',
                id: 'cat',
              }}
            >
              {this.state.catlist && this.state.catlist.map((e)=>{
              return <MenuItem value={e.cattype}>{e.cattype}</MenuItem>                
              })}
            </Select>
                       {!this.state.cat && showError && <span className="err">This field is required.</span>}

          </FormControl>
            </div>
          
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
          <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel  shrink htmlFor="age-simple">Subcategory </InputLabel>
            <Select

              value={this.state.subCat}
              onChange={this.handleChangeSelect}
              inputProps={{
                name: 'subCat',
                id: 'subCat',
              }}
              displayEmpty="true"
            >
              <MenuItem value="">None</MenuItem>
            {this.state.subcatlist && this.state.subcatlist.map((e)=>{
                return <MenuItem value={e.subcattype}>{e.subcattype}</MenuItem>;              
            })}
            </Select>

          </FormControl>
            </div>
            </div>


<div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
            
             <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          minDate={this.state.isEdit?this.state.stDate<new Date()?this.state.stDate:new Date():new Date()}
          id="date-picker-inline"
          disablePast={!this.state.isEdit}
          label="Start Date"
          value={this.state.stDate}
          onChange={this.handleDateChange}
          error={!this.state.stDate && showError}
          helperText={ !this.state.stDate && showError?"This field is required":""}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

            </div>
          <div style={{paddingLeft:10,paddingRight:10,flex:1,marginTop:15}}>
     <div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Start Time *</InputLabel>
            <Select
              value={this.state.stHour}
             error={!this.state.stHour && showError}
          helperText="this field is required"
              onChange={this.handleChange}
              inputProps={{
                name: 'stHour',
                id: 'stHour',
              }}
            >
              {this.state.hour && this.state.hour.map((e)=>{
              return <MenuItem value={e}>{e}</MenuItem>                
              })}
            </Select>
          </FormControl>
            </div>
          
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
          <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Minutes *</InputLabel>
            <Select

              value={this.state.stMinutes}
              onChange={this.handleChange}
              inputProps={{
                name: 'stMinutes',
                id: 'stMinutes',
              }}
            >
            {this.state.min && this.state.min.map((e)=>{
                return <MenuItem value={e}>{e}</MenuItem>;              
            })
            }
            </Select>
                       {!this.state.stMinutes && showError && <span className="err">This field is required.</span>}

          </FormControl>
            </div>
            </div>

             


            </div>
              </div>



 <div className="flex_div">
<div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Question Size *</InputLabel>
                <Input
               error={!this.state.qSize && showError}
          helperText="this field is required"
          type="tel"
           id="name-simple" name="qSize" value={this.state.qSize} onChange={this.handleChange} />
                       {!this.state.qSize && showError && <span className="err">This field is required.</span>}
             
              </FormControl>
            </div>
   <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Contest Type *</InputLabel>
            <Select
                     error={!this.state.coType && showError}
          helperText="this field is required"
              value={this.state.coType}
              onChange={this.handleChange}
              inputProps={{
                name: 'coType',
                id: 'coType',
              }}
            >
              <MenuItem value="NORMAL">NORMAL</MenuItem>
              <MenuItem value="MINI">MINIJACKPOT</MenuItem>
              <MenuItem value="MEGA">MEGAJACKPOT</MenuItem>

            </Select>
                       {!this.state.coType && showError && <span className="err">This field is required.</span>}

          </FormControl>
            </div>




              
        </div>



 <div className="flex_div" style={{alignItems:"center"}}>
  <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>

      <FormControlLabel
        labelPlacement="end"
         control={
          <Checkbox 
              checked={this.state.isPwd=="true"}
              onChange={this.handleChangeCheckbox}
              name="isPwd"
           />
      } label="Password Protected Game" />

{
  /*


              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Is Password *</InputLabel>
             <Select
              value={this.state.isPwd}
              onChange={this.handleChange}
               error={!this.state.isPwd && showError}
          helperText="this field is required"
              inputProps={{
                name: 'isPwd',
                id: 'isPwd',
              }}
            >
              <MenuItem value="false">NO</MenuItem>
              <MenuItem value="true">YES</MenuItem>
            </Select>
                       {!this.state.isPwd && showError && <span className="err">This field is required.</span>}
          </FormControl>
            */
}

        </div>
        {
          this.state.isPwd=="true" &&
         <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Contest Password</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.conPwd && showError}
                helperText="this field is required"
                name="conPwd"
                 value={this.state.conPwd} onChange={this.handleChange} />
                       {!this.state.conPwd && showError && <span className="err">This field is required.</span>}

              </FormControl>
              </div>
        }


      </div>

 <div className="flex_div">


   <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
           
              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Is Summary Split *</InputLabel>
         
            <Select
              value={this.state.isSummSplit}
              onChange={this.handleChange}
               error={!this.state.isSummSplit && showError}
          helperText="this field is required"
              inputProps={{
                name: 'isSummSplit',
                id: 'isSummSplit',
              }}
            >
              <MenuItem value="false">NO</MenuItem>
              <MenuItem value="true">YES</MenuItem>
            </Select>
                       {!this.state.isSummSplit && showError && <span className="err">This field is required.</span>}

          </FormControl>
              </div>

              

             <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Summary Reward Type *</InputLabel>
            <Select
              value={this.state.sumRwdType}
              onChange={this.handleChange}
               error={!this.state.sumRwdType && showError}
          helperText="this field is required"
              inputProps={{
                name: 'sumRwdType',
                id: 'sumRwdType',
              }}
            >

            {rewardList && rewardList.map((e)=>{
              return <MenuItem value={e.rwdtype}>{e.rwdtype}</MenuItem> 
            })}
            </Select>
                       {!this.state.sumRwdType && showError && <span className="err">This field is required.</span>}

          </FormControl>
              </div>
 
           <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Summary Reward Value *</InputLabel>
                <Input
                id="name-simple" 
                type="tel"
                error={!this.state.sumRwdVal && showError}
                helperText="this field is required"
                name="sumRwdVal"
                 value={this.state.sumRwdVal} 
                 onChange={(e)=>{this.handleChange(e,0)}} />
                       {!this.state.sumRwdVal && showError && <span className="err">This field is required.</span>}
              
              </FormControl>
              </div>
          

        </div>


              


 <div className="flex_div">

        <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>           
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Is Lottery *</InputLabel> 
            <Select
              value={this.state.isLottery}
              onChange={this.handleChange}
               error={!this.state.isLottery && showError}
          helperText="this field is required"
              inputProps={{
                name: 'isLottery',
                id: 'isLottery',
              }}
            >
              <MenuItem value="false">NO</MenuItem>
              <MenuItem value="true">YES</MenuItem>
            </Select>
                       {!this.state.isLottery && showError && <span className="err">This field is required.</span>}

            </FormControl>
          </div>

            

           
</div>





{
  this.state.isLottery=="true" &&


 <div className="flex_div">

             <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Winner Reward Type *</InputLabel>
            <Select
              value={this.state.winRwdType}
              onChange={this.handleChange}
               error={!this.state.winRwdType && showError}
          helperText="this field is required"
              inputProps={{
                name: 'winRwdType',
                id: 'winRwdType',
              }}
            >
            {rewardList && rewardList.map((e)=>{
              return <MenuItem value={e.rwdtype}>{e.rwdtype}</MenuItem> 
            })}
            </Select>
                       {!this.state.winRwdType && showError && <span className="err">This field is required.</span>}

          </FormControl>
              </div>


              

           <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Winner Reward Value</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.winRwdVal && showError}
                helperText="this field is required"
                name="winRwdVal"
                type="tel"
                 value={this.state.winRwdVal} onChange={this.handleChange} />
                       {!this.state.winRwdVal && showError && <span className="err">This field is required.</span>}

              </FormControl>
              </div>


              <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Winner Count</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.winCount && showError}
                helperText="this field is required"
                name="winCount"
                type="tel"
                 value={this.state.winCount} onChange={this.handleChange} />
                       {!this.state.winCount && showError && <span className="err">This field is required.</span>}
              
              </FormControl>
              </div>
</div>
}





















           



<div className="flex_div">
            

 <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel shrink htmlFor="age-simple">Question Reward Type</InputLabel>
            <Select
               value={this.state.queRwdType}
               onChange={this.handleChangeSelect}

               displayEmpty="true"
               helperText="this field is required"
               inputProps={{
                name: 'queRwdType',
                id: 'queRwdType',
              }}

            >
           <MenuItem value="">None</MenuItem>
            {rewardList && rewardList.map((e)=>{
              return <MenuItem value={e.rwdtype}>{e.rwdtype}</MenuItem> 
            })}
            </Select>
         
          </FormControl>
              </div>

                        <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Display Sequence</InputLabel>
                <Input 
         error={!this.state.dSeq && showError}
          helperText="this field is required"
           type="tel"
          id="name-simple" name="dSeq" value={this.state.dSeq} onChange={this.handleChange} />
              </FormControl>
                   {!this.state.dSeq && showError && <span className="err">This field is required.</span>}
              
            </div>
              </div>
        
        





 <div className="flex_div">


            

   <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>

             <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Question Type</InputLabel>
         
            <Select
              value={this.state.qType}
              onChange={this.handleChange}
               error={!this.state.qType && showError}
          helperText="this field is required"
              inputProps={{
                name: 'qType',
                id: 'qType',
              }}
            >
              <MenuItem value="REGULAR">REGULAR</MenuItem>
              <MenuItem value="FEEDBACK">FEEDBACK</MenuItem>
            </Select>
          </FormControl>
            </div>


            {this.state.qType==="REGULAR" && 
        <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
          <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Elimination </InputLabel>
            <Select
              value={this.state.elmType}
              onChange={this.handleChange}
              inputProps={{
                name: 'elmType',
                id: 'elmType',
              }}
            >
              <MenuItem value="true">YES</MenuItem>
              <MenuItem value="false">NO</MenuItem>
            </Select>
          </FormControl>
            </div>
          }

             <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
              <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel shrink htmlFor="age-simple">Participant Reward Type</InputLabel>
            <Select
              value={this.state.partRwdType}
              onChange={this.handleChangeSelect}
          helperText="this field is required"
              inputProps={{
                name: 'partRwdType',
                id: 'partRwdType',
              }}
              displayEmpty="true"

            >
            <MenuItem value="">None</MenuItem>
            {rewardList && rewardList.map((e)=>{
              return <MenuItem value={e.rwdtype}>{e.rwdtype}</MenuItem> 
            })}
            </Select>
          </FormControl>
              </div>
              {
                this.state.partRwdType && 
           <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Participant Reward Value</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.partRwdVal && showError}
                helperText="this field is required"
                name="partRwdVal"
                type="tel"
                 value={this.state.partRwdVal} onChange={(e)=>{this.handleChange(e,0)}} />
              </FormControl>
              </div>
            }

              </div>
<div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
              <label className="label_theme" htmlFor="">Theme Image</label>
               
              {this.state.themes && this.state.themes.map((e)=>{
                  if(e.thmId===this.state.thmId){
                    return <img className="thmImgsSelected" src={e.thmImgDesk} alt="" />
                  }
              })}
              <div class="upload_file">
              <Button variant="contained"  onClick={this.openThemePop} color="primary" className={classes.button}>
              Select Theme
            </Button>
              </div>
            </div>
            
            

              </div>
    

     
          </div>


            </MuiPickersUtilsProvider>
</DialogContent>
          <DialogActions>
         
            {!this.state.isEdit && <Button variant="contained"  onClick={this.addContest} color="primary" className={classes.button}>
              Save
            </Button>}

            {this.state.isEdit && <Button variant="contained"  onClick={this.editContest} color="primary" className={classes.button}>
              Update
            </Button>}

          </DialogActions>
        </Dialog>

{this.state.addquestion && <Addquestion rewardList={rewardList} sortedSelectedRows={this.state.sortedSelectedRows} coId={this.state.coId} coType={this.state.coType} showSnackbar={this.showSnackbar} clId={this.state.clId} addquestion={this.state.addquestion} ansType={this.state.ansType} closeAdd={this.closeAdd}/>}        
{this.state.addquestionprod && <Addproduct rewardList={rewardList} coId={this.state.coId} showSnackbar={this.showSnackbar} clId={this.state.clId} addquestion={this.state.addquestionprod} ansType={this.state.ansType} closeAdd={this.closeAddprod}/>}        

{this.state.prizeOpen && <PrizePopup classes={classes} coId={this.state.coId} closePrize={this.closePrize} prizeOpen={this.state.prizeOpen}/>}
<ThemePopup slectTheme={this.slectTheme} themes={this.state.themes} closePrize={this.closePop} prizeOpen={this.state.popOpen}/>

        <div className="btn_wrap_sec">
     <div className="flx_col">
<Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Contest
        </Button>

      <Button  variant="contained" onClick={this.openAdd} color="primary"    className={classes.button}>
               Add Question
        </Button> 
         <Button  variant="contained" onClick={this.openAddProd} color="primary"    className={classes.button}>
               Add Product
        </Button> 

            <Button onClick={this.resetContest}   variant="contained"  color="primary" className={classes.button}>
              RESET CONTEST 
        </Button> 
        <Button onClick={this.endContest}  variant="contained" color="primary"   color="primary" className={classes.button}>
              END CONTEST  
        </Button> 

{
  /*

        <Button  variant="contained" color="primary" onClick={this.handlePrizeOpen}   color="primary" className={classes.button}>
               Configure Prize
        </Button>

  */
}
</div>
</div>



    </Fragment>
  );
  }
}

Contest.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = state => ({
  data:state.get('contest')
});

const mapDispatchToProps = dispatch => ({
  getTheme: bindActionCreators(getTheme, dispatch)
});

const Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contest);

export default withStyles(styles)(Mapped);


