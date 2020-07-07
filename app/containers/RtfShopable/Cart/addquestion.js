import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { Snackbar } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Helmet } from 'react-helmet';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';
import Pager from 'enl-components/Pager/';

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
import moment from 'moment';
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';
import {message} from 'antd'

import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';


var cs;
var p=[];
    var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}

var p2=[];
var columnFilters = {};
var columnFilters2 = {};

let id = 0;
function createData(id,Name,desc, Status,Created_By,Created_Date,Updated_By,Updated_Date,Action) {
  id += 1;
  return {
      id,Name,desc, Status,Created_By,Created_Date,Updated_By,Updated_Date,Action
  };
}
function createSubcat(id,cat,subcat, desc, Status,Created_By,Created_Date,Updated_By,Updated_Date,Action) {
  id += 1;
  return {
     id,cat,subcat, desc, Status,Created_By,Created_Date,Updated_By,Updated_Date,Action
  };
}
const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);


function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    width: '60%'
  };
}

let datas = [];
let subcatdata = [];

class  Addquestion extends React.Component  {
   state = {
    open: false,
    type:"fixed",
    orient:"VERTICAL",
    type:this.props.ansType,
    scroll: 'paper',
    tabvalue:0,
    qstText:"",
    opa:"",
    opb:"",
    opc:"",
    opd:"",
    ans:"" ,
    fil:"",
    fil2:"",
    pgNo:1 ,  
    pgNo2:1 ,  
  }; 

  handleFilechange=(e)=>{
    console.log(e.target.files[0]);
    this.setState({
      file:e.target.files[0]
    })
  }

   handleRadio= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.closeAdd()
  };
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

insertQuestion=()=>{

const{
prodname,
proddesc,
unitvalue,
priceperunit,
unittype,
prodimageurl,
mercid,
prodidselrsite,
file
}=this.state;

  var URL="shopaddmerchantproduct.json?clId=AMIT202002CID&cau=lloyd&cuId=lbernad@lbernad.com&prodname="+prodname+"&proddesc="+proddesc+"&unitvalue="+unitvalue+"&priceperunit="+priceperunit+"&unittype="+unittype+"&prodimageurl="+prodimageurl+"&mercid="+this.props.mercId+"&prodidselrsite="+prodidselrsite;

  var data=new FormData();
  data.append("file",file);

  CALL_API("post",API_URL+URL,data).then((res)=>{
    if(res.data.shopresp.sts===0){       
    message.error(res.data.shopresp.msg);
     }else{
      // this.handleClose();
      this.fetchQuest();
      this.setState({
        prodname:"",
        proddesc:"",
        unitvalue:"",
        priceperunit:"",
        unittype:"",
        prodimageurl:"",
        prodidselrsite:"",
        file:null
      })
      this.props.showSnackbar(res.data.shopresp.msg);
     }

  });
}

saveQuestion=()=>{

var URL;
  if(!this.state.qstText){
        message.error("Question Text is mandatory!");
        return;  
  }

if(!this.state.opa || !this.state.opb && !this.state.qstText){
         message.error("Option A  is mandatory!");
        return;
  }
  if(!this.state.opb){
        message.error("Option B is mandatory!");
        return;
  }

  if(this.props.ansType==="FEEDBACK"){
    URL="snwUpdateContQuest.json?clId="+this.props.clId+"&coId="+this.props.coId+"&qstText="+this.state.qstText+"&ansType="+this.props.ansType+"&optA="+this.state.opa+"&optB="+this.state.opb+"&optC="+this.state.opc+"&optD="+this.state.opd+"&orient="+this.state.orient+"&qId="+this.state.conqsnid+"&cau="+udata.userid;
  }else{
     if(!this.state.ans){
        message.error("Selecting an answer is mandatory!");
      return;
    }
    URL="snwUpdateContQuest.json?clId="+this.props.clId+"&coId="+this.props.coId+"&qstText="+this.state.qstText+"&ansType="+this.props.ansType+"&optA="+this.state.opa+"&optB="+this.state.opb+"&optC="+this.state.opc+"&optD="+this.state.opd+"&orient="+this.state.orient+"&ans="+this.state.ans+"&qId="+this.state.conqsnid+"&cau="+udata.userid;
  }


  CALL_API("post",API_URL+URL).then((res)=>{
    this.fetchQuest();
    // this.handleClose();
    if(res.data.ottresp.sts===0){
       this.setState({
         errorMsg:res.data.ottresp.msg,
         isError:true
       })
     }
    this.props.showSnackbar(res.data.ottresp.msg);

     this.setState({
        qstText:"",
        opa:"",
        opb:"",
        opc:"",
        opd:"",
        ans:"",
        isEdit:false
      });
  });
}


fetchQuest=()=>{
    this.getCat();
}


fetchQuestBank=(loadingIndicator)=>{
  const {fil2}=this.state;
  CALL_API("post",API_URL+"snwgetallconquesbank.json?clId="+this.props.clId+"&coId="+this.props.coId+"&pgNo="+this.state.pgNo2+"&cau="+udata.userid+"&hfilter="+fil2).then((res)=>{
    subcatdata=res.data.ottresp.qbList!=null?res.data.ottresp.qbList:[];
        if(res.data.ottresp.sts===0){
    this.props.showSnackbar(res.data.ottresp.msg);
     
     }

     this.setState({
         isNext1:this.state.pgNo<res.data.ottresp.pagination.totalPages,
      isPrev1:this.state.pgNo>1,
      totalRows1:res.data.ottresp.pagination.totalRows,
      totalPages1:res.data.ottresp.pagination.totalPages,
      pageNum1:res.data.ottresp.pagination.pageNum,
      })
     if(loadingIndicator){      
     loadingIndicator.remove();
     }
        this.loadSubcat()


  });
}


  componentDidMount(){
    
    this.fetchQuest();
    this.fetchQuestBank();
    this.getCat();


}
addCat=()=>{
  const {cattype,catdesc}=this.state;
      CALL_API("post",API_URL+"ottaddcategory.json?clId=AMIT202002CID&cau="+udata.userid+"&cattype="+cattype+"&catdesc="+catdesc).then((res)=>{
      if(res.data.ottresp.sts===0){
    this.props.showSnackbar(res.data.ottresp.msg);
      
     }else{
        this.setState({
          isError:true,
          errorMsg:res.data.ottresp.msg,
          cattype:null,
          catdesc:null
        });
    this.props.showSnackbar(res.data.ottresp.msg);

        this.getCat();
      }
    });
}
  getCat=(loadingIndicator)=>{
    const {fil}=this.state




     CALL_API("post",API_URL+"shoplistallmerchantproducts.json?clId=AMIT202002CID&cuId=lbernad@lbernad.com&sts=ACTIVE&mercid="+this.props.mercId+"&pgNo="+this.state.pgNo+"&cau="+udata.userid+"&hfilter="+fil).then((res)=>{
     if(res.data.shopresp.sts===0){
       // this.setState({
         // errorMsg:res.data.shopresp.sts,
         // isError:true
       // })
       message.error(res.data.shopresp.msg);
     }
     if(loadingIndicator){      
     loadingIndicator.remove();
     }
      datas=res.data.shopresp.prodlist;
      if(res.data.shopresp.pagination){
              this.setState({
         isNext:this.state.pgNo<res.data.shopresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.shopresp.pagination.totalRows,
      totalPages:res.data.shopresp.pagination.totalPages,
      pageNum:res.data.shopresp.pagination.pageNum,
      })
      }     

      this.loadCat()
    })
  }
  
  componentWillUnmount(){
  }

 copyAbleTable=()=>{
     var ds=[];
var text=[];

document.oncontextmenu = function (e) {
    e.preventDefault();
return false;
}
$('.grid-canvas .slick-cell').mousedown(function(event) {
    event.preventDefault();
    // console.log(event);
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
// console.log($(i).find('div')[window.selected.index()]);
var divs=$(i).find('div')[window.selected.index()];
    text.push($(divs).text());
 
});
  
    var str=text.join(', ');
  copyTextToClipboard(str.toString());
}


function getRow(_this){
  // console.log(_this); 
  $('.s_menu').remove();
  _this.parents('.ui-widget-content').find('.slick-cell').each((i,e)=>{
    text.push($(e).text());
    // console.log(text);
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
    // console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    // console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    // console.error('Async: Could not copy text: ', err);
  });
}
   }
  

  loadSubcat=()=>{
      if($('#myGrid3').length<=0 && subcatdata.length===null){
        return
      }
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

window.deleteContest=__this.deleteContest;


  function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       <button class="del" onClick="window.deleteContest(${row})"><img src="${delete_icon}" alt="" /></button>
         </div>`;
    }
    

var head=[
{name:"Question Text",key:"qtx",formatter: formatter},
{name:"Option A",key:"opa",formatter: formatter},
{name:"Option B",key:"opb",formatter: formatter},
{name:"Option C",key:"opc",formatter: formatter},
{name:"Option D",key:"opd",formatter: formatter},
{name:"Category",key:"ctyp",formatter: formatter},
{name:"Sub Category",key:"sctyp",formatter: formatter},
{name:"Orientation",key:"qOrientn",formatter: formatter},
{name:"Answer",key:"cans",formatter: formatter},
{name:"Answer Type",key:"anstype",formatter: formatter},
{name:"Created By",key:"creBy",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter}
]




 for (var i = 0; i < head.length; i++) {
    columns.push({
      id: head[i].key,
      name: head[i].name,
      field: head[i].key,
      width: head[i].width?head[i].width:100,
      formatter: head[i].formatter
    });
  }

   function filter(item) {
    

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
    for (var i = 0; i < subcatdata.length; i++) {
      var d = (data[i] = {});
      d["id"] = i;
     

  d["qtx"] = subcatdata[i].qtx;
      d["opa"] = subcatdata[i].opa;
      d["opb"] = subcatdata[i].opb;
      d["opc"] = subcatdata[i].opc;
      d["opd"] = subcatdata[i].opd;
      d["ctyp"] = subcatdata[i].ctyp;
      d["sctyp"] = subcatdata[i].sctyp;
      d["cans"] = subcatdata[i].cans;
      d["qOrientn"] = subcatdata[i].qOrientn;
      
      d["anstype"] = subcatdata[i].anstype;
      d["creBy"] = subcatdata[i].creBy;
      d["crDateTimeStr"] = subcatdata[i].crDateTimeStr;
      for (var j = 0; j < columns.length; j++) {
        d[j] = Math.round(Math.random() * 10);
      }
    }
    // console.log(data);
    dataView = new Slick.Data.DataView();
    if($('#myGrid3').length<=0){
      return;
    }
    grid = new Slick.Grid("#myGrid3", dataView, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: true}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
    // var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));
      // dataView.setPagingOptions({ pageSize: 7 });
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );





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

      // console.log("Previously Selected Rows: " + previousSelectedRows.toString());
      // console.log("Selected Rows: " + sortedSelectedRows.toString());
      $('#selectedRows').text(sortedSelectedRows.toString());
      __this.setState({
        selectedRows:sortedSelectedRows
      })
    });




grid.onClick.subscribe(function (e) {
  $('.s_menu').remove();

});

    
     $(grid.getHeaderRow()).on("keyup", ":input", function (e) {
            
                 var keyCode = (e.keyCode ? e.keyCode : e.which);
      var columnId = $(this).data("columnId");
     var val=$.trim($(this).val());
       p2=p2.filter((e)=>{
        return !e.includes(columnId+":")
      });
     p2.push(columnId+":"+val)
     // console.log(p.join(","));
     __this.setState({
      fil2:p2.join(",")+","
     },()=>{
        if (keyCode == 13) {
var loadingIndicator;

    if (!loadingIndicator) {
        var $g = $('#loading3');
        loadingIndicator = $("<span class='loading-indicator'><label>Loading...</label></span>");
       $g.append(loadingIndicator);
        

       
      }
      loadingIndicator.show();
          // __this.getReward(loadingIndicator);
      __this.fetchQuestBank(loadingIndicator)

        }
      $(this).val($(this).val());
     })
     // console.log(dataView);
      if (columnId != null) {
        columnFilters2[columnId] = $.trim($(this).val());
      }
    });

    grid.onHeaderRowCellRendered.subscribe(function(e, args) {
      if (args.column.field !== "sel") {
        $(args.node).empty();
        $("<input type='text'>")
           .data("columnId", args.column.id)
           .val(columnFilters2[args.column.id])
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
 
 this.copyAbleTable();

}

editQuestion=(id)=>{

    var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];

    // console.log(d);

   const {
  conqsnid,
conid,
qsnseqno,
opa,
opb,
opc,
opd,
corans,
creby,
credate,
qbid,
qsnorient,
qsntext,
rwdtype,
rwdvalue,
updby,
upddate,
credateStr,
upddateStr
  }=d;
   // console.log(d);
   // this.getSubCat(cat);
    this.setState({
      tabvalue:0,
  conqsnid,
conid,
qsnseqno,
opa,
opb,
opc,
opd,
ans:corans,
creby,
credate,
qbid,
orient:qsnorient,
qstText:qsntext,
rwdtype,
rwdvalue,
updby,
upddate,
credateStr,
upddateStr,
    isEdit:true
    });
    // this.handleOpen();
    this.fetchQuest();
     this.fetchQuestBank()
    $('.MuiDialogContent-root').animate({
scrollTop:0
});
  }

deleteContest=async (id)=>{
   var cnf= await window.confirm("Are you sure?")
 if(!cnf){
   return
 }

  var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];

   // console.log(d);
   const {conqsnid}=d;
      CALL_API("post",API_URL+"snwDeleteContQuest.json?cau="+udata.userid+"&clId="+this.props.clId+"&coId="+this.props.coId+"&qIds="+conqsnid).then((res)=>{
      // console.log(res);
      if(res.data.ottresp.sts===0){
      // this.props.showSnackbar(res.data.ottresp.msg);

     }
     this.setState({
      qstText:"",
        opa:"",
        opb:"",
        opc:"",
        opd:"",
        ans:"",
        isEdit:false
     })
      this.props.showSnackbar(res.data.ottresp.msg);
     
      this.fetchQuest();
      this.fetchQuestBank();
    })

}



deletQbank= async (id)=>{
 // if(this.state.tabvalue==0){
  this.deleteContest(id);
   return;
 // }
 var cnf= await window.confirm("Are you sure?")
 if(!cnf){
   return
 }

  var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];

   // console.log(d);
   const {conqsnid}=d;
      CALL_API("post",API_URL+"ottdeletequebank.json?cau="+udata.userid+"&clId="+this.props.clId+"&qbId="+conqsnid).then((res)=>{
      // console.log(res);
      this.props.showSnackbar(res.data.ottresp.msg);
      this.fetchQuest();
      this.fetchQuestBank();
    })

}


 copyAbleTable=()=>{
     var ds=[];
var text=[];

document.oncontextmenu = function (e) {
    e.preventDefault();
return false;
}
$('.grid-canvas .slick-cell').mousedown(function(event) {
    event.preventDefault();
    // console.log(event);
    switch (event.which) {
        case 3:
        text=[];
            // getData($(this));
            makeMenu(event.pageY,event.pageX,$(this));
            break;
        default:
    }
return false;
});

function makeMenu(posY,posX,_this){
  window.selected=_this;
  var temp=`<div class="s_menu" style="top:${posY}px;left:${posX}px">
    <ul>
      <li onclick="getRow(selected)">Copy Row</li>
      <li onclick="getColumn(selected)">Copy Column</li>
    </ul>
  </div>`;
  $('.s_menu').remove();
  $('body').append(temp);
}

function getColumn(){

  $('.s_menu').remove();
  
  window.selected.parents('.ui-widget-content').parents('.grid-canvas').find('.ui-widget-content').each((e,i)=>{
// console.log($(i).find('div')[window.selected.index()]);
var divs=$(i).find('div')[window.selected.index()];
    text.push($(divs).text());
 
});
  
    var str=text.join(', ');
  copyTextToClipboard(str.toString());
}


function getRow(_this){
  // console.log(_this); 
  $('.s_menu').remove();
  _this.parents('.ui-widget-content').find('.slick-cell').each((i,e)=>{
    text.push($(e).text());
    // console.log(text);
  });
  text.pop();
    var str=text.join(', ');
  copyTextToClipboard(str.toString());
}
window.getColumn=getColumn;
window.getRow=getRow;


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
    // console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    // console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    // console.error('Async: Could not copy text: ', err);
  });
}
   }
  
  loadCat=()=>{


      if($('#myGrid2').length<=0){
        return
      }
  var dataView;
  var grid;
  var   __this=this;
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
  var isSelectAllCheckboxHidden = false;
  var isSelectAllShownAsColumnTitle = false;

  checkboxSelector = new Slick.CheckboxSelectColumn({
    cssClass: "slick-cell-checkboxsel",
    hideInColumnTitleRow: !isSelectAllShownAsColumnTitle,
    hideInFilterHeaderRow: isSelectAllShownAsColumnTitle,

    // make only 2nd rows as selectable by using the override function
    selectableOverride: function(row, dataContext, grid) {
      return (dataContext.id % 2 === 1);
    }
  });

  // columns.push(checkboxSelector.getColumnDefinition());

window.deleteContest=__this.deleteContest;
window.deletQbank=__this.deletQbank;
window.editQuestion=__this.editQuestion;
 
  function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
       if(__this.state.tabvalue===0 || __this.state.tabvalue===1){

        return `<div class="myIcon">
     <button class="del" onClick="window.editQuestion(${row})"><img src="${edit}" alt="" /></button>
      <button class="del" onClick="window.deletQbank(${row})"><img src="${delete_icon}" alt="" /></button>
         </div>`;
       }
    }
    
  function imageFormater(row, cell, value, columnDef, dataContext) {
        return `<img style="width:100px;height:100px" src="${value}" alt=""/>`;
  }


   





 
var head=[
{name:"Marchent Id",key:"mercId",formatter: formatter},
{name:"Marchent Product Id",key:"mercProdid",formatter: formatter},
{name:"Product Id Seller Site",key:"prodIdSelrsite",formatter: formatter},
{name:"Product Category",key:"prodCat",formatter: formatter},
{name:"Product Sub Category",key:"prodSubcat",formatter: formatter},
{name:"Product Name",key:"prodName",formatter: formatter},
{name:"Product Description",key:"prodDesc",formatter: formatter},
{name:"Unit Value",key:"unitValue",formatter: formatter},
{name:"Price Per Unit",key:"pricePerUnit",formatter: formatter},
{name:"Unit Type",key:"unitType",formatter: formatter},
{name:"prodImgUrl",key:"prodImgUrl",formatter: imageFormater},
{name:"Status",key:"status",formatter: formatter},
{name:"Created By",key:"creby",formatter: formatter},
{name:"Updated By",key:"updby",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Updated Date",key:"upDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
]



 for (var i = 0; i < head.length; i++) {
    columns.push({
      id: head[i].key,
      name: head[i].name,
      field: head[i].key,
      width: head[i].width?head[i].width:100,
      formatter: head[i].formatter
    });
  }

  function filter(item) {
   
   
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
    if(datas==null){
      return;
    }
    for (var i = 0; i <datas.length; i++) {
      // console.log(i);
      var d = (data[i] = {});
      d["id"] = i;
      d["mercId"] = datas[i].mercId;
      d["mercProdid"] = datas[i].mercProdid;
      d["prodIdSelrsite"] = datas[i].prodIdSelrsite;
      d["prodCat"] = datas[i].prodCat;
      d["prodSubcat"] = datas[i].prodSubcat;
      d["prodName"] = datas[i].prodName;
      d["prodDesc"] = datas[i].prodDesc;
      d["unitValue"] = datas[i].unitValue;
      d["pricePerUnit"] = datas[i].pricePerUnit;
      d["unitType"] = datas[i].unitType;
      d["prodImgUrl"] = datas[i].prodImgUrl;
      d["status"] = datas[i].status;
     
      d["creby"] = datas[i].creby;
      d["updby"] = datas[i].updby;
      d["crDateTimeStr"] = datas[i].crDateTimeStr;
      d["upDateTimeStr"] = datas[i].upDateTimeStr;
      
      d["Action"] = datas[i].action;
      for (var j = 0; j < columns.length; j++) {
        d[j] = Math.round(Math.random() * 10);
      }
    }
    // console.log(data,datas);
    dataView = new Slick.Data.DataView();
    // if($('#myGrid2').length<=0){
    //   return;
    // }
    window.data=data;
    window.dataView=dataView;

    grid = new Slick.Grid("#myGrid2", dataView, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: false}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
    // var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));
      // dataView.setPagingOptions({ pageSize: 7 });
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );

 

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

      // console.log("Previously Selected Rows: " + previousSelectedRows.toString());
      // console.log("Selected Rows: " + sortedSelectedRows.toString());
      $('#selectedRows').text(sortedSelectedRows.toString());
    });

 $(grid.getHeaderRow()).on("keyup", ":input", function (e) {
              var keyCode = (e.keyCode ? e.keyCode : e.which);
      var columnId = $(this).data("columnId");
     var val=$.trim($(this).val());
       p=p.filter((e)=>{
        return !e.includes(columnId+":")
      });
     p.push(columnId+":"+val)
     // console.log(p.join(","));
     __this.setState({
      fil:p.join(",")+","
     },()=>{
        if (keyCode == 13) {


   var loadingIndicator;

    if (!loadingIndicator) {

   var $g = $('.new_loading');
        loadingIndicator = $("<span class='loading-indicator'><label>Loading...</label></span>");
       $g.append(loadingIndicator);

      
      }
      loadingIndicator.show();


          __this.getCat(loadingIndicator);

        }
      $(this).val($(this).val());
     })
     // console.log(dataView);
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
   
  }

deleteCat=(id)=>{
var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {cattype}=d;
    CALL_API("get",API_URL+"ottdeletecateegory.json?clId=AMIT202002CID&cau="+udata.userid+"cattype="+cattype).then((res)=>{
      if(res.data.ottresp.sts==1){
        this.setState({
          isError:true,
          errorMsg:res.data.ottresp.msg
        });
        this.getCat()
      }
  })
}

  handleErrorClose=()=>{
     this.setState({
         errorMsg:"",
         isError:false
       })
  }

  handleTab = (event, value) => {
    this.setState({ tabvalue:value },()=>{
        if(value==0){
         this.fetchQuest();
         this.fetchQuestBank()
        }
        if(value==1){
         
         this.fetchQuest();
         this.fetchQuestBank()
        }
    });
  };


  addFromBank=()=>{
    const {qsnbnkid}=subcatdata[this.state.selectedRows[0]];
    // console.log(subcatdata[this.state.selectedRows[0]]);

  CALL_API("post",API_URL+"snwAddContQuestFromBank.json?cau="+udata.userid+"&clId="+this.props.clId+"&coId="+this.props.coId+"&qbId="+qsnbnkid).then((res)=>{
      // console.log(res);
      this.fetchQuestBank();
      this.fetchQuest();
         // this.fetchQuestBank()
      // this.handleClose();

      if(res.data.ottresp.sts==0){
        message.error(res.data.ottresp.msg);
        return;
      }
      this.props.showSnackbar(res.data.ottresp.msg);
    })

  }



 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.fetchQuest();
  });
 }

refresh=()=>{
  columnFilters={};
  columnFilters2={};

   this.setState({
    fil:"",
    fil2:""
   },()=>{
          this.fetchQuest();
   })    
   }

refresh2=()=>{
  // console.log("aaaaaaa");
  columnFilters2={};

   this.setState({
    fil2:""
   },()=>{
          this.fetchQuestBank();
   })    
   }



 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.fetchQuest()
  })
 }


 goLast=()=>{
 if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:this.state.totalPages
  },()=>{
    this.fetchQuest()
  })  
 }
 goFirst=()=>{
 if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:1
  },()=>{
    this.fetchQuest()
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
      <Dialog
          open={this.props.addquestion}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>

          {tabvalue==0 && <DialogTitle id="scroll-dialog-title">Merchant Product</DialogTitle>}
          {tabvalue==1 && <DialogTitle id="scroll-dialog-title"> Question Bank Questions</DialogTitle>}

          <DialogContent>
      
         <Tabs
            value={tabvalue}
            onChange={this.handleTab}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Add Product" />

            </Tabs>
          

    


          {tabvalue===0 && 
            <div class="form">
              

          <div style={{width:'100%',padding:10}}>

            <div className="flex_div">
            <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Product Name</InputLabel>
                <Input id="name-simple" name="prodname" value={this.state.prodname} onChange={this.handleChange} />
              </FormControl>
              </div>

          <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Product Description</InputLabel>
                <Input id="name-simple" name="proddesc" value={this.state.proddesc} onChange={this.handleChange} />
              </FormControl>
              </div>
            </div>

            <div className="flex_div">

            <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Unit Value</InputLabel>
                <Input id="name-simple" name="unitvalue" value={this.state.unitvalue} onChange={this.handleChange} />
              </FormControl>
              </div>

            <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Price Per Unit</InputLabel>
                <Input id="name-simple" name="priceperunit" value={this.state.priceperunit} onChange={this.handleChange} />
              </FormControl>
              </div>
            </div>

            <div className="flex_div">

            <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Unit Type</InputLabel>


                 <Select
              value={this.state.unittype}
          helperText="this field is required"
              onChange={this.handleChange}
              inputProps={{
                name: 'unittype',
                id: 'unittype',
              }}
            >
            <MenuItem value="Nos">Nos</MenuItem>
            </Select>

              </FormControl>
              </div>
    
        <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">prodimageurl</InputLabel>
                <Input id="name-simple" name="prodimageurl" value={this.state.prodimageurl} onChange={this.handleChange} />
              </FormControl>
              </div>
            </div>

            <div className="flex_div">
                <div style={{paddingLeft:10,paddingRight:10,marginTop:16,width:'100%'}}>
                <Input type="file" id="name-simple" name="file"  onChange={this.handleFilechange} />
              </div>
    
     <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Product Id Seller Site</InputLabel>
                <Input id="name-simple" name="prodidselrsite" value={this.state.prodidselrsite} onChange={this.handleChange} />
              </FormControl>
              </div>
            </div>



    
      <div class="btn_center">
            {!this.state.isEdit && 
            <Button variant="contained"   onClick={this.insertQuestion} color="primary" className={classes.button}>
              ADD
            </Button>
              }

            {this.state.isEdit && 
            <Button variant="contained"   onClick={this.saveQuestion} color="primary" className={classes.button}>
              Update
            </Button>
              }
      </div>

              </div>
              </div>
          }



   {tabvalue===1 && 
            <div class="form ques_wrap">
       <div className="noLink" onClick={this.refresh2}>Reset Filter</div>

              <div id="loading3">
              <div id="myGrid3" className="myGrid" style={{width:'100%',height:200}}></div>
        </div>
        
          <Pager
        isPrev={this.state.isPrev1}
    goFirst={this.goFirst1}
    isNext={this.state.isNext1}
    prev={this.prev1}
    next={this.next1}
    goLast={this.goLast1}
    totalPages={this.state.totalPages1}
    pageNum={this.state.pageNum1}
    totalRows={this.state.totalRows1}
  />
        <br />
      <div class="btn_center">

          <Button variant="contained"   onClick={this.addFromBank} color="primary" className={classes.button}>
              ADD
            </Button>

              </div>
              </div>

          }
    
        {/* <Divider style={{margin:10}} />*/}
        {tabvalue === 0 && 
        <div class="ques_wrap">   
       <div className="noLink" onClick={this.refresh}>Reset Filter</div>
    
      <div id="loading" className="new_loading">
         <div id="myGrid2" className="myGrid" style={{width:'100%',height:200}}></div>
      </div>
    
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

       </div>}

   {tabvalue === 1 && 
        <div class="ques_wrap">   
       <div className="noLink" onClick={this.refresh}>Reset Filter</div>
    
        <div id="loading" className="new_loading">
         <div id="myGrid2" className="myGrid" style={{width:'100%',height:200}}></div>
      </div>
    
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

       </div>}
          
</DialogContent>
        </Dialog>

    </Fragment>
  );
  }
}

Addquestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Addquestion);
