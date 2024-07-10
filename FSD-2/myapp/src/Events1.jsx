import React from 'react'

export default function Events1() {
    function handleSubmit(e){
        e.preventDefault()
        alert("Form Submitted")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='uname' />Enter Name
            <input type="submit" />Submit
        </form>
    </div>
  )
}
