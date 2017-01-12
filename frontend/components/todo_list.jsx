import React from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      { todos.map(todo => <TodoListItem title={todo.title} />) }
    </ul>
    <TodoForm receiveTodo={ receiveTodo } />
  </div>
);

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  receiveTodo: React.PropTypes.func.isRequired
};

export default TodoList;
