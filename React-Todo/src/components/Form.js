import React from 'react';



export const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText === "" || inputText === null) return;
    setTodos([...todos, 
      {
        text: inputText, 
        completed: false, 
        id: Math.random() * 1000
      }]);
    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input type="text" className="todo-input" value={inputText} onChange={e => inputTextHandler(e)}/>
      <button onClick={e => submitTodoHandler(e)} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={e => statusHandler(e)} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
