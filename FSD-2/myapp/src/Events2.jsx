import React from 'react'

export default function Events2() {
    function handleChnage(e){
        console.log(e.target.value);
    }
  return (
    <div>
        <input type="text" name='uname' onChange={handleChnage} />
    </div>
  )
}