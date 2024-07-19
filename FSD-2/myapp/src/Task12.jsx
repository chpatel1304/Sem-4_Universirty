import React,{useState} from 'react'
// React Program to filter four images as per the category initally display all the four images with category wise buttons on clicking particular only that category 
import RS1 from "./download.jpg"
import RS2 from "./download (1).jpg"
import VK1 from "./download (2).jpg"
import VK2 from "./download (3).jpg"
export default function Task12() {
    const images=[{category:"All"},{pic:RS1,category:"Rohit Sharma"},{pic:RS2,category:"Rohit Sharma"},{pic:VK1,category:"Virat Kolhi"},{pic:VK2,category:"Virat Kolhi"}]
    const [img,setimg]=useState(images)
    const handleproduct=(Item)=>{
      const finddata=images.filter((value)=>{
        return value.category==Item
      })
      if(Item!='All'){
        setimg(finddata)
      }
      else{
        setimg(images)
      }
    }
  return (
    <div>
        <button onClick={() => handleproduct("All")}>All</button>
        <button onClick={() => handleproduct("Rohit Sharma")}>ROHIT SHARMA</button>
        <button onClick={() => handleproduct("Virat Kolhi")}>VIRAT KOLHI</button>
        {
          img.map((val) =>{
            return(
              <img src={val.pic} alt="" />
            )
          })
        }
    </div>
  )
}
