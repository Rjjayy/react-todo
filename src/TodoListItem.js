import React from 'react'
 

function TodoListItem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      <span>{props.text}</span>
    </li>
  );
}

export default TodoListItem;
