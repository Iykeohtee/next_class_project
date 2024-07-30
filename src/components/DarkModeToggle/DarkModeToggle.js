"use client"

import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css';
import {ThemeContext}  from '@/context/ThemeContext';

const DarkModeToggle = () => {

   
  const { toggle, mode} = useContext(ThemeContext)          
  // console.log(mode)     

  return (
    <div className={styles.container} onClick={toggle}>                        
       <div className={styles.icon}>🌙</div>               
       <div className={styles.icon}>🌞</div>        
       <div className={styles.ball} style={ mode === "light" ? { left: "3px" } : { right: "3px" } }/>               
    </div>   
  )
}  

export default DarkModeToggle
 