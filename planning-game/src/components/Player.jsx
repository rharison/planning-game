import React from 'react'
import './Player.css'



function Player({ name, hasOnTable }) {
  // console.log(name)
  return (
    <div className='player'>
      <h1>{name}</h1>
    </div>
  )
}

export default Player