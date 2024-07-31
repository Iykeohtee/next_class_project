"use client"
import React ,{useContext} from "react"
import styles from './darkModeToggle.module.css'
import { ThemeContext } from "@/context/ThemeContext"

const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext)

    return(
        <div className={styles.container} onClick={toggle}>
         <div className={styles.icon}>🌙</div>
         <div className={styles.icon}>🌞</div>
         <div className={styles.ball} style={mode === "light" ? {left: "3px"} : {right: "3px"}}></div>
        </div>
    )
}

export default DarkModeToggle