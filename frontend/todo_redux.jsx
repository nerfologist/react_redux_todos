import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const store = configureStore();

// TODO: just for testing!
window.store = store;

const App = () => (
  <div>
    My awesome Todos app
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
