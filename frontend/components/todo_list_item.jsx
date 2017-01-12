import React from 'react';

const TodoListItem = ({ id, title, body, done, removeTodo }) => (
  <li>
    {title}
    <button onClick={removeTodo.bind(null, id)}>Delete</button>
  </li>
);

TodoListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string,
  done: React.PropTypes.bool.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

export default TodoListItem;
