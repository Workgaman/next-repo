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
    type:"REGULAR",
    orientation:"vertical",
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
        qMode:"RANDOM",
        isElimination:false,
        qType:"REGULAR"
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
      themeImage:null,
      themeColor:"000",
      thmId:null,
      showError:false,
      elmType:false,
        qType:"REGULAR"
   });
  };
  handleChange = event => {
    if(!isNaN(event.target.value) && event.target.value<0){
      message.error("Number Should Not be Negative");
      this.setState({
         [event.target.name]:""   
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
   const {mercProdid,mercId}=d;
   var __this=this;
CALL_API("get",API_URL+"shopdeleteitemcustcart.json?clId=AMIT202002CID&prodId="+mercProdid+"&conId="+mercId+"&cau=user&cuId=lbernad@lbernad.com").then((res)=>{
      //console.log(res);
      if(res.data.shopresp.sts==1){
          message.success(res.data.shopresp.msg);
       

    __this.getContest()



      }else{
          message.error(res.data.shopresp.msg);

      }
    }).catch(()=>{
          message.error("Something Went Worng !");

    });
   }
  editContent=(id)=>{

    var d=datas.filter((e,i)=>{
      return i==id;        
    })[0];

   console.log(d);
   const {
    mercId,mercEmail,mercPhone,mrktPlce
  }=d;

    this.setState({
      mercid:mercId,mercemail:mercEmail,mercphone:mercPhone,mrktplce:mrktPlce,
        isEdit:true
    });
    this.handleOpen();
  }

  editContest=()=>{
  const { mercid,mercemail,mercphone,mrktplce}=this.state;

var url="shopEditMerchant.json?clId=AMIT202002CID&mercid="+mercid+"&mercemail="+mercemail+"&mercphone="+mercphone+"&mrktplce="+mrktplce;



   CALL_API("post",API_URL+url).then((res)=>{
     var result=res.data.shopresp;
     
    
    this.getContest()

   
 if(res.data.shopresp.sts==1){
        this.handleClose()
          message.success(res.data.shopresp.msg);
      }else{
          message.error(res.data.shopresp.msg);
      }
   }).catch((e)=>{
          message.error("Something Went Worng !");
   });

   

   // this.handleClose();
  }


  addContest=()=>{
   const {mercProdid,mercId}=this.state;
    var url="shopaddtocustcart.json?clId=AMIT202002CID&prodId="+mercProdid+"&conId="+mercId+"&cau=user&cuId=lbernad@lbernad.com";


   CALL_API("post",API_URL+url).then((res)=>{
     //console.log(res);
     var result=res.data.shopresp;
     if(res.data.shopresp.sts===0){
          message.error(res.data.shopresp.msg);
       
     }else{
          message.success("Merchant Added Successful");
     this.handleClose();
    this.getContest()
       

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


  openAdd=()=>{
    if(this.state.qMode){
      if(!this.state.qMode.includes("FIXED")){
          message.error("Questions can be added only to Fixed type contests");

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
     
    // this.getContest()

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



      d["mercId"] = datas[i].mercId;
      d["custId"] = datas[i].custId;
      d["mercProdid"] = datas[i].mercProdid;
      d["conId"] = datas[i].conId;
      d["buyUnits"] = datas[i].buyUnits;
      d["buyPrice"] = datas[i].buyPrice;
      d["status"] = datas[i].status;
      d["unitType"] = datas[i].unitType;

      d["ccy"] = datas[i].ccy;
      d["mrktPlce"] = datas[i].mrktPlce;
      d["mercSelrSite"] = datas[i].mercSelrSite;
      d["prodName"] = datas[i].prodName;
      d["prodIdSelrsite"] = datas[i].prodIdSelrsite;
      d["prodImgUrl"] = datas[i].prodImgUrl;

      d["placedOrder"] = datas[i].placedOrder;
      d["creby"] = datas[i].creby;
      d["crDateTimeStr"] = datas[i].crDateTimeStr;
      d["upDateTimeStr"] = datas[i].upDateTimeStr;

       
       
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
      console.log(sortedSelectedRows);  
      __this.setState({
        sortedSelectedRows:sortedSelectedRows,
        coId:datas[sortedSelectedRows].mercid,
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
  this.setState({
    thmId:thmId,
    popOpen:false
  })
}

  async componentDidMount(){
    this.getContest();
  }


  getContest=(loadingd)=>{
      const {fil}=this.state

      this.setState({
        showTable:false
      });

    const{pgNo}=this.state;

    CALL_API("post",API_URL+"shoplistcustcart.json?clId=AMIT202002CID&cau=user&cuId=lbernad@lbernad.com&pgNo="+this.state.pgNo+"&hfilter="+fil).then((res)=>{
  //console.log(res);
  if(res.data.shopresp.sts===0){
          message.error(res.data.shopresp.msg);
     }
   datas=res.data.shopresp.lst;

   if(res.data.shopresp.pagination){
   this.setState({
      isNext:this.state.pgNo<res.data.shopresp.pagination.totalPages,
      isPrev:this.state.pgNo>1,
      totalRows:res.data.shopresp.pagination.totalRows,
      totalPages:res.data.shopresp.pagination.totalPages,
      pageNum:res.data.shopresp.pagination.pageNum,
    })    
   }

   this.setState({
      datas:datas,
      showTable:true
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
CALL_API("post",API_URL+"snwstartcontest.json?clId=AMIT202002CID&coId="+this.state.coId).then((res)=>{
  // console.log(e);
  if(res.data.snwresp.sts===0){
            message.error(res.data.snwresp.msg);
    }else{
        this.getContest();
          message.success(res.data.snwresp.msg);
    }
});
}
endContest=()=>{
  if(!this.state.coId){
    message.error("Please select a contest");
    return;
  }
CALL_API("post",API_URL+"snwendcontest.json?clId=AMIT202002CID&coId="+this.state.coId).then((res)=>{
  // console.log(e);
  if(res.data.snwresp.sts===0){
          message.error(res.data.snwresp.msg);    
  }else{
        this.getContest();
          message.success(res.data.snwresp.msg);    
  }

});
}


changeCheck=(json)=>{
    this.setState(json);
  }

  render(){

  const { classes } = this.props;
  const { open,scroll,category,checkedA,value, selectedValue,showError  } = this.state;
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
{name:"Id",key:"mercId",formatter: formatter},
{name:"Customer Id",key:"custId",formatter: formatter},
{name:"mercProdid",key:"mercProdid",formatter: formatter},
{name:"conId",key:"conId",formatter: formatter},
{name:"buyUnits",key:"buyUnits",formatter: formatter},
{name:"buyPrice",key:"buyPrice",formatter: formatter},
{name:"unitType",key:"unitType",formatter: formatter},
{name:"mercSelrSite",key:"mercSelrSite",formatter: formatter},
{name:"prodName",key:"prodName",formatter: formatter},
{name:"prodIdSelrsite",key:"prodIdSelrsite",formatter: formatter},
{name:"prodImgUrl",key:"prodImgUrl",formatter: imageFormatter},
{name:"placedOrder",key:"placedOrder",formatter: formatter},
{name:"Status",key:"status",formatter: formatter},
{name:"Created By",key:"creby",formatter: formatter},
{name:"Updated By",key:"updby",formatter: formatter},
{name:"Created Date",key:"crDateTimeStr",formatter: formatter},
{name:"Updated Date",key:"upDateTimeStr",formatter: formatter},
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
        

      
     {
      /*

        <Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Merchant
        </Button>
        
      
       <Button  variant="contained" onClick={this.openAdd} color="primary"    className={classes.button}>
               Add Product
        </Button> 
     */}
      
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
          <DialogTitle id="scroll-dialog-title"> Add Merchant</DialogTitle>
       }
          <DialogContent>


         

      
 <div className="flex_div">

          <div style={{paddingLeft:10,paddingRight:10,flex:1}}>       
           <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Merchant Id</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.mercid && showError}
                helperText="this field is required"
                name="mercid"
                 value={this.state.mercid} onChange={this.handleChange} />
              </FormControl>
          </div>

<div style={{paddingLeft:10,paddingRight:10,flex:1}}>       
           
             <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Merchant Email</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.mercemail && showError}
                helperText="this field is required"
                name="mercemail"
                 value={this.state.mercemail} onChange={this.handleChange} />
              </FormControl>

          </div>

              </div>



 <div className="flex_div">

          <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
          <FormControl style={{width:'100%'}} className={classes.formControl}>
                <InputLabel htmlFor="name-simple">Merchant Phone</InputLabel>
                <Input  id="name-simple" 
                error={!this.state.mercphone && showError}
                helperText="this field is required"
                name="mercphone"
                 value={this.state.mercphone} onChange={this.handleChange} />
              </FormControl>
          </div>

            <div style={{paddingLeft:10,paddingRight:10,flex:1}}>
            <FormControl style={{width:'100%'}}  className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Market Place</InputLabel>
            

            <Select
              value={this.state.mrktplce}
                         error={!this.state.mrktplce && showError}
          helperText="this field is required"
              onChange={this.handleChange}
              inputProps={{
                name: 'mrktplce',
                id: 'mrktplce',
              }}
            >
            <MenuItem value="AMAZON">AMAZON</MenuItem>
            <MenuItem value="FLIPKART">FLIPKART</MenuItem>
            </Select>
          </FormControl>
            </div>
           
        
        
 
    

     
          </div>



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

{this.state.addquestion && <Addquestion mercId={this.state.mercId} showSnackbar={this.showSnackbar} clId={this.state.clId} addquestion={this.state.addquestion} ansType={this.state.ansType} closeAdd={this.closeAdd}/>}        
{this.state.prizeOpen && <PrizePopup classes={classes} coId={this.state.coId} closePrize={this.closePrize} prizeOpen={this.state.prizeOpen}/>}
<ThemePopup slectTheme={this.slectTheme} themes={this.state.themes} closePrize={this.closePop} prizeOpen={this.state.popOpen}/>

        <div className="btn_wrap_sec">
     <div className="flx_col">
<Button variant="contained"   onClick={this.handleOpen} color="primary" className={classes.button}>
              Add Merchant
        </Button>

      <Button  variant="contained" onClick={this.openAdd} color="primary"    className={classes.button}>
               Add Product
        </Button> 

           

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

