"use client"
import Image from "next/image";
import Loading from "@/component/Loading";
import background from "./images/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png";



export default function Home() {
  const MyStyle={
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    height: "100vh",
    margin:"auto",
    
  };
  function increment(count){
    console.log(count);

  }
  function getGreeting(nam){
    return ` Hello ${nam}`
  }
  const name = "John"
  function getHome(noon){
 return `Hey John,find me @ ${noon}`
  }
  const Home= 'New Road'
  //const counter =1;
  return (
    <main style={MyStyle}>
       <Loading na ="John" />
     .... Home ....
      {increment(2)}
      <h1>{getGreeting(name)}</h1>
      <h2>{getHome(Home)}</h2>


    </main>
  );
}
