import React from 'react';

import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
  <ul>
    { todos.map(todo => <TodoListItem title={todo.title} />) }
  </ul>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

export default TodoList;
