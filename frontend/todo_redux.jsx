import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

const store = configureStore();

// TODO: just for testing!
window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

const App = () => (
  <div>
    My awesome Todos app
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
