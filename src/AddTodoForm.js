import React from 'react'

export default function AddTodoForm(props) {
  
  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value;
    props.onAddTodo(todoTitle);
    event.target.reset();
  }
  
  return (
    <form onSubmit={handleAddTodo}> 
        <label htmlFor="todoTitle">Title:</label>
        <input id= "todoTitle" name="title"></input>
        <button type= "submit">Add</button>
    </form>
  );
}
