import React,{useState} from 'react'
// Write A react JS code to build calculator there are two input feilds and 4 buttons display result on same page
export default function Task8() {
    const [num1,number1]=useState(0)
    const [num2,number2]=useState(0)
    const [result,button]=useState(0)

    function setnum1(event){
        number1(event.target.value)
    }
    function setnum2(event){
        number2(event.target.value)
    }
    function add(){
        button(parseInt(num1)+parseInt(num2))
    }
    function sub(){
        button(num1-num2)
    }
    function mul(){
        button(num1*num2)
    }
    function div(){
        button(num1/num2)
    }
  return (
    <div>
        <input type="number"placeholder='Enter First number' name='n1'  onChange={setnum1}/>
        <input type="number"placeholder='Enter Second number' name='n2' onChange={setnum2}/>
        <button onClick={add}>Addition</button>
        <button onClick={sub}>Subtraction</button>
        <button onClick={mul}>Multiplication</button>
        <button onClick={div}>Divsion</button>
        <p>{result}</p>
    </div>
  )
}
