import React from 'react'
import Todo from './Todo'

export default function ToDoList({todos, setTodos, filteredTodos}) {
  return (
    <div className="todo-container">
      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>
        ))}
      </ul>
    </div>
  )
}
