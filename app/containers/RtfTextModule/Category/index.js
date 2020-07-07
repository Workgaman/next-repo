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

import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';
import moment from 'moment';
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';
import {message} from 'antd'
import AppTable from 'enl-components/Table';

  var columnFilters = {};
    var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}
var p=[];

var cs;
let id = 0;




 function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
         <button class="del" onClick="window.delete(${row})"><img src="${delete_icon}" alt="" /></button>
        </div>`;
    }
    


function stsformatter(row, cell, value, columnDef, dataContext){
    return value?"Active":"Delete"
}


var head2=[
{name:"Category ",key:"cattype",formatter: formatter},
{name:"Sub category Name ",key:"subcattype",formatter: formatter},
{name:"desc",key:"subcatdesc",formatter: formatter},
{name:"Status",key:"isactive",formatter: stsformatter},
{name:"Created By",key:"creby",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
]
var head=[
{name:"Name",key:"cattype",formatter: formatter},
{name:"desc",key:"catdesc",formatter: formatter},
{name:"Status",key:"isactive",formatter: stsformatter},
{name:"Created By",key:"creby",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
]


let datas = [];

let subcatdata = [];

class  Category extends React.Component  {
   state = {
    open: false,
    type:"regular",
    orientation:"vertical",
    scroll: 'paper',
    tabvalue:0,
    fil:"",
    pgNo:1
    };

   handleRadio= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false,showError:false });
  };
  handleChange = event => {
    var e=event;
    this.setState({ [event.target.name]: event.target.value },()=>{
      if(e.target){
      if(e.target.name=="catty"){
        this.getSubcat();
      }
      }
    });
  

  };

   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount(){
    /*Get Catogery*/
    this.getCat();
    
}
addCat=()=>{
  const {cattype,catdesc,fil}=this.state;

    if(!cattype){
      this.setState({
        showError:true
      });
      message.error("Category Should not be empty!")
      return;
    }
    if(!catdesc){
      this.setState({
        showError:true
      });
      message.error("Description Should not be empty!")
      return;
    }

CALL_API("post",API_URL+"ottaddcategory.json?clId=AMIT202002CID&cattype="+cattype+"&catdesc="+catdesc).then((res)=>{
      if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
          
     }else{
          message.success("Category Added Successful");
        this.setState({
          cattype:"",
          catdesc:"",
          showError:false
        });
        this.getCat();
        this.handleClose();
      }
    });
}


changeFil=(fil)=>{
  this.setState({
    fil
  },()=>{
        this.getCat();  
  });
 }

  getCat=()=>{
     this.setState({
      showTable:false
      });

CALL_API("post",API_URL+"ottgetallcategory.json?clId=AMIT202002CID&sts=TRUE&pgNo="+this.state.pgNo+"&hfilter="+this.state.fil).then((res)=>{
       datas=res.data.ottresp.catlist;
       if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg)
       }
        this.setState({
          catlist:datas
        });
        this.setState({
        isNext:this.state.pgNo<res.data.ottresp.pagination.totalPages,
        isPrev:this.state.pgNo>1,
        totalRows:res.data.ottresp.pagination.totalRows,
        totalPages:res.data.ottresp.pagination.totalPages,
        pageNum:res.data.ottresp.pagination.pageNum,
        datas,
        showTable:true
      })
      // this.loadCat();
      $('.loading-indicator').remove();

    }).catch(()=>{
        message.error("Something Went Worng!")
    })
  }
  
  componentWillUnmount(){
      $('.s_menu').remove();
  }

  savesubCat=()=>{
    const {catty,subcattype,subcatdesc}=this.state;
    //console.log(catty);
    if(!catty){
      this.setState({
        showError:true
      });
      message.error("Category Should not be empty!")
      return;
    }
    if(!subcattype){
      this.setState({
        showError:true
      });
      message.error("Sub Category Should not be empty!")
      return;
    }
        if(!subcatdesc){
      this.setState({
        showError:true
      });
      message.error("Description  Should not be empty!")
      return;
    }
    CALL_API("post",API_URL+"ottaddsubcategory.json?clId=AMIT202002CID&sts=TRUE&cattype="+catty+"&subcattype="+subcattype+"&subcatdesc="+subcatdesc).then((res)=>{
     if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
     }else{
        this.getSubcat();
          message.success(res.data.ottresp.msg);

        this.setState({
          catty:"",
          cattype:"",
          subcattype:"",
          subcatdesc:"",
          showError:false
        });
        this.handleClose();
      }

  })
  }

  getSubcat=(cat)=>{
    var cats=cat?cat:this.state.catty;
    var udata=localStorage.user_data?JSON.parse(localStorage.user_data):{}
    const {fil}=this.state

CALL_API("post",API_URL+"ottgetallSubcategory.json?clId=AMIT202002CID&sts=TRUE&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
  //console.log(res);
  if(res.data.ottresp.sts===0){
          message.error(res.data.ottresp.msg);
      

     }
  var subcats=res.data.ottresp.sCatlist
  subcatdata=subcats;

    this.setState({
        isNext:this.state.pgNo<res.data.ottresp.pagination.totalPages,
        isPrev:this.state.pgNo>1,
        totalRows:res.data.ottresp.pagination.totalRows,
        totalPages:res.data.ottresp.pagination.totalPages,
        pageNum:res.data.ottresp.pagination.pageNum
      })
    
  $('.loading-indicator').remove();
    this.loadSubcat();
})
  }


 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.getCat()
    this.getSubcat()
  });

 }
 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.getCat()
    this.getSubcat()
  })
 }

  loadSubcat=()=>{

      if($('#myGrid').length<=0){
        return
      }
    // clearInterval(cs)
    var __this =this;;
  var dataView;
  var grid;
  var data = [];
  var options = {
    enableCellNavigation: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    rowHeight: 40,
    forceFitColumns:window.innerWidth<1024?false:true,  
    topPanelHeight:80, 
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

window.delete=this.deletesubcCat;


  // columns.push(checkboxSelector.getColumnDefinition());

 

var head=head2;


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
      d["cattype"] = subcatdata[i].cattype;
      d["subcattype"] = subcatdata[i].subcattype;
      d["subcatdesc"] = subcatdata[i].subcatdesc;
      d["isactive"] = subcatdata[i].isactive;
      d["creby"] = subcatdata[i].creby;
      d["crDateTimeStr"] = subcatdata[i].crDateTimeStr;
      d["Action"] = `<button type=\"button\" onclick=\"alert('a " + 1 + "')\">s</button>`;;
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
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: false}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);

      // dataView.setPagingOptions({ pageSize: 7 });
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );

  var  resizer = new Slick.Plugins.Resizer({
        container: '#loading', // DOM element selector, can be an ID or a class
        rightPadding: 5,    // defaults to 0
        bottomPadding: 10,  // defaults to 20
        minHeight: 350,     // defaults to 180
        minWidth: 250,      // defaults to 300
      });
      grid.registerPlugin(resizer)


    // var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

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
      //console.log("Selected Rows: " + sortedSelectedRows.toString());
      $('#selectedRows').text(sortedSelectedRows.toString());
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
      __this.getSubcat(loadingIndicator)

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
  })
  
   this.copyAbleTable();

  }

  loadCat=()=>{


      if($('#myGrid').length<=0){
        return
      }
    // clearInterval(cs);
  var dataView;
  var grid;
  var data = [];
var __this =this;

  var options = {
    enableCellNavigation: true,
    showHeaderRow: true,
    headerRowHeight: 30,
    rowHeight: 40,
    forceFitColumns:window.innerWidth<1024?false:true,  
    topPanelHeight:80, 
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
window.deleteCat=this.deleteCat;
window.editCat=this.editCat;

  function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       <button class="del" onClick="window.deleteCat(${row})"><img src="${delete_icon}" alt="" /></button>
        </div>`;
    }
    
    function stsformatter(row, cell, value, columnDef, dataContext){
    return value?"Active":"Delete"
}




var head= head2;



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
      d["cattype"] = datas[i].cattype;
      d["catdesc"] = datas[i].catdesc;
      d["isactive"] = datas[i].isactive;
      d["creby"] = datas[i].creby;
      d["crDateTimeStr"] = datas[i].crDateTimeStr;
      d["Action"] = `<button type=\"button\" onclick=\"alert('a " + 1 + "')\">s</button>`;;
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
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: false}));
    grid.registerPlugin(checkboxSelector);

    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
          // dataView.setPagingOptions({ pageSize: 7 });
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );
  var  resizer = new Slick.Plugins.Resizer({
        container: '#loading', // DOM element selector, can be an ID or a class
        rightPadding: 5,    // defaults to 0
        bottomPadding: 10,  // defaults to 20
        minHeight: 350,     // defaults to 180
      });
      grid.registerPlugin(resizer)


    // var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

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
      //console.log("Selected Rows: " + sortedSelectedRows.toString());
      $('#selectedRows').text(sortedSelectedRows.toString());
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
      __this.getCat(loadingIndicator)
      
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
  })
   this.copyAbleTable();
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
  $('.s_menu').remove();

  $('.slick-row.active').removeClass('active');
  window.selected.parent().addClass('active');
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

editsubcCat=(id)=>{
var d=subcatdata.filter((e,i)=>{
      return i==id;        
    })[0];

  //console.log(d);
}
  

deletesubcCat=async (id)=>{
   var cnf=  await  window.confirm("Are you sure?")
 if(!cnf){
   return
 }
var d=subcatdata.filter((e,i)=>{
      return i==id;        
    })[0];
console.log(subcatdata);
   const {subcattype,cattype}=d;
 CALL_API("get",API_URL+"ottdeletesubcateegoryforcat.json?clId=AMIT202002CID&cattype="+cattype+"&subcattype="+subcattype).then((res)=>{
      if(res.data.ottresp.sts==1){
          message.success("Deleted Successfully");
        this.getSubcat(cattype)
      }
  });

}
editCat=(id)=>{
var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
  const{cattype,catdesc}=d;
  this.setState({
    cattype,catdesc,isEdit:true
  })
  //console.log(d);
}
updateCat=()=>{
  const {cattype,catdesc}=this.state;

}
deleteCat=async (id)=>{
   var cnf=  await window.confirm("Are you sure?")
 if(!cnf){
   return
 }
var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
   const {cattype}=d;

CALL_API("get",API_URL+"ottdeletecateegory.json?clId=AMIT202002CID&cattype="+cattype).then((res)=>{
      if(res.data.ottresp.sts==1){
        this.setState({
          catty:cattype
        });
          message.success(res.data.ottresp.msg);

        this.getCat()
      }

      if(res.data.ottresp.sts===0){
          message.success(res.data.ottresp.msg);
     }
  }).catch(()=>{
          message.error("Something Went Worng!");
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
          columnFilters={};
          p=[];
          this.setState({
            fil:""
          })

            this.loadCat();
        }
        if(value==1){
          // this.loadSubcat()
          // this.getSubcat();
          this.refreshsubCat();
        }
    });
  };
refreshsubCat=()=>{
  columnFilters={};
  p=[];
   this.setState({
    fil:""
   },()=>{
    this.getSubcat();
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
        
         <Tabs
            value={tabvalue}
            onChange={this.handleTab}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Manage Category " />
            <Tab label="Manage Sub  Category " />
            </Tabs>
          
         


  <Dialog
          open={open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
           
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
          {tabvalue==0 && <DialogTitle id="scroll-dialog-title"> Add Category</DialogTitle>}
          {tabvalue==1 && <DialogTitle id="scroll-dialog-title"> Add Sub Category</DialogTitle>}

           <DialogContent >        
          {tabvalue===0 && 
            <div class="form">
              <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Name</InputLabel>
                <Input id="name-simple"  error={this.state.showError && !this.state.cattype} name="cattype" value={this.state.cattype} onChange={this.handleChange} />
              </FormControl>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Description</InputLabel>
                <Input id="name-simple"  error={this.state.showError && !this.state.catdesc} multiline="true" name="catdesc" value={this.state.catdesc} onChange={this.handleChange} />
              </FormControl>
              
           {!this.state.isEdit && <Button variant="contained"   onClick={this.addCat} color="primary" className={classes.button}>
              Add
            </Button>
          }

           {this.state.isEdit && <Button variant="contained"   onClick={this.updateCat} color="primary" className={classes.button}>
              Update
            </Button>
          }


              </div>
              </div>
          }



   {tabvalue===1 && 
            <div class="form">
              <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
          

<FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Category</InputLabel>
            <Select
              value={this.state.catty}
              error={this.state.showError && !this.state.catty}
              onChange={this.handleChange}
              inputProps={{
                name: 'catty',
                id: 'catty',
               }}
            >

             {this.state.catlist && this.state.catlist.map((e)=>{
              return <MenuItem value={e.cattype}>{e.cattype}</MenuItem>                
              })}
            </Select>
          </FormControl>

              <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Sub Category Name</InputLabel>
                <Input id="name-simple" error={this.state.showError && !this.state.subcattype} name="subcattype" value={this.state.subcattype} onChange={this.handleChange} />
              </FormControl>
            <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Description</InputLabel>
                <Input id="name-simple" multiline="true" error={this.state.showError && !this.state.subcatdesc} name="subcatdesc" value={this.state.subcatdesc} onChange={this.handleChange} />
              </FormControl>
              
            <Button variant="contained"  onClick={this.savesubCat} color="primary" className={classes.button}>
              Add
            </Button>
              </div>
              </div>
          }

 </DialogContent>
 </Dialog>








        {tabvalue === 0 && 
        <div class="ques_wrap">   
        <Paper className={classes.root} elevation={5} >
 {tabvalue==0 && <Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Category
          </Button>}
        


     <AppTable 
    showTable={this.state.showTable}
    changeFil={this.changeFil}
    getData={this.getCat}
    data={this.state.datas}
    head={head}
    editContent={this.editCat}
    deleteContest={this.deleteCat}
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

   {tabvalue === 1 && 
        <div class="ques_wrap">   
        <Paper className={classes.root} elevation={5} >
                {tabvalue==1 && <Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Sub  Category
          </Button>}
               <div className="noLink" onClick={this.refreshsubCat}>Reset Filter</div>
     <div id="loading">
       <div id="myGrid" style={{width:'100%',height:350}}></div>
       </div>
       
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

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);
