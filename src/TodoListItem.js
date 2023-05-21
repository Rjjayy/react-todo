import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
  function handleRemoveTodo() {
    onRemoveTodo(todo.id);
  }

  return (
    <li>
      {todo.title}
      <button type="button" onClick={handleRemoveTodo}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
