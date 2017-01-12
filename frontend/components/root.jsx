import React from 'react';
import { Provider } from 'react-redux';

import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.any.isRequired
};

export default Root;
