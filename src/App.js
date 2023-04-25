import React, { useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


function useSemiPersistentState() {
  const [todoList, setTodoList] = useState([]);

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
  return (

    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}
  
export default App;