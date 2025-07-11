import React from 'react'
import Counter from './Counter'
import Theme from './Theme'
import Arr from './Arr'

export default function App() {
  return (
    <Theme>
      <Counter/>
      <Arr/>
    </Theme>
  )
}


// function add(a,b){
//   return a+b
// }
// add(10,15)

// function Add(props){
//   const data = props // props = { a : ? , b : ?}
//   return <h1>{data.a+data.b}</h1>
// }

// function Usage({children}){
//   return(
//     <>
    
//     <h1>edhweferfh</h1>
//     {children}
//     </>
//   )
// }

// {/* <Usage/> */}
// <Usage>
//   gfhf
// </Usage>