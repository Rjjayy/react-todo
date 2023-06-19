<<<<<<< Updated upstream
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
=======
import React from 'react'
 

function TodoListItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      <span>{props.text}</span>
>>>>>>> Stashed changes
    </li>
  );
}

export default TodoListItem;
