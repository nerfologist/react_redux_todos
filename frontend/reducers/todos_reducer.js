import deepFreeze from 'deep-freeze';
import merge from 'lodash/merge';

import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const _initialState = {};

const todosReducer = (state = _initialState, action) => {
  deepFreeze(state);

  switch(action.type) {
    default: return state;
  }
};

export default todosReducer;
