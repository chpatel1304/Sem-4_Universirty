import React from 'react'

export default function Task3() {
    const a=[{id:1,name:"abc"},{id:2,name:"Xyz"}]
  return (
    <div>
        <ul>
            {
                a.map((i)=>{
                    return <li key={i.id.toString()}>{i.name}</li>
                })
            }
        </ul>
    </div>
  )
}