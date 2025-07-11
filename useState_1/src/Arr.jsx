const tasksList = [
    {
        id : 1,
        name : "Walking",
        use : "Health"
    },
    {
        id : 2,
        name : "Running",
        use : "Health"
    }
]

import React, { useState } from 'react'
const taskForm = {
    name : "",
    use : "",
    des : ""
}
export default function Arr() {
    const [tasks,setTasks] = useState(tasksList)
    const [form,setForm] = useState(taskForm)
    const handleChange = (e) =>{
        const {name , value} = e.target
        console.log(name,value);

        setForm(prev=>(
            {...prev,[name]:value}
        ))
        
    }
    console.log(form);
    const handleAddTask = ()=>{
        // setTasks([form])
        setTasks(prev=>
            [...prev,form]
        )
        setForm(taskForm)
    }
    
  return (
    <>
    {tasks.map((val,index)=>(
        <div className="" key={index}>
            <p>
                <span>{val.name} </span>
                <span>{val.use} </span>
                <span>{val.des} </span>
            </p>
        </div>
    ))}

    <div className="task">

    <div className="">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter a name' id='name' name='name' value={form.name} onChange={handleChange}/>
    </div>
    <div className="">
        <label htmlFor="use">Use</label>
        <input type="text" placeholder='Enter a use' id='use' name='use' value={form.use} onChange={handleChange}/>
    </div>
    <div className="">
        <label htmlFor="use">Use</label>
        <input type="text" placeholder='Enter a use' id='use' name='des' value={form.des} onChange={handleChange}/>
    </div>

    <input type="checkbox" name="" id="tem" />
    <label htmlFor="tem">term and conditions</label>
    <button onClick={handleAddTask} className='border rounded-sm px-2 py-1 bg-blue-500'>Add task</button>
    </div>
    </>
  )
}
