import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';

var p=[];
class DataTable extends React.Component {
  
  state={}

  componentDidMount(){

    this.makeTable();
  }
  onFilChange=(c,d)=>{
      this.props.changeFil(c,d)
  }
  
  makeTable=()=>{
    var datas=this.props.data?this.props.data:[];
    var columnFilters=this.props.columnFilters;
    var head=this.props.head;
      if($('#myGrid').length<=0){
        return
      }
      

    var dataView;
    var grid;
    var __this=this;
    var data = [];
    var columns = [];
    var options = {
      enableCellNavigation: true,
      showHeaderRow: true,
      headerRowHeight: 30,
      rowHeight: 40,
      topPanelHeight:80, 
      explicitInitialization: true,
      forceFitColumns:window.innerWidth<1024?false:true,
    };
    var checkboxSelector;
    var isSelectAllCheckboxHidden = true;
    var isSelectAllShownAsColumnTitle = true;
    var loader = new Slick.Data.RemoteModel();
    var loadingIndicator = null;



  checkboxSelector = new Slick.CheckboxSelectColumn({
    cssClass: "slick-cell-checkboxsel",
    hideInColumnTitleRow: !isSelectAllShownAsColumnTitle,
    hideInFilterHeaderRow: isSelectAllShownAsColumnTitle,
  });

if(__this.props.checkbox){
  columns.push(checkboxSelector.getColumnDefinition());
}







window.delete=__this.props.deleteContest;
window.edit=__this.props.editContent;
window.column=columns;

  function formatter(row, cell, value, columnDef, dataContext) {
        return value;
    }
      function buttonFormater(row, cell, value, columnDef, dataContext) {
        return `<div class="myIcon">
       
       <button class="edit" onClick="window.editContent(${row})">
       <img src="${edit}" alt="" />
       </button>
        <button class="del" onClick="window.deleteContest(${row})">
          <img src="${delete_icon}" alt="" />
       </button>
        </div>`;
    }
    

 



 for (var i = 0; i < head.length; i++) {
    columns.push({
      id: head[i].key,
      name: head[i].name,
      field: head[i].key,
      width: head[i].width?head[i].width:75,
      behavior: "selectAndMove",
          cssClass: "cell-reorder dnd",
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
    
    for (var i = 0; i < datas.length; i++) {
      var d = (data[i] = {});
      d["id"]=i
      Object.keys(datas[0]).forEach((e)=>{
        d[e]=datas[i][e]
      });
      d["Action"] = `<button type=\"button\" onclick=\"alert('a " + 1 + "')\">s</button>`;;
     }

    // console.log(data);
      console.log("hey",data);
    
    dataView = new Slick.Data.DataView();
    if($('#myGrid').length<=0){
      return;
    }
        grid = new Slick.Grid("#myGrid", dataView, columns, options);
    grid.setSelectionModel(new Slick.RowSelectionModel({selectActiveRow: true}));
    grid.registerPlugin(checkboxSelector);
    console.clear();
    var columnpicker = new Slick.Controls.ColumnPicker(columns, grid, options);
     console.log(columnpicker)

    
    columnpicker.destroy();
    columnpicker.init(grid);
     columnpicker.onColumnsChanged.subscribe((e)=>{
       console.log("hey");
     });
      // dataView.setPagingOptions({ pageSize: 10 });
        grid.setSelectionModel(new Slick.RowSelectionModel());
      grid.registerPlugin( new Slick.AutoTooltips({ enableForHeaderCells: true }) );



/*Movable move*/

  var moveRowsPlugin = new Slick.RowMoveManager({
    cancelEditOnDrag: true
  });


    moveRowsPlugin.onBeforeMoveRows.subscribe(function (e, data) {
    for (var i = 0; i < data.rows.length; i++) {
      // no point in moving before or after itself
      if (data.rows[i] == data.insertBefore || data.rows[i] == data.insertBefore - 1) {
        e.stopPropagation();
        return false;
      }
    }
    return true;
  });

  moveRowsPlugin.onMoveRows.subscribe(function (e, args) {
    var extractedRows = [], left, right;
    var rows = args.rows;
    var insertBefore = args.insertBefore;
    left = data.slice(0, insertBefore);
    right = data.slice(insertBefore, data.length);

    rows.sort(function(a,b) { return a-b; });

    for (var i = 0; i < rows.length; i++) {
      extractedRows.push(data[rows[i]]);
    }

    rows.reverse();

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (row < insertBefore) {
        left.splice(row, 1);
      } else {
        right.splice(row - insertBefore, 1);
      }
    }

    data = left.concat(extractedRows.concat(right));

    var selectedRows = [];
    for (var i = 0; i < rows.length; i++)
      selectedRows.push(left.length + i);

    grid.resetActiveCell();
    grid.setData(data);
    grid.setSelectedRows(selectedRows);
    grid.render();
  });

  grid.registerPlugin(moveRowsPlugin);
  grid.onDragInit.subscribe(function (e, dd) {
    // prevent the grid from cancelling drag'n'drop by default
    e.stopImmediatePropagation();
  });

  grid.onDragStart.subscribe(function (e, dd) {
    var cell = grid.getCellFromEvent(e);
    if (!cell) {
      return;
    }

    dd.row = cell.row;
    if (!data[dd.row]) {
      return;
    }

    if (Slick.GlobalEditorLock.isActive()) {
      return;
    }

    e.stopImmediatePropagation();
    dd.mode = "recycle";

    var selectedRows = grid.getSelectedRows();

    if (!selectedRows.length || $.inArray(dd.row, selectedRows) == -1) {
      selectedRows = [dd.row];
      grid.setSelectedRows(selectedRows);
    }

    dd.rows = selectedRows;
    dd.count = selectedRows.length;

    var proxy = $("<span></span>")
        .css({
          position: "absolute",
          display: "inline-block",
          padding: "4px 10px",
          background: "#e0e0e0",
          border: "1px solid gray",
          "z-index": 99999,
          "-moz-border-radius": "8px",
          "-moz-box-shadow": "2px 2px 6px silver"
        })
        .text("Drag to Recycle Bin to delete " + dd.count + " selected row(s)")
        .appendTo("body");

    dd.helper = proxy;

    $(dd.available).css("background", "pink");

    return proxy;
  });

  grid.onDrag.subscribe(function (e, dd) {
    if (dd.mode != "recycle") {
      return;
    }
    dd.helper.css({top: e.pageY + 5, left: e.pageX + 5});
  });

  grid.onDragEnd.subscribe(function (e, dd) {
    if (dd.mode != "recycle") {
      return;
    }
    dd.helper.remove();
    $(dd.available).css("background", "beige");
  });

  $.drop({mode: "mouse"});
  $("#dropzone")
      .bind("dropstart", function (e, dd) {
        if (dd.mode != "recycle") {
          return;
        }
        $(this).css("background", "yellow");
      })
      .bind("dropend", function (e, dd) {
        if (dd.mode != "recycle") {
          return;
        }
        $(dd.available).css("background", "pink");
      })
      .bind("drop", function (e, dd) {
        if (dd.mode != "recycle") {
          return;
        }
        var rowsToDelete = dd.rows.sort().reverse();
        for (var i = 0; i < rowsToDelete.length; i++) {
          data.splice(rowsToDelete[i], 1);
        }
        grid.invalidate();
        grid.setSelectedRows([]);
      });

/*end move*/
 var  resizer = new Slick.Plugins.Resizer({
        container: '#loading', // DOM element selector, can be an ID or a class
        rightPadding: 5,    // defaults to 0
        bottomPadding: 10,  // defaults to 20
        minHeight: 350,     // defaults to 180
      });
      grid.registerPlugin(resizer);


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

      console.log("Previously Selected Rows: " + previousSelectedRows.toString());
      console.log(datas[sortedSelectedRows]);
      $('#selectedRows').text(sortedSelectedRows.toString());
      __this.props.changeCheck({
        sortedSelectedRows:datas[sortedSelectedRows],
        coId:datas[sortedSelectedRows].coId,
        mercId:datas[sortedSelectedRows].mercId,
        clId:datas[sortedSelectedRows].clId,
        ansType:datas[sortedSelectedRows].ansType,
        qMode:datas[sortedSelectedRows].qMode,
        mercProdid:datas[sortedSelectedRows].mercProdid,
        coType:datas[sortedSelectedRows].coType,
        


      });



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
        __this.onFilChange(columnId,val);

   var loadingIndicator;

    if (!loadingIndicator) {

   var $g = $('#loading');
        loadingIndicator = $("<span class='loading-indicator'><label>Loading...</label></span>");
       $g.append(loadingIndicator);
      }
        loadingIndicator.show();
        // __this.props.getData(loadingIndicator);
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

grid.onClick.subscribe(function (e) {
  $('.s_menu').remove();
});
    grid.init();
    dataView.beginUpdate();
    dataView.setItems(data);
    dataView.setFilter(filter);
    window.dataView=dataView
    dataView.endUpdate();
  
  });

    this.copyAbleTable();
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
  render() {
    return (
     <div id="loading">
       <div id="myGrid" style={{width:'100%',height:350}}></div>
     </div>
    );
  }
}


export default DataTable;
