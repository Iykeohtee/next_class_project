"use client"

import Image from "next/image";
import Loading from "@/components/Loading"; 
import { usePathname} from "next/navigation";
// import Image  from "next/image";



export default function Home() {   

  // usePathname is used to access the current route's pathname. This can be particularly useful 
  // for conditional rendering or navigation logic based on the current route.
  // to get the PathName of  the current URL

  const currentPathName = usePathname();

  
  

  // function getData () {
  //   const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())    
  //     .then(json => console.log(json))        
  // }

  // getData();   

  return (
    <main>
     <p>Current PathName: {currentPathName}</p>
     {currentPathName === '/' && <p>You are on the Home page!</p>}  
    <Loading/> 
    </main>   
  );
}   
