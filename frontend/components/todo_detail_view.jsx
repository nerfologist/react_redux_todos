import React from 'react';

class TodoDetailView extends React.Component {
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
  todo: React.PropTypes.object.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

export default TodoDetailView;
