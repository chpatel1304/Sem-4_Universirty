import React from 'react'

export default function Events1() {
    function handleSubmit(e){
        e.preventDefault()
        alert("Form Submitted")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        Enter Name<input type="text" name='uname' />
        <input type="submit" />
        </form>
    </div>
  )
}