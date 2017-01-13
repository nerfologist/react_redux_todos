import React, { Component, PropTypes } from 'react';

class TodoDetailView extends Component {
  render() {
    const { removeTodo } = this.props;
    const { body } = this.props.todo;

    return (
      <div>
        <p>{body}</p>
        <button onClick={removeTodo}>
          Remove todo
        </button>
      </div>
    );
  }
}

TodoDetailView.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoDetailView;
