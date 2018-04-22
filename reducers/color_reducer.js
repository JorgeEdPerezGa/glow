// import {
//   ADD_COLOR
// } from '../actions';

export const color = (store = 0, action) => {
  switch (action.type) {
  case 'ADD_COLOR':
    return action.color;
  default:
    return store;
  }
};
