import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



   function App() {
    return (
      <div>
        <h1> Todo List </h1>
        <AddTodoForm></AddTodoForm>
       <TodoList> </TodoList>
       
      </div>
    );
  }
  export {App as default};