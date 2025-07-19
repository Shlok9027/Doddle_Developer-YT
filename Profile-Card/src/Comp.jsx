import React, { useState } from 'react'

function Comp() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");


    function handlerName(event) {
        setName(event.target.value)
    }

    function handleType(e) {
      setType(e.target.value);
    }

    const[payment , setPayment] =useState("Not Selected");


    function handlePayment(e) {
      setPayment(e.target.value)
    }

  return (
    <div>
    
    <input value={name} onChange={handlerName} />
    <p>Name: {name}</p>

    <input value={type} onChange={handleType} />
    <p>Write Something : {type}</p>


    <select value={payment} onChange={handlePayment} >
      <option value="">Select the payment way</option>
      <option value="Google Pay">Google Pay</option>
      <option value="phone Pay">phone Pay</option>
      <option value="Paytm">Paytm</option>
    </select>

<div><br /><p>payment type :: <button> {payment}</button></p></div>
        </div>
        
  )
}

export default Comp
