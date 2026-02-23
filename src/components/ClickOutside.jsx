import React, { useEffect, useRef } from 'react'

const ClickOutside = ({callback,children}) => {

    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(!ref.current) return ; 

            if(!ref.current.contains(event.target )){
                callback(); 
               
            }
        }

        document.addEventListener("mousedown",handleClickOutside)

        return ()=>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    }, [callback])
  return (
    <div ref={ref}
  style={{ padding: 20, border: '1px solid black' }}>
   {children}
    </div>
  )
}

export default ClickOutside
