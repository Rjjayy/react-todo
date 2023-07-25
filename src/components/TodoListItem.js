import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoListItem.module.css";  

function TodoListItem({ todo, onRemoveTodo }) {
  function handleRemoveTodo() {
    onRemoveTodo(todo.id);
  }

  return (
    <li className={styles.ListItem}> {/* Use styles instead of style */}
      {todo.title}
      <button type="button" onClick={handleRemoveTodo}>
        Remove
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
