import React from "react";
import style from "./TodoListItem.module.css";


function TodoListItem({ todo, onRemoveTodo }) {
  function handleRemoveTodo() {
    onRemoveTodo(todo.id);
  }

  return (
    <li className={style.ListItem}>
      {todo.title}
      <button type="button" onClick={handleRemoveTodo}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
