import React from 'react'
import Lottie from "lottie-react";
import waitingAnimation from '../../public/assets/animations/waiting.json'
import playedAnimation from '../../public/assets/animations/played.json'
import './Player.css'

function Player({ name, isPlayed = true }) {
  const [isPlayedState, setIsPlayedState] = React.useState(isPlayed)
  const [valuePlayed, setValuePlayed] = React.useState(10)
  return (
    <div className='card-player'>
      <div className={'container-status' + (isPlayedState ? ' played' : '')}>
       <Lottie animationData={isPlayedState ? playedAnimation : waitingAnimation}/>
      </div>
      <div className='container-name-player'>
        {name.toUpperCase()}
      </div>
      <div className={'container-value' + (isPlayedState ? ' played' : '')}>
        {isPlayedState ? valuePlayed : '?'}
      </div>
    </div>
  )
}

export default Player