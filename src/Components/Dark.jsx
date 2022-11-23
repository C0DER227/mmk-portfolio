import React from 'react'
import {useState,useEffect} from 'react'
import toggle from '../images/toggle.png'

function Dark() {
    const [theme,setTheme]=useState('light')
  useEffect(()=>{
    if (theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  const handleButton=()=>{
    setTheme(theme==='dark'?'light': 'dark')
  }
  return (
    <>
    <button onClick={handleButton}><img className='h-8' src={toggle} alt=""/></button>
    </>
  )
}

export default Dark