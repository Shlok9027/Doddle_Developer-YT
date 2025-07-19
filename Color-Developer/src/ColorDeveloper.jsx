import React, { useState } from 'react'

function ColorDeveloper() {

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(e) {
        setColor(e.target.value)
    }

  return (
    <div className='container'>
      
      <h1>Color Picker</h1>
      <div className='color-display ' style={{background: color}}>
        <p>Selected Color : {color}</p>
      </div>
      <label htmlFor=""> Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorDeveloper
