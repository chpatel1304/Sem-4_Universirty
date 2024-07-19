import React,{useState} from 'react'

export default function Task11() {
    // const Obj={brand:"kia",color:"black",model:"seltos",year:"2023"}
    // const Obj1={brand:"Merecedes",color:"Silver",model:"Maybach",year:"2020"}
    const [json,text]=useState({brand:"kia",color:"black",model:"seltos",year:"2023"})
    function change(){
        text({brand:"Merecedes",color:"White",model:"Maybach",year:"2020"})
    }
  return (
    <div>
        <p>I Have <h1>{json.color}</h1> Color <h1>{json.brand} {json.model}</h1> of <h1>{json.year}</h1></p>
         <button onClick={change}>Change</button>      
    </div>
  )
}