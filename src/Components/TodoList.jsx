import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    };

  return (
    <div>
        <h1>Todo List</h1>
         <form onSubmit={handleSubmit}>
            <input type='text'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Enter a task..."
            ></input>
            <button type='submit'>Add</button>
         </form>

         <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
    </div>
  )
}

export default TodoList