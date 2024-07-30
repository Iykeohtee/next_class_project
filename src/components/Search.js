"use client"

import React, {useState, useEffect} from 'react'; 
import Loading from './Loading';

const Search = () => { 

    const [ query, setQuery ] = useState('')
    const [result, setResult ] = useState([])
    const [ loading, setLoading ] = useState(false)
     
   useEffect(() => {

      if(query.length === 0 ) {
        setResult([])
        return;
      }

        async function fetchData () {
          setLoading(true)  
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
         const data = await response.json();    
         setResult(data)    
         setLoading(false)          
        }  

        fetchData();   
   }, [query])  
   
   function update(e) {         
    setQuery(e.target.value)       
}

  return (
    <div>
      <input type='text' placeholder='Search'
       onChange={update}       
       value={query}     
      />
      {loading ? <Loading/> : "Nothing is loading"}   

      <ul>
        {result.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}  
      </ul>
    </div>
  )
}

export default Search



// Context APIs
// USed to manage state globally in your application : passing props globally in your application 
// It helps avoid the use of props drilling 
// Example of cases it can be used : for setting dark and light Theme in your entire application.





// function update(e) {    
//     setResult(e.target.value)       
//     console.log(result)
//     setLoading(true)
// }