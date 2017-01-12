import React from 'react';

const TodoList = ({ todos }) => (
  <ul>
    { todos.map(todo => <li>{todo.title}</li>) }
  </ul>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default TodoList;
