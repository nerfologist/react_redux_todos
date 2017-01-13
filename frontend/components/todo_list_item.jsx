import React from 'react';

const toggleDone = todo => (
  Object.assign({}, todo, { done: !todo.done })
);

const TodoListItem = ({ todo, receiveTodo, removeTodo }) => (
  <li>
    {todo.title} (done: {todo.done ? 'true' : 'false'})
    <button onClick={removeTodo.bind(null, todo.id)}>
      Delete
    </button>
    <button onClick={receiveTodo.bind(null, toggleDone(todo))}>
      { todo.done ? 'Mark undone' : 'Mark done' }
    </button>
  </li>
);

TodoListItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  receiveTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

export default TodoListItem;
