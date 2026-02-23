import React, { useState } from 'react'

const PasswordStrength = () => {
    const [password,setPassword] = useState("")

    const checks = {
        length:password.length >= 8 ,
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
        special:/[^A-Za-z0-9]/.test(password)
    }

    const passedCount = Object.values(checks).filter(Boolean).length;
    // Object.values(checks) will takes the checks object --> Extracts only the values ---> Returns them as an array 
    //filter(Boolean) this will extract only the true value from the array 
    // .lenght will give us the count of how many true values are there 

    const getBorderColor = () =>{
        if(passedCount <= 1 ) return "red" ; 
        if(passedCount <= 3 ) return "yellow"; 
         return "green" ; 
    }
  return (
    <div>
      <input type="password" 
      placeholder='Enter Your password'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      style={{
        width: "100%",
        padding:"8px",
        border: `2px solid ${getBorderColor()}`, 
        outline:"none"
      }} />

      <ul style={{listStyle:"none" , padding:0}}>
        <li>At least 8 characters: {checks.length ? "✓" : "✗"}</li>
        <li>Uppercase letter: {checks.uppercase ? "✓" : "✗"}</li>
        <li>Number: {checks.number ? "✓" : "✗"}</li>
        <li>Special character: {checks.special ? "✓" : "✗"}</li>
      </ul>
      {passedCount === 4 && (
        <h1> Your password is <strong>{password}</strong></h1>
      )}
    </div>
  )
}

export default PasswordStrength
