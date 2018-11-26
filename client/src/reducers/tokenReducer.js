import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tokenReducer(state = initialState.token, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.token;
    case types.LOGOUT_SUCCESS:
      return "";

    default:
      return state;
  }

}
