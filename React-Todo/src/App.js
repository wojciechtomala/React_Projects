import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loading, setLoading] = useState(true);


  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      getLocalTodos();
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, status, loading]);
  
  // FUNCTIONS:
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
  },[todos, status]);

  return (
    <div className="App">
      <header>
        <h1>React to do list</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        todos={todos} 
        inputText={inputText} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
