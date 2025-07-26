import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Products() {
    const [data,setData] = useState()
    async function fetchData() {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products); 
        setData(res.data.products) 
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log("Hello world");
    console.log(data);
    
    
  return (
    <>
    
    {data.map((val,id)=>(
        <div className="" key={id}>
            <h1>{val.title}</h1>
            <img src={val.images[0]} alt="" width={150}  />
        </div>
    ))}
    </>
  )
}
