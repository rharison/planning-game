import React from 'react'
import './Player.css'

function Player({ name, isPlayed }) {
  return (
    <div className='cardPlayer'>
      <h1>{name}</h1>
    </div>
  )
}

export default Player