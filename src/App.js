/*In order to get the todo list to persist after a page refresh we have to assign the 
default useState to our localStorage. Currently localStorage is holding the state as it updates (adding todo) but the issue is that resetting the browser window wipes out localStorage. 
The reason is: right now App.js is not storing a variable for localStorage. 
Additionally, once a variable for localStorage is created then we need to update the default useState to use whatever the browser has in localStorage.*/

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=${sortOrder}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      };

      try {
        const response = await fetch(url, options);
        if (response.ok === false) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        data.records.sort((objectA, objectB) => {
          const valueA = objectA.fields.title.toUpperCase();
          const valueB = objectB.fields.title.toUpperCase();
          if (valueA < valueB) {
            return sortOrder === "asc" ? -1 : 1;
          } else if (valueA > valueB) {
            return sortOrder === "asc" ? 1 : -1;
          } else {
            return 0;
          }
        });

        const todos = data.records.map((record) => ({
          title: record.fields.title,
          id: record.id,
        }));
        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    }

    fetchData();
  }, [sortOrder]);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  }

  function removeTodo(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
  }

  function toggleSortOrder() {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <button onClick={toggleSortOrder}>Toggle Sort Order</button>
              {isLoading === true ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo Form</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


