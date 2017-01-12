import React from 'react';

import uniqueId from '../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(evt) {
    this.setState({ title: evt.currentTarget.value });
  }

  updateBody(evt) {
    this.setState({ body: evt.currentTarget.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const newTodo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(newTodo);

    this.setState({
      title: '',
      body: '',
      done: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          name="title"
          value={this.state.title}
          onChange={this.updateTitle} />
        <input type="text"
          name="body"
          value={this.state.body}
          onChange={this.updateBody} />
        <input type="submit" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  receiveTodo: React.PropTypes.func.isRequired
};

export default TodoForm;
