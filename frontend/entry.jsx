import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

const store = configureStore();

// TODO: just for testing!
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;
window.removeStep = removeStep;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
