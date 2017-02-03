import { push } from 'react-router-redux';

export function counter() {
 return (dispatch,getState) => {
      dispatch(push('/counter'));
  };
}


export function port() {
 return (dispatch,getState) => {
      dispatch(push('/POReqTrans'));
  };
}

export function gr() {
 return (dispatch,getState) => {
      dispatch(push('/GenReceivers'));
  };
}