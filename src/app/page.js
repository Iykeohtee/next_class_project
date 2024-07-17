"use client"

import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {

  function getData(){
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
      .then(json => console.log(json))
  }

  getData();

  // function increment (count) {
  //   console.log(count);
  // }
  // function getGreeting (name){
  //   return `Hello ${name}`
  // }

  // //const counter =1;
  // const name = "Dimaro"

  return (
    <div>
      <Loading ft ={res}/> 
      {/* na = {name} pay = " payday" */}
      {/* <div>Home</div>
      {increment(2)}
      <h1>{getGreeting(name)}</h1>
       */}
    </div>
  );
}
