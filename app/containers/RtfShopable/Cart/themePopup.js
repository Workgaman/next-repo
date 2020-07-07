import React, { Fragment } from 'react';
import {Dialog,DialogTitle,DialogContent,FormControl,InputLabel,Input,DialogActions,Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default class  ThemePopup extends React.Component  {
  state={
  scroll: 'paper'
  }
  handleClose=()=>{
    // this.props.closePrize()
    this.props.slectTheme(this.state.active);
    this.setState({
      active:null
    })
  }
  select=(id)=>{
    console.log(id);
    this.setState({
      active:id
    })
  }
  render(){
    const {classes}=this.props;
    return (  <Dialog
          open={this.props.prizeOpen}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
         <div className="close_btn" onClick={this.handleClose}>
            <CloseIcon/>
          </div>
          <DialogTitle id="scroll-dialog-title">Select Theme</DialogTitle>
          <DialogContent>
          <div style={{width:'100%',padding:10}}>
              <div className="thme_wrap">
              {this.props.themes && this.props.themes.map((e)=>{
             return (
                  <div className={this.state.active==e.thmId?"thm_grid active":"thm_grid"}  onClick={()=>{this.select(e.thmId)}}>
                  <div className="inner">
                    <h4>{e.thmName}</h4>  
                    <img src={e.thmImgDesk} alt=""/>
                  </div>
                  </div>  
               )     
              })}
              </div>
          </div>
        </DialogContent>
        <DialogActions>
             <Button variant="contained"  onClick={this.handleClose} color="primary">
              Select
            </Button>
          </DialogActions>
          </Dialog>)
  }
}