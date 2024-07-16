import React,{useState} from 'react'
import pc from "./pc.jpg"
import rs from "./download.jpg"
export default function Task6() {
    const [img,changeImg]=useState(pc)
    function image(){
        changeImg(rs)
    }
  return (
    <div>
        <h1>Changing Image</h1>
        <img src={img} alt="PC" />
        <button onClick={image}>CHANGE IMAGE</button>
    </div>
  )
}
