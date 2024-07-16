import React,{useState} from 'react'

export default function Hooks() {
    const [count,setCount]=useState(0)
    function handleCount(){
        setCount(count+1)
    }
    function handleCount1(){
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={handleCount}>+</button>
        <button onClick={handleCount1}>-</button>
        <p>You Have CLicked {count} Times</p>
    </div>
  )
}