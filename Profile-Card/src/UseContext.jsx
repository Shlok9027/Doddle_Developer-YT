import React, { useContext } from 'react'
import { data1, data2 } from './UseCon'
function UseContext() {

    const name = useContext(data1);
    const age = useContext(data2);
  return (
    <>
    <h1> my name is {name} and age is {age}</h1>
      
    </>
  )
}

export default UseContext
