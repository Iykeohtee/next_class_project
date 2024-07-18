"use client"

import Image from "next/image";
import Loading from "@/component/Loading";

export default function Home() {

  function getData () {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  getData();

  // function increment(count) {
  //   console.log(count);
  // }

  // function getGreeting (name) {
  //   return `Hello ${name}`
  // }

  // // const counter =1;
  // const name = "NO NAME"

  return (
    <div>  
      <Loading/>                                  
      {/* <Loading na = "NO NAME" pay = "Payday"/> */}
      {/* <div>Home</div>                                     
      {increment(2)}
      <h1>{getGreeting(name)}</h1> */}
    </div>
  );
}
