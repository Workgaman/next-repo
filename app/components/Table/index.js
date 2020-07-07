import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import delete_icon from 'enl-images/delete.png';
import edit from 'enl-images/edit.png';
import DataTable from './tableData';
import Loading from 'enl-components/Loading';
/*Column filter values */
var columnFilters = {};

/*Temp  Variable to store filter keys */
var p=[];

class AppTable extends React.Component {
  state={};
refresh=()=>{
  columnFilters={};
  p=[];
  this.setState({
    fil:""
    },()=>{
      this.props.changeFil("");
    });
  }

/*Filter change*/
  changeFil=(columnId,val)=>{
      p=p.filter((e)=>{
        return !e.includes(columnId+":")
      });
     p.push(columnId+":"+val)
     console.log(p);
      this.setState({
      fil:p.join(",")+","
     },()=>{
      this.props.changeFil(p.join(",")+",");
    
     });

  }

  componentDidMount(){
    this.refresh();
  }



  render() {
    const {
      changeFil,
      getData,
      data,
      showTable,
      refresh,
      editContent,
      deleteContest,
      head,
      changeCheck,
      checkbox
      }=this.props;

    

    return (
     <div id="table">
      {!showTable &&      <Loading/>}
      <div className="noLink" onClick={this.refresh}>Reset Filter</div>
      {showTable && 
      <DataTable 
      changeFil={this.changeFil} getData={getData} data={data}
      editContent={editContent}
      deleteContest={deleteContest}
      columnFilters={columnFilters}
      p={p}
      head={head}
      changeCheck={changeCheck}
      checkbox={checkbox}
      />
      }
     </div>
    );
  }
}


export default AppTable;
