"use client";
import React from "react";
import Loading from "@/components/Loading";
// import Image from "next/image";
//import {useState} from "react"

const Home = () => {
  //  // function increment(count){
  //   //   console.log(count);
  //   // }
  //   //  function getGreeting(nam){
  //   //   return `Hello ${nam}`
  //   // }
  //   const name = "John"
  //   // const counter = 1;

  //   function getData(){
  //   const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  //    }

  //    getData();

  // const [count, setCount] = useState(2)
  // //console.log(count)

  // const increment = () =>{
  //   setCount(count + 3);
  // }
  // const decrement = () =>{
  //   setCount(count - 1);
  // }

  return (
    <div>
      <h2>
        <Loading />
        never
      </h2>
    </div>
  );
};

export default Home;
/* <h1>{count} </h1>
    <button onClick = {increment}>Click Me!</button> <br/>
    <button onClick = {decrement}>Click Me!</button> */ {
}
{
  /* {increment(2)} */
}
{
  /* <h1>{getGreeting(name)}</h1> */
}

// PUSHING WITH A NEW REPO
// echo "# loctech-react-class" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/zuriel-01/loctech-react-class.git
// git push -u origin main

// PUSHING WIH AN ALREADY EXISTING REPO
// git remote add origin https://github.com/zuriel-01/loctech-react-class.git
// git branch -M main
// git push -u origin main

//PUSHING TO SOMEONE ELSE'S REPO
// Clone the person's repo
// git clone the_repo_url
// make your available changes
// run git add . - to add your entire your entire file
// run git commit -m 'your commit message'- to create a commit
// run git checkout -b 'your branch name' - to create your own branch
// git push origin your branch name
// "use Client"
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Loading from "@/components/Loading";

// export default function Home() {
//   const [data, setData] = useState(null);
//   const name = "John";

//   useEffect(() => {
//     async function getData() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const json = await res.json();
//       setData(json);
//     }
//     getData();
//   }, []);

//   function increment(count) {
//     console.log(count);
//   }

//   function getGreeting(nam) {
//     return `Hello ${nam}`;
//   }

//   return (
//     <div>
//       <div>Home</div>
//       <Loading na={name} hi={data} />
//       {increment(2)}
//       <h1>{getGreeting(name)}</h1>
//     </div>
//   );
// }
