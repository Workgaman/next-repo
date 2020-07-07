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
import {message} from 'antd'
import AppTable from 'enl-components/Table';
import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';
  var columnFilters = {};
  var p=[];
let id = 0;
let datas = [];

 function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       <button class="edit" onClick="window.edit(${row})"><img src="${edit}" alt="" /></button>
        </div>`;
    }


var head=[
{name:"Name",key:"key",formatter: formatter},
{name:"Value",key:"value",formatter: formatter},
{name:"Description ",key:"desc",formatter: formatter},
{name:"Updated By",key:"uBy",formatter: formatter},
{name:"Updated Date",key:"updDateTimeStr",formatter: formatter},
{name:"Action",key:"Action",formatter: buttonFormater},
]

class  Reward extends React.Component  {
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
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

   handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount(){
      // this.loadCat()
      this.refresh();
      // this.getProperties()
      // columnFilters={};
}

  updateProperties=(id)=>{
    //console.log(id);
    var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];
    //console.log(d);
   const {key,desc,value}=d;
    this.setState({
        isEdit:true,
        key,desc,value
    });
    this.handleOpen()
  }
  update=()=>{
   const {key,desc,value}=this.state;
   CALL_API("post",API_URL+"ottupdatecontestconfig.json?clId=AMIT202002CID&keyId="+key+"&keyVal="+value+"&descr="+desc).then((res)=>{
    message.success("Updated successfully");
    this.getProperties()
    this.handleClose();
    })


  }

  refresh=()=>{
     columnFilters={};
     p=[];
   this.setState({
    fil:""
   },()=>{
    this.getProperties();
   })  
  }

changeFil=(fil)=>{
  this.setState({
    fil
  },()=>{
        this.getProperties();  
  });
 }
  getProperties=(ind)=>{
  this.setState({
      showTable:false
      });

CALL_API("post",API_URL+"ottgetallcontestconfigs.json?clId=AMIT202002CID&pgNo="+this.state.pgNo+"&hfilter="+this.state.fil).then((res)=>{
       datas=res.data.ottresp.configs;
         this.setState({
      isNext:this.state.pgNo<res.data.ottresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.ottresp.pagination.totalRows,
      totalPages:res.data.ottresp.pagination.totalPages,
      pageNum:res.data.ottresp.pagination.pageNum,
      datas,
      showTable:true
      })
         if(ind){
          ind.remove();
         }
       // this.loadCat()
    })
  }


  loadCat=()=>{
    var __this=this;
    

      if($('#myGrid').length<=0){
        return
      }

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

  // columns.push(checkboxSelector.getColumnDefinition());

window.updateProperties=this.updateProperties;

 
      



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
      d["key"] = datas[i].key;
      d["desc"] = datas[i].desc ;
      d["value"] = datas[i].value;
      d["uBy"] = datas[i].uBy;
      d["updDateTimeStr"] = datas[i].updDateTimeStr;
      d["Action"] = `<button type=\"button\" onclick=\"alert('a " + 1 + "')\">s</button>`;;
      for (var j = 0; j < columns.length; j++) {
        d[j] = Math.round(Math.random() * 10);
      }
    }
    //console.log(data);
    dataView = new Slick.Data.DataView();
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
          __this.getProperties(loadingIndicator);
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
      __this.copyAbleTable();

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
  handleTab = (event, value) => {
    this.setState({ tabvalue:value },()=>{
        if(value==0){
            this.loadCat();
        }
        if(value==1){
          this.loadSubcat()
        }
    });
  };
handleClose=()=>{
  this.setState({
    open:false
  })
}

handleOpen=()=>{
  this.setState({
    open:true
  });
}



 next=()=>{
  if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)+1    
  },()=>{
    this.getProperties();
  });

 }
 prev=()=>{
  if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:Number(this.state.pgNo)-1    
  },()=>{
    this.getProperties()
  })
 }


 goLast=()=>{
 if(!this.state.isNext){
    return;
  }
  this.setState({
    pgNo:this.state.totalPages
  },()=>{
    this.getProperties()
  })  
 }
 goFirst=()=>{
 if(!this.state.isPrev){
    return;
  }
  this.setState({
    pgNo:1
  },()=>{
    this.getProperties()
  })  
 }





 refresh=()=>{
  columnFilters={};

   this.setState({
    fil:""
   },()=>{
    this.getProperties();
   })    
   }

  componentWillUnmount(){
      $('.s_menu').remove();
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




         
          
<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
          <DialogTitle id="scroll-dialog-title">Edit Property</DialogTitle>
          <DialogContent>
            <div class="form">
              <div style={{paddingLeft:10,paddingRight:10,width:'100%'}}>
             

              <lable className="mylabel">Name : {this.state.key}</lable>

                <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Description</InputLabel>
                <Input id="name-simple" multiline="false" name="desc" value={this.state.desc} onChange={this.handleChange} />
              </FormControl>

                <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Value</InputLabel>
                <Input id="name-simple" multiline="false" name="value" value={this.state.value} onChange={this.handleChange} />
              </FormControl>


              </div>
              </div>
              </DialogContent>
          <DialogActions>
             <Button variant="contained"  onClick={this.update} color="primary" className={classes.button}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
          


 


        {tabvalue === 0 && 
        <div class="ques_wrap">   
        <Paper className={classes.root} elevation={5} >
     
     <AppTable 
    showTable={this.state.showTable}
    changeFil={this.changeFil}
    getData={this.getProperties}
    data={this.state.datas}
    head={head}
    editContent={this.updateProperties}
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
