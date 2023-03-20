import React from 'react'

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
    <ul>
          {todoList.map((item) => (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          ))}
        </ul>
  )
}
