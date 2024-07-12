import React from 'react'

export default function map() {
    const a=['a','b','c','D']
  return (
    <div>
        {
            a.map((i)=>{
                return <h1>{i.toUpperCase()}</h1>
            })
        }
    </div>
  )
}
