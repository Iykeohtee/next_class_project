"use client"
import React, { useState, useEffect } from "react"
import Loading from "./Loading"

const Search = () => {

  const [query, setQuery] = useState('')
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

    function update(e) {
      setResult(e.target.value);
      console.log(result);
      setLoading(true);
    }
  useEffect(() => {

    if(query.length ===0 ){
      setResult([])
      return;
    }


    async function fetchData() {
        setLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      // console.log(response);
       const data = await response.json();
      // console.log(data);
      setResult(data)
      setLoading(false)
    }

    fetchData();

  }, [query]);

  function update(e){
    setQuery(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={update}
        value={query}
      />
      {loading ? <Loading /> : "Nothing is loading"}
      {/* <h1>{result}</h1> */}


      <ul>
        {result.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search;
