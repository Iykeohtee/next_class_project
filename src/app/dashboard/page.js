"use client"

import React, {useRef} from 'react'
import './dashboard.css'
import TextInputCounter from '@/components/TextInput'

const Dashboard = () => {

  const inputRef = useRef("Hello");
  const countRef = useRef(0);

  const increment = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
     <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>  

      <button onClick={increment}>Increment</button> 

      <TextInputCounter/>
    </div>   
  )
}

export default Dashboard
