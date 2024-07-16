import React,{useState} from 'react'

export default function Task4() {
    const [count,setCount]=useState(0)
    function handleCount(){
        if(count<10){
            setCount(count+1)
        }
    }
    function handleCount1(){
        if (!count==0){
            setCount(count-1)
        }
    }
  return (
    <div>
        <h1>ADD TO CART</h1>
        <button onClick={handleCount}>+</button>
        <button onClick={handleCount1}>-</button>
        <p>You Have CLicked {count} Times</p>
    </div>
  )
}