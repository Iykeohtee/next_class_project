"use client"
import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {
  // function increment(count) {
  //   console.log(count);
  // }
  // function getGreeting (nam) {
    // return `Hello ${nam}`
  // }
  //const counter = 1;
  // const name = "John"
  function getData(){
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  getData();


  return(
    <div>
      <Loading result= {res}/> 
    </div>
  );
}