import React, { Fragment } from 'react';

const Pager = (props) => {
  const {
    isPrev,
    goFirst,
    isNext,
    prev,
    next,
    goLast,
    totalPages,
    pageNum,
    totalRows
  } = props;
  return (
    <div id="pager" style={{width:100,height:20}}> 
        <div className="slick-pager">
        <span className="slick-pager-nav">
        
        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={goFirst}>
        <span className={isPrev?"ui-icon ui-icon-seek-first":"ui-icon ui-icon-seek-first ui-state-disabled"} ></span>
        </span>

        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={prev}>
        <span className={isPrev?"ui-icon ui-icon-seek-prev":"ui-icon ui-icon-seek-prev ui-state-disabled"} ></span>
        </span>
        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={next}>
        <span className={isNext?"ui-icon ui-icon-seek-next":"ui-icon ui-icon-seek-next ui-state-disabled"}></span>
        </span>
  

        <span className="ui-state-default ui-corner-all ui-icon-container" onClick={goLast}>
        <span className={isNext?"ui-icon ui-icon-seek-end":"ui-icon ui-icon-seek-end ui-state-disabled"} ></span>
        </span>


        <span className="slick-pager-status">Showing Page {pageNum} of {totalPages}, Total Rows {totalRows}</span>
        </span>
        </div>
        </div>

  );
};



export default Pager;
