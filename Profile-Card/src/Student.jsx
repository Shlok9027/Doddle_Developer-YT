import React from 'react'

function Student(props) {
  return (
    <div>
        <h2>name: {props.name}</h2>
        <p>age: {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" : "No"}</p>
      
    </div>
  )
}

export default Student



