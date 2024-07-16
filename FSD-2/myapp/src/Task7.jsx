import React,{useState} from 'react'

export default function Task7() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    function handleChange(event){
        setFirstName(event.target.value)
    }
    function handleChange1(event){
        setLastName(event.target.value)
    }
  return (
    <div>
        <input type="text" value={firstName} onChange={handleChange} />
        <input type="text" value={lastName} onChange={handleChange1} />
        <p>{firstName} and {lastName}</p>
    </div>
  )
}
