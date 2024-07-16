import React,{useState} from 'react'
// prg to having button show by cliking it it will displayed text and button text wil became 
export default function Task9() {
    const [buttontext,setButtonText]=useState("Show")
    const [text,setText]=useState("")
    function showhide(){
        if(buttontext=="Show"){
            setButtonText("hide")
            setText("Hello")
        }
        else{
            setButtonText("Show")
            setText("")
        }
    }
  return (
    <div>
        <button onClick={showhide}>{buttontext}</button>
        <p>{text}</p>
    </div>
  )
}
