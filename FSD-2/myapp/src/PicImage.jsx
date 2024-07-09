import React from 'react'
import image from "./download.jpg"
export default function PicImage() {
    const pic=image
    const desc="Test Image"
  return (
    <div>
        <img src={pic} alt={desc} />
    </div>
  )
}
