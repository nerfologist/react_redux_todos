import React, { Component, PropTypes } from 'react';

class TodoDetailView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body } = this.props.todo;

    return (
      <p>{body}</p>
    );
  }
}

TodoDetailView.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoDetailView;
