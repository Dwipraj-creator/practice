import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    const [message,setMessage]=useState('');


    useEffect(()=>{
        const storedTodos = localStorage.getItem("todos")

        if(storedTodos && storedTodos !== "undefined"){
            setTodos(JSON.parse(storedTodos))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(input.trim() === ""){
            setMessage("You have to add a todo first")
            return
        }

        const newTodo = {
            id:Date.now(),
            text:input,
            completed:false,
        }
        setTodos([...todos,newTodo])
        setInput("")
        setMessage("Todo Added");

    }


    const toggleTodo = (id)=>{
        const updateTodo = todos.map((e)=>(
            e.id === id ? {...e,completed:!e.completed} : e
        ))

        setTodos(updateTodo)
    }

    const deleteTodo = (id)=>{
        const deletedTodo = todos.filter((e)=>(
            e.id !== id 
        ))
        setTodos(deletedTodo)
    }


  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder='Enter Your Todo Here'
         value={input}
         onChange={(e)=>setInput(e.target.value)}
        />
        <button >Add</button>
      </form>

      {message && <h3>{message}</h3>}
      <ul>
        {todos.map((e)=>(
            <li key={e.id}
            onClick={()=>toggleTodo(e.id)}
            style={{ cursor: "pointer",
              textDecoration: e.completed ? "line-through" : "none",}}
            >
             {e.text}   
             <button
              onClick={(i) => {
                i.stopPropagation();
                deleteTodo(e.id);
              }}
            >
              Delete
            </button>
            </li>
            
        ))}
      </ul>
    </div>
  )
}

export default Todo
