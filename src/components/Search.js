"use client"
import React, { useState, useEffect } from 'react'

function Search() {
    const [result, setResult] = useState('')
    const [loading, SetLoading] = useState(false)
    function update(e) {
        setResult(e.target.value)
        console.log(result);
        SetLoading(true)
    }

    useEffect(() => {
       async function fetchData() {
        const response = await fetch('https://api.github.com/users')
        const result = response.json()
        console.log(result)
       }

       fetchData();
    }, [])
    
    return (
        <div>
            <input type='text' placeholder='Search'
                onChange={update}
                value={result}
            
            />
            {/* <h1>{result}</h1>
            {loading ? <loading /> : "loading"} */}
            
        </div>
    )
}

export default Search

// https://api.github.com/users
