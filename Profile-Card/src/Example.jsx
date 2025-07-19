import React from 'react'

function Example() {

    const players = ["Mahi", "Virat", "Rohit", "Hardik", "Bumrah"];

    const result = players.map((Player) => <h1>{players}</h1>)



  return (
    <div>
      <h1>{result}</h1> 
    </div>
  )
}

export default Example
