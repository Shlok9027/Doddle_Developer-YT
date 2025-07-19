import React, { useState } from 'react'

function Car() {

    const [car, setCar] = useState({name : "Thar", brand: "Mahindra", year: 2025})

    function handleNameChange(e){
      setCar( c => ({...c, name: e.target.value}));
    }
    function handleBrandChange(e){
      setCar( c => ({...c, brand: e.target.value}));
    }
    
    function handleYearChange(e) {
        setCar( c => ({...c, price: e.target.value}));
    }

  return (
    <div>
    
    <p> Your Fav Car is : <br />{car.name} <br />{car.brand}  <br /> {car.price} </p>
    <input type="text" onChange={handleNameChange} value={car.name} /><br />
    <input type="text" onChange={handleBrandChange} value={car.brand} /><br />
    <input type="number" onChange={handleYearChange} value={car.year} />
    </div>
  )
}

export default Car
