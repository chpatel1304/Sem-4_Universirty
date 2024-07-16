import React,{useState} from 'react'

export default function Task5() {
    const [color,setColor]=useState("red")
    function hanldeColor(){
        if (color=="red"){
            setColor("green")
        }
        else{
            setColor("red")
        }
    }
  return (
    <div>
        <p style={{backgroundColor:color}}>These Is Example</p>
        <button onClick={hanldeColor}>Change</button>
    </div>
  )
}