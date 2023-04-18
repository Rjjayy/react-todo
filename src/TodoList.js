import React from 'react'
import TodoListItem from './TodoListItem';
 
export default function TodoList({todoList}) {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}
