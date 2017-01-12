import deepFreeze from 'deep-freeze';
import merge from 'lodash/merge';

import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const _initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};

const todosReducer = (state = _initialState, action) => {
  deepFreeze(state);

  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO: {
      let nextState = merge({}, state);
      nextState[action.todo.id] = action.todo;
      return nextState;
    }
    default: return state;
  }
};

export default todosReducer;
