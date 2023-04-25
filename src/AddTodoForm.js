 
import React, { useState } from 'react';

export default function AddTodoForm({onAddTodo}) {
  const [todoTitle, setTodoTitle] = useState('');

  /* This is a multi-line comment in JSX */
  function handleTitleChange(event) {  /*
  changes to the input value will be handled this function,
  which will update the state of todoTitle using setTodoTitle()
*/
  const newTodoTitle = event.target.value;
  setTodoTitle(newTodoTitle);
  }
  
  function handleAddTodo (event) {
    event.preventDefault();
    const newTodo ={
        title: todoTitle,
        id: Date.now()
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  }
  
  return (
    <form onSubmit={handleAddTodo}> 
        <label htmlFor="todoTitle">Title</label>
        <input id= "todoTitle" name="title"value={todoTitle} onChange={handleTitleChange}/>
        <button type= "submit">Add</button>
    </form>
  );
}
