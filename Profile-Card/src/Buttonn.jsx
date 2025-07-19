import React from 'react'
function Buttonn() {

    const handlerClick = (e) => e.target.textContent = 'clicked!'

  return (
    <button onClick={(e) => handlerClick(e)}>Click me (;</button>
  )
}
export default Buttonn
