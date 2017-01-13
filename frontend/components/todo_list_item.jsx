import React from 'react';

const toggleDone = todo => (
  Object.assign({}, todo, { done: !todo.done })
);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, receiveTodo } = this.props;
    const { title, done } = todo;

    return (
      <li>
        { title } (done: { done ? 'true' : 'false'})
        <button onClick={ receiveTodo.bind(null, toggleDone(todo)) }>
          { todo.done ? 'Mark undone' : 'Mark done' }
        </button>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  receiveTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

export default TodoListItem;
