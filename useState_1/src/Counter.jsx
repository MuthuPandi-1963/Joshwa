import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(10)
    let value = 10
    const handleAdd = ()=>{
        value++;
        console.log(value);
        setCount(prev=>prev+1)

        
    }
    const handleMinus = ()=>{
        setCount(prev=>prev-1)

        
    }
    console.log(count);
    
  return (
    <>
    <h1>Counter</h1>
    <div className="count flex text-xl  gap-x-6 justify-center items-center">
    <button onClick={handleMinus}>-</button>
    <p> {value}  ---- ----- {count}</p>
    <button onClick={handleAdd}>+</button>
    </div>
    </>
  )
}
