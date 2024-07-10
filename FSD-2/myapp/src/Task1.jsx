// Write In which u have to create two variables names student name and unversirty name these both values shoudl be passed to another component names_details where these values are printed using props
import React from 'react'

const Task1 = (props) => {
  const details=props.obj
  return (
    <div>
      <h1>
          {details[0].student_name}:{details[0].uni_name}
          <br/>
          {details[1].student_name}:{details[1].uni_name}
      </h1>
    </div>
  )
}

export default Task1