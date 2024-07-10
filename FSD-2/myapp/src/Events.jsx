import React from 'react'

export default function Events() {
  const mystle={color:"white",backgroundColor:"#000000"}
  const handleclick=()=>{
      alert("GoodBye LJIET")
  }
  const handleclick1=()=>{
    alert("Never LJIET")
}
  return (
    <div>
      <center>
            <button style={mystle} onClick={handleclick}>Click Here</button>
            <button style={mystle} onDoubleClick={handleclick1}>Click Here</button>
        </center>
    </div>
  )
}

