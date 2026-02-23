import React, { useState } from 'react'

const UserLoginInfo = () => {

  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("")
  const [token,setToken]=useState("");

  const handelLogin = async(e)=>{
    e.preventDefault()

    try {
      const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"

        },
        body:JSON.stringify({
          email:email,password:password
        })
      })
      const data = await res.json();

      if(res.ok){
        setToken(data.token);
        setMessage("Login Sucessful"
        )
        localStorage.setItem("token",data.token)
      }else{
        setMessage("Invalid email or password")
      }
    } catch (error) {
      setMessage("Invalid email or password")
    }
  }

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handelLogin}>
        <input type="email" placeholder='Enter your email here ' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Enter your password here ' value={password} onChange={(e)=>setPassword(e.target.value)} />

          <button type='onSubmit'> Login</button>
      </form>

      {message && <p>{message}</p>}
      {token && <p>Token:{token}</p>}
    </div>
  )
}

export default UserLoginInfo