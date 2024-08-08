"use client"

import React, { useState, useRef, useEffect} from 'react'
import { useRouter } from 'next/router';

const contact = () => {
  const [ count, setCount ] = useState(0);
  const inputRef = useRef(0)   
  const countRef = useRef(null)

  const router = useRouter();
  
  // console.log(router)

  function handleChange () {
    setCount(count + 1)     
    inputRef.current++;

    console.log(count)
    console.log(inputRef.current)
  }

  function aboutPush() {
    router.reload()
  } 

  useEffect(() => {
     countRef.current.focus();   
  }, [])    

  return (
    <div>  
      {count}
      <button onClick={handleChange}>Increment</button>   
      <input type="text" placeholder='focus on me on page load' ref={countRef}/> 
      {/* <button onClick={focusInput}>Focus</button>   */}
      <button onClick={aboutPush}>About</button>
    
    </div>  
  )
}

export default contact 
