import React from "react";
import PropTypes from "prop-types";





function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {String(todo.title)}
          <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}


TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
console.log('todoList:', todoList);


export default TodoList;'
