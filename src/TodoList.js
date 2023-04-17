import React from 'react'
import TodoListItem from './TodoListItem';

let todoList = [

    {id: 1,
      title: "Make a list of task"
    },
    {id: 2,
      title: "Start Task"
    },
    { id: 3,
      title: "Finish Task"
    },
       ];


export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
          {/* {todoList.map((item) => (
              <div key={item.id}>
                <li>{item.title}</li>
              </div>
          ))} */}
        {todoList.map(todo=> (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}
