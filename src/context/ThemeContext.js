"use client"

import { createContext, useState } from "react"
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) =>{
    const [mode, setMode] = useState("dark")

    const toggle = () => {
        setMode((prev) => prev === "dark" ? "light" : "dark")
    }

    return(
        <ThemeContext.Provider value={{toggle, mode}}>
            {children}
        </ThemeContext.Provider>
    )
}