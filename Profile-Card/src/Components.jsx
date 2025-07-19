import React, { useState } from 'react'

function Components() {
    const [name, setName] = useState("Shreya");
    const [age , setAge] = useState(0);
    const [isStudent , setIsStudent] = useState(true);


    const upDateName = () => {
      setName("Shlok Kumar")
    }

    const upDateAge = () => {
      setAge(21)
    }

    const incrementAge = () => {
      setAge(age+ 1)
    }

    const toggleIsStudentCheck = () => {
      setIsStudent(!isStudent)
    }

  return (
    <div>
      <p>Name : {name}</p>
  
    <button onClick={upDateName}>change it</button>

    <p onClick={upDateAge}>Age : {age}</p>

    <button onClick={incrementAge}>put it</button>

    <p>Student : {isStudent ? "YES" : "NO"}</p>
    <button onClick={toggleIsStudentCheck}>check it</button>

    </div>

   
    
  )
}

export default Components
