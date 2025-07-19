import React from 'react'
import img from './assets/img.png'

function Card() {
  return (
    <div className='card'>
        <img className='img' src={img} alt="" />
        <h1 className='name'> Doddle </h1>
        <p className='para-text'> I am Doddle Developer...<span><br/> and A YouTuber who makes Coding Videos</span></p>
    </div>
  )
}

export default Card
