import React from 'react';

const TodoListItem = ({ title }) => (
  <li>{title}</li>
);

TodoListItem.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default TodoListItem;
