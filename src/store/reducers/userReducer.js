import {
  SET_CURRENT_USER
} from '../constant';

const initState = {};

export default function (state = initState, action) {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state
    };
  default:
    return state;
  }
}
