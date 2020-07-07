import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import styles from 'enl-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';  
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import {message} from 'antd'
import {base_url as API_URL,CALL_API} from 'enl-redux/actions/config';
import { getTodayContest,TodaysloadNextURL,changeData,getTodayQuestion,getJoinedCount,EndContest,ShopContestProduct,DisplayProd,HideProd } from 'enl-redux/actions/contest';
import {connect} from 'react-redux';
import { Checkbox } from 'antd';

import Pager from 'enl-components/Pager/';
var times;
class  TodaysContest extends React.Component  {
  state={
    loading:false,
    count:0,
    finalCount:0,
    options :[],
    selectedProd:[]
  }

  async  componentDidMount(){
    await this.props.getTodayContest();
     await this.props.changeData();
     await this.props.ShopContestProduct();


     if(this.props.contestProduct){

     if(this.props.contestProduct.length>0){      
       localStorage.setItem("merId",this.props.contestProduct[0].mercId);
     }
     }

     if(this.props.contestProduct){
      var b=[];
      this.props.contestProduct.forEach((e)=>{
        b.push({ label: e.prodName, value: e.mercProdid })        
      });
      this.setState({
        options:b
      })
     }
    console.log(this.props.contestProduct);
  }


componentWillUnmount(){
  window.worker.postMessage("stop");
  clearTimeout(times);
}
 HideProd=async()=>{
  this.setState({
    selectedProd:[]
  })
  await this.props.HideProd();
 }


next=async()=>{
    const{data,dataToShow}=this.props;
    await this.props.todaysloadNextURL();
    await this.props.changeData(this.props.nextdata);


        this.joinedUser();
        window.worker.postMessage("start");

        if(dataToShow.sts==0){
          console.log(dataToShow);
          message.error(dataToShow.msg);
          return;
        }

        if(dataToShow.btnText){ 
          if(dataToShow.btnText.includes("END")){
           
          this.endContest()
           return;
           
          }

          if(dataToShow.btnText.includes("QUESTION")){
            this.setState({
              finalCount:10
            })
          }else if(dataToShow.btnText.includes("COUNT")){
          this.setState({
              finalCount:3
            })
          }
          else if(dataToShow.btnText.includes("DECLARE")){
            this.setState({
              finalCount:0
            })
          }
          else{
            this.setState({
              finalCount:10
            })
          }

        }
      this.setCount();
    // await this.props.getTodayQuestion();
  }

endContest=async()=>{
  window.worker.postMessage("stop");
  await this.props.EndContest();
}


  joinedUser=async()=>{
    if(this.joinedUser){      
    await this.props.getJoinedCount();
    window.worker.onmessage=this.joinedUser;
    }else{
    window.worker.onmessage=()=>{
    if(this.joinedUser){      
      this.joinUser();
    }else{
      
    }
    }
    }
  }

  setCount=()=>{
    const {count,isStop}=this.state;
      this.setState({
        loading:true
      })
    setTimeout(()=>{
       this.setState({
        count:count+1,
        loading:true
      })

  if(count===this.state.finalCount){
      this.setState({
        count:0,
        loading:false
      })
      return;
    }
    this.setCount();
    
    },1000);

  }

  showProd=async(e)=>{
    if(this.state.selectedProd.length==0){
      message.error("Please select a product to display")
      return;
    }
    localStorage.prodId=this.state.selectedProd.join(',');
    await this.props.DisplayProd();
  }

  onChange=(e)=>{
    console.log(e);
    this.setState({
      selectedProd:e
    })
  }

  render(){
  const { classes,data,dataToShow,nextdata,joinUser,isEnd,summaryWinners,jackpotWinners,grandWinners,isProdConfig,contestProduct,answerCount} = this.props;
  const { loading,count } = this.state;
  console.log(dataToShow);
  return (
    <Fragment>
      <Helmet>
          <title>RTF Customer Dashboard</title>
        </Helmet>
    


   <div class="ques_wrap">
   <Paper className={classes.root} elevation={5} >
      <div className="text-right-btn">
        <Button  variant="contained" color="primary" onClick={this.endContest}    className={classes.button}>
             End Contest
        </Button> 
      </div>
 
   
  <div className="area_list_user">
     {data && data.contest &&  <h4>{data.contest.extName}</h4>}
         {data && data.contest && 
        <ul className="list_user">
        <li><span>Total User Count</span>    {joinUser.count}</li>
        <li><span>Grand Prize</span>   {data.contest.winRwdType}</li>
        <li><span>Reward {data.contest.sumRwdType} </span> {data.contest.sumRwdVal}</li>
        <li><span>Last Q Used Lifeline Count</span> {data.contest.lastQue}</li>
        <li><span>Question Size</span> {data.contest.qSize}</li>
        </ul>
        }
  </div>
  
   {isProdConfig &&
<div class="product_box">
 <h4>Select Porduct</h4>
  {contestProduct && 
  <Checkbox.Group value={this.state.selectedProd} options={this.state.options}  onChange={this.onChange} />
  }
</div>
}
  <div class="prodShowBtn">
   {isProdConfig &&
    <Button   variant="contained" color="primary"  onClick={this.showProd}  className={classes.button}>
      SHOW PRODUCT  
   </Button>
   }

  {isProdConfig &&
    <Button   style={{marginLeft:10}} variant="contained" color="primary"  onClick={this.HideProd}  className={classes.button}>
      HIDE PRODUCT  
   </Button>
   }

  </div>



<div class="question_box_wrap">
  {dataToShow && dataToShow.question   &&  
  <div className="question_box">
          <h4>{dataToShow.question.qsnseqno}. {dataToShow.question.qsntext}</h4>
        <ul className="question">
         
          {dataToShow.question.opa && 
          <li className={dataToShow.question.corans=="A" && "rightAns"} >A) {dataToShow.question.opa} 
          {dataToShow && answerCount && <span>{answerCount.optACount==null?0:answerCount.optACount}</span>}</li>
          }
          {dataToShow.question.opb && 
          <li className={dataToShow.question.corans=="B" && "rightAns"}>B) 
          {dataToShow.question.opb}
           {dataToShow && answerCount && <span>{answerCount.optACount==null?0:answerCount.optBCount}</span>}
           </li>
         }
          {dataToShow.question.opc && 

          <li className={dataToShow.question.corans=="C" && "rightAns"}>
          C) {dataToShow.question.opc}
                   {dataToShow && answerCount && <span>{answerCount.optACount==null?0:answerCount.optCCount}</span>}
                   </li>
           }
          {dataToShow.question.opd && 
          <li className={dataToShow.question.corans=="D" && "rightAns"}>
          D) {dataToShow.question.opd}
                   {dataToShow && answerCount && <span>{answerCount.optACount==null?0:answerCount.optDCount}</span>}
                   </li>
                 }
        </ul>
  </div>
    }


  {dataToShow && dataToShow.nxtQuestion   &&  
  <div className="question_box">
          <h4>{dataToShow.nxtQuestion.qsnseqno}. {dataToShow.nxtQuestion.qsntext}</h4>
        <ul className="question">
         
         {dataToShow.nxtQuestion.opa && 
          <li className={dataToShow.nxtQuestion.corans=="A" && "rightAns"} >A) {dataToShow.nxtQuestion.opa}</li>
         }
         {dataToShow.nxtQuestion.opb && 

          <li className={dataToShow.nxtQuestion.corans=="B" && "rightAns"}>B) 
          {dataToShow.nxtQuestion.opb}

           </li>
         }
         {dataToShow.nxtQuestion.opc && 

          <li className={dataToShow.nxtQuestion.corans=="C" && "rightAns"}>
          C) {dataToShow.nxtQuestion.opc}

                   </li>
         }
         {dataToShow.nxtQuestion.opd && 
          <li className={dataToShow.nxtQuestion.corans=="D" && "rightAns"}>
          D) {dataToShow.nxtQuestion.opd}
            
                   </li>
                 }
        </ul>
  </div>
    }


</div>

{summaryWinners && 
 <div className="summery">
 <marquee scrollmount="10">
      {
        summaryWinners && summaryWinners.map((e)=>{
          return <span>{e.email}</span>
        })
      }
 </marquee>
    </div>
      }

{jackpotWinners && 
 <div className="summery">
      {
         jackpotWinners && jackpotWinners.map((e)=>{
          return <span>{e.email}</span>
        })
      }
    </div>
}


  {nextdata && nextdata.grandWinners && <h4 className="gsummm">Grand Winner</h4>}

 <div className="summery">
      {
        grandWinners &&  grandWinners.map((e)=>{
          return <span>{e.cuId}</span>
        })
      }
      
    </div>


         {dataToShow && !dataToShow.nxtApi  || dataToShow.sts==0 && <h4 className="errorShow">{dataToShow.msg}</h4>}
         {data && data.sts==0  && <h4 className="errorShow">{dataToShow.msg}</h4>}
         {isEnd && <h4 className="errorShow">{data.msg}</h4>}



  <div className="bottomList">
    {dataToShow && dataToShow.btnText && <Button  disabled={loading} variant="contained" color="primary"  onClick={this.next}  className={classes.button}>
       {loading && count}{!loading && dataToShow.btnText}
  </Button>}
  </div>
    


     </Paper>
   </div>  
    </Fragment>
  );
  }
}

TodaysContest.propTypes = {
  classes: PropTypes.object.isRequired,
};

;
const mapStateToProps = state => ({
  data:state.get('contest').todayContest,
  nextdata:state.get('contest').nextdata,
  dataToShow:state.get('contest').dataToShow,
  joinUser:state.get('contest').joinUser,
  isEnd:state.get('contest').isEnd,
  summaryWinners:state.get('contest').summaryWinners,
  jackpotWinners:state.get('contest').jackpotWinners,
  grandWinners:state.get('contest').grandWinners,
  isProdConfig:state.get('contest').isProdConfig,
  contestProduct:state.get('contest').contestProduct,
  answerCount:state.get('contest').answerCount,

});

const mapDispatchToProps = dispatch => ({
  getTodayContest: bindActionCreators(getTodayContest, dispatch),
  todaysloadNextURL: bindActionCreators(TodaysloadNextURL, dispatch),
  changeData: bindActionCreators(changeData, dispatch),
  getTodayQuestion: bindActionCreators(getTodayQuestion, dispatch),
  getJoinedCount: bindActionCreators(getJoinedCount, dispatch),
  EndContest: bindActionCreators(EndContest, dispatch),
  ShopContestProduct: bindActionCreators(ShopContestProduct, dispatch),  
  DisplayProd: bindActionCreators(DisplayProd, dispatch),
  HideProd: bindActionCreators(HideProd, dispatch)

});

const Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysContest);

export default withStyles(styles)(Mapped);


