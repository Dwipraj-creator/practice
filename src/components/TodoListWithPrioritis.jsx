import React, { useState } from 'react'

const TodoListWithPrioritis = () => {
    const [input,setInput] = useState("")
    const [todos,setTodos] = useState([])
    const [msg,setMsg] = useState("")
    const [priority,setPriority] = useState("Low")
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!input.trim()){
        setMsg("Enter Your Todo First")
        return ; 
    }

    const newTodo = {
        id: Date.now(),
        text: input ,
        priority:priority,
        completed:false
    }
    setTodos([...todos,newTodo])
    setMsg("New Todo has been added")
    setInput("")
  }

  const toggleTodo = (id) =>{
    const updateTodo = todos.map((e)=>
        e.id === id ? {...e, completed: !e.completed}:e
    )
    setTodos(updateTodo)
  }

  const deleteTodos = (id) =>{
    const deletedTodo = todos.filter((e)=>
        e.id !== id 
    )
    setTodos(deletedTodo)
  }
  return (
    <div>
      <h1>TODO APP With Prioritis</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={input}
        placeholder='Enter Your TODO' 
        onChange={(e)=>setInput(e.target.value)}/>

        <select value={priority}
        onChange={(e)=>setPriority(e.target.value)}>

            <option value="Low">LOW</option>
           
            <option value="Medium">Medium</option> 
            
            <option value="High">High</option>
        </select>

        <button type='submit'>Add Todo</button>
      </form>

      {msg && <p>{msg}</p>}
      <ul>
      {todos.map((e)=>(
        <li key={e.id}  >
            {e.text}
            <button onClick={()=>toggleTodo(e.id)} >{e.completed ? "Completed ✓" : "Pending ⏳"}</button>
            <button onClick={()=>deleteTodos(e.id)}>Delete</button>
        </li>
    
      ))}
      </ul>
    </div>
  )
}

export default TodoListWithPrioritis
