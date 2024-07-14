import React from 'react'

export default function Filter1() {
    const arr=[12,13,14,15,16]
    const newarr=arr.filter((num)=>{
        if(num==14){
            return false
        }
        else{
            return true
        }
    })
    var arr1=arr.join(",")
    var arr2=newarr.join(",")
  return (
    <div>
        <h1>Actual Array : {arr1}</h1>
        <h1>New Array : {arr2}</h1>
    </div>
  )
}
