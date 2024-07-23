"use client"

import Image from "next/image";
import Loading from "@/components/Loading";
import { useState } from "react";


export default function Home() {

  // function getData(){
  //   const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  // getData();

  // function increment (count) {
  //   console.log(count);
  // }
  // function getGreeting (name){
  //   return `Hello ${name}`
  // }

  // //const counter =1;
  // const name = "Dimaro"

  // const [count, setCount] = useState(3);
  // //console.log (count)

  // const increment = () => {
  //   setCount (count + 1);
  // }
  // const decrement = () => {
  //   setCount (count - 1);
  // }


  return (
    <div>
      <Loading/> 
      {/* <h1>{count}</h1>
      <button onClick={increment}>
        Click Me
      </button><br></br>
      <button onClick={decrement}>
        Click Me
      </button> */}
      {/* //ft ={getData}  */}
      {/* na = {name} pay = " payday" */}
      {/* <div>Home</div>
      {increment(2)}
      <h1>{getGreeting(name)}</h1>
       */}
    </div>
  );
}
