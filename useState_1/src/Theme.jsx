import React, { useState } from "react";

// 
let num = 0
const colors = ["blue","red","black","green"]
export default function Theme({ children }) {
  const [theme, setTheme] = useState(colors[num]);
  const handleTheme = () => {
    // if(num < colors.length-1){
    //     num++;
        
    // }else{
    //     num=0;
    // }
    num = num < colors.length-1 ? num+1 : 0;
    setTheme(colors[num])
  }
    let animation ;
  switch(theme){
    case "blue" : 
        animation = "bg-blue-800 text-white"
        break;
    case "red" : 
        animation = "bg-red-800 text-white"
        break;
    case "orange" : 
        animation = "bg-orange-800 text-black"
        break;
    case "green" : 
        animation = "bg-green-800 text-black"
        break;
    default :
        animation ="bg-white text-black"
  }
  return (
    <div
      className={`${animation} min-h-screen`}
    >
      <button
        onClick={handleTheme}
        className={` border ${
          theme ? "border-white text-blue-600" : "border-black "
        }`}
      >
        Change Theme
      </button>
      {children}
    </div>
  );
}