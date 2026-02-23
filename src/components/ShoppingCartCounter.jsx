import React, { useState } from 'react'

const price = 29.99;
const discountRate = 0.1;

const ShoppingCartCounter = () => {
     const [quantity,setQuantity]=useState(0);

     const total = quantity * price;
     const hasDiscount = quantity >=5; 
     const discountAmount = hasDiscount ? total * discountRate :0;
    const finalTotal = total - discountAmount;
  return (
    <div>
      <h1>Shopping Cart Counter</h1>
      <p>Quantity:{quantity}</p>
      <p>Unit Price : ${total}</p>

      {hasDiscount && (
        <p style={{color:"green"}}>
            Bulk Discount Applied (10%)
        </p>
      )}
      <p>Final Price : ${finalTotal.toFixed(2)}</p>

      <button onClick={()=>setQuantity(prev => prev + 1)}>Increment</button>
      <button onClick={()=>setQuantity(prev => Math.max(0,prev-1))}>Decrement</button>
    </div>
  )
}

export default ShoppingCartCounter
