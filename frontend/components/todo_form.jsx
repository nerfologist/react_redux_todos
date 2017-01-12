import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" name="title"></input>
        <input type="text" name="body"></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default TodoForm;
