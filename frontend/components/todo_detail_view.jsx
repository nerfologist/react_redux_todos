import React, { Component, PropTypes } from 'react';

class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>detail</p>
    );
  }
}

TodoDetailView.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoDetailView;
