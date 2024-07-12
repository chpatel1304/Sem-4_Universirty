// react app to pass product image name and price as properties from one to another component add an array of two of objects with peak name and price properties of two products display image name and price of the products using map 
import React from 'react'

export default function Task2(props) {
    const a=props.arr
  return (
    <div>
        {
            a.map((i)=>{
               return( <div>
                    <img src={i.Pic} alt="PC" />
                    <h1>{i.Name}</h1>
                    <h1>{i.Price}</h1>
                </div>)
            })
        }
    </div>
  )
}
