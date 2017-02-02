import { push } from 'react-router-redux';

export function counter() {
 return (dispatch,getState) => {
      dispatch(push('/counter'));
  };
}

