import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";


function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {String(todo.title)} {/* Convert title to a string */}
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

export default TodoList;
