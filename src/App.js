
/*In order to get the todo list to persist after a page refresh we have to assign the 
default useState to our localStorage. Currently localStorage is holding the state as it updates (adding todo) but the issue is that resetting the browser window wipes out localStorage. 
The reason is: right now App.js is not storing a variable for localStorage. 
Additionally, once a variable for localStorage is created then we need to update the default useState to use whatever the browser has in localStorage.*/

import React, { useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


/*function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);


  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  The code belloew: has been updated by removing the useSemiPersistentState function and integrating its logic directly into the App component
*/

async function fetchData() {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  const options = {
    method: 'GET'
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
    }
  };
  }


  try {
     const response = await fetch (url, options);

  if (response.ok === false){
    throw new Error('Error: ${response.status}');
  }

  const data = await response.json();
  const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
}));

   setTodoList(todos);
   setIsLoading(false);

} catch (error){
console.error ('Error while fetching data:', error)
}


function App() {
  const [todoList, setTodoList] = useState([]);

 const [isLoading, setIsLoading ] = useState(true);

 
  useEffect(() => {
    fetchData().then(result=> {
      setTodoList(result.data.todoList);
      setIsLoading(false)
    });

    /*const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList:JSON.parse(localStorage.getItem('savedTodoList')) || []} }); 
      }, 2000);
    });

    promise.then(result => {
     
    setTodoList(result.data.todoList);
    setIsLoading(false);
    });
  }, []); (Lesson 1.8 replace the contents of the useEffect with a call to fetchData())*/

  useEffect(() => {
    if (isLoading === false) {localStorage.setItem('savedTodoList', JSON.stringify(todoList));}
  }, [todoList]);

 function addTodo (newTodo) {
    setTodoList(prevTodoList => [...prevTodoList, newTodo]);
 }

 function removeTodo(id) {
  setTodoList(prevTodoList =>
    prevTodoList.filter(todo => todo.id !== id));
}

  return (

    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {
        isLoading ===true? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      }
     
    </>

  );
}

export default App;