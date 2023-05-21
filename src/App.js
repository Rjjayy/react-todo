
/*In order to get the todo list to persist after a page refresh we have to assign the 
default useState to our localStorage. Currently localStorage is holding the state as it updates (adding todo) but the issue is that resetting the browser window wipes out localStorage. 
The reason is: right now App.js is not storing a variable for localStorage. 
Additionally, once a variable for localStorage is created then we need to update the default useState to use whatever the browser has in localStorage.*/

import React, { useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);


  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  
 function addTodo (newTodo) {
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
 }

 function removeTodo(id) {
  setTodoList(prevTodoList =>
    prevTodoList.filter(todo => todo.id !== id)
  );
}

  return (

    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>

  );
}

export default App;