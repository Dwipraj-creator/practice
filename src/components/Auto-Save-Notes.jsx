import React, { useEffect, useState } from 'react'

const AutoSaveNotes = () => {
    const [note, setNote] = useState("")
    const [status,setStatus] = useState("Saved")

    useEffect(()=>{
         
        if(!note){
            setStatus("Saved")
            return
        }
        setStatus("Saving...")

        const timer = setTimeout(()=>{
            console.log("Note Saved", note)
            setStatus("Saved")
            setNote('')
          
        },2000)
        return ()=>{
            clearTimeout(timer)
        }
    },[note])
  return (
    <div>
      <textarea value={note} placeholder='Start typing Your notes...' onChange={(e)=>setNote(e.target.value)}/>
        <p>{status}</p>
        <h3>{note}</h3>
    </div>
  )
}

export default AutoSaveNotes
