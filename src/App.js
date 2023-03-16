import React from 'react';

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

   function App() {
    return (
      <div>
        <h1> Todo List </h1>
        <ul>
          {todoList.map((item) => (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
  export {App as default};