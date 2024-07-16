"use client"
import Image from "next/image";
import Loading from "@/components/Loading";

export default function Home() {
  function getData (){
    const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  getData();
//   function increment (count){
//     console.log(count);
//   }
  // function getGreetings (names){
//     return `hello ${names}`
//   }

  // const names = "famous"
  return (
    <main>
      <Loading uy = {resg}/>
      {/* <div>
        Home
      </div>
      {increment(2)}  
      <h1>{getGreetings(names)}</h1>
       */}
    </main>
  );
}
