import * as ACTION from "./Const.js"
import * as State from "./State.js"
import { push } from 'react-router-redux';
import * as OPENPOEMAIL from '../../../api/rpt/production/OpenPOEmail/OpenPOEmail';
import * as NORECV from '../../../api/rpt/production/OpenPONoReceivers/OpenPONoReceivers';
import * as MISC from "../../../const/Misc.js"
var _ = require('lodash');
var joins = require('lodash-joins');

//Supervisor-PLT-7

export function cancelApp() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.CancelApp()->top.`);
  }

 return (dispatch,getState) => {
      dispatch({ type:ACTION.INIT });
      dispatch(push('/'));
  };
}


export function reports() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.reports()->top.`);
  }

 return (dispatch,getState) => {
      dispatch({ type:ACTION.INIT });
      dispatch(push('/Reports'));
  };
}


export function init() {
  return {
    type: ACTION.INIT
  };
}

export function initNoState() {
  return {
    type: ACTION.INIT_NO_STATE
  };
}



export function OpenPOEmail() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.OpenPOEMail()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    OPENPOEMAIL.OpenPOEMail(disp,getSt);
  };
}
////////////////////////////////////////////////
export function OpenPOEmailMROToggle() {
  return {
    type: ACTION.OPENPO_EMAIL_MRO_TOGGLE
  };
}

export function OpenPOEmailVendorToggle() {
  return {
    type: ACTION.OPENPO_EMAIL_VENDOR_TOGGLE
  };
}

export function OpenPOPager() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.OpenPOPager()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.OpenPOPager(disp,getSt);
  };
}

export function OpenPOVendorEmail() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.OpenPOVendorEmail()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.OpenPOVendorEmail(disp,getSt);
  };
}

export function OpenPOVendorDateRange() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.OpenPOVendorDateRange()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.OpenPOVendorDateRange(disp,getSt);
  };
}

export function OpenPOVendorEmailReport() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.OpenPOVendorEmailReport()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.OpenPOVendorEmailReport(disp,getSt);
  };
}

export function setOpenPO(po) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setOpenPO()->top. ${po}`);
  }
  return {
    type: ACTION.SET_OPENPO,
    po: po
  };
}

export function setOpenPOSelect(select) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setOpenPOSelect()->top. ${select}`);
  }
  return {
    type: ACTION.SET_OPENPO_SELECT,
    select: select
  };
}



export function setOpenPODateStart(dateStart) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setOpenPODateStart()->top. ${dateStart}`);

  }

  return {
    type: ACTION.SET_OPENPO_DATE_START,
    dateStart: dateStart
  };
}

export function setOpenPODateEnd(dateEnd) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setOpenPODateEnd()->top. ${dateEnd}`);

  }

  return {
    type: ACTION.SET_OPENPO_DATE_END,
    dateEnd: dateEnd
  };
}

export function setOpenPOCurPage(curPage) {
  return {
    type: ACTION.SET_OPENPO_CURPAGE,
    curPage: curPage
  };
}
export function setOpenPOPrevPage() {
  return {
    type: ACTION.SET_OPENPO_PREVPAGE
  };
}
export function setOpenPONextPage() {
  return {
    type: ACTION.SET_OPENPO_NEXTPAGE
  };
}


export function toggleOpenPOSelected(poNumber) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.toggleOpenPOSelected()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.ToggleOpenPOSelected(disp,getSt,poNumber);
  };
}

export function toggleOpenPOVisible(poNumber) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.toggleOpenPOVisible()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.ToggleOpenPOVisible(disp,getSt,poNumber);
  };
}




/////////////////////////////////////////////
export function POStatusReport() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.POStatusReport()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.POStatusReport(disp,getSt);
  };
}

export function POVendorEmail() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.POVendorEmail()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.POVendorEmail(disp,getSt);
  };
}
////////////////CLOSEDPO
export function ClosedPO() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.ClosedPO()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.ClosedPO(disp,getSt);
  };
}

export function ClosedPOPrompt() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.ClosedPOPrompt()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.ClosedPOPrompt(disp,getSt);
  };
}

export function ClosedPODateRange() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.ClosedPODateRange()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    API.ClosedPODateRange(disp,getSt);
  };
}


export function setClosedPODateStart(dateStart) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setClosedPODateStart()->top. ${dateStart}`);

  }

  return {
    type: ACTION.SET_CLOSEDPO_DATE_START,
    dateStart: dateStart
  };
}

export function setClosedPODateEnd(dateEnd) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setClosedPODateEnd()->top. ${dateEnd}`);

  }

  return {
    type: ACTION.SET_CLOSEDPO_DATE_END,
    dateEnd: dateEnd
  };
}
//////////////////OPEN PO NO RECEIVERS

export function OpenPONoReceivers() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.NoReceivers()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    NORECV.NoReceivers(disp,getSt);
  };
}

export function NoReceiversPrompt() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.NoReceiversPrompt()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    NORECV.NoReceiversPrompt(disp,getSt);
  };
}

export function NoReceiversDateRange() {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.NoReceiversDateRange()->top.`);
  }

 return (dispatch,getState) => {
    var disp = dispatch;
    var getSt = getState;
    NORECV.NoReceiversDateRange(disp,getSt);
  };
}


export function setNoReceiversDateStart(dateStart) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setNoReceiversDateStart()->top. ${dateStart}`);

  }

  return {
    type: ACTION.SET_NORECEIVERS_DATE_START,
    dateStart: dateStart
  };
}

export function setNoReceiversDateEnd(dateEnd) {
  if ('development'==process.env.NODE_ENV) {
    console.log(`ACTIONS.setNoReceiversDateEnd()->top. ${dateEnd}`);

  }

  return {
    type: ACTION.SET_NORECEIVERS_DATE_END,
    dateEnd: dateEnd
  };
}
/////////////////////////////////////////////////////////////////
export function setProductCategoryStyle(category,style) {
  return {
    type: ACTION.SET_PRODUCTS_CATEGORY_STYLE,
    category: category,
    style:style
  };
}

export function setProgressBtn(goButton) {
  return {
    type: ACTION.SET_PROGRESS_BTN,
    progressBtn: progressBtn
  };
}



export function setState(state) {
  return {
    type: ACTION.SET_STATE,
    state: state
  };
}

export function setStatus(status) {
  return {
    type: ACTION.SET_STATUS,
    status: status
  };
}


