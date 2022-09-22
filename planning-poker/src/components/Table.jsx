import React, { createElement, useEffect } from 'react'
import Player from './Player'
import './Table.css'



function Table({ players }) {
  const initialChildrensBySpace = {
    top: [{name: 'thander'}, {name: 'rharison animal'}],
    left: [{name: 'rharison'}],
    bottom: [],
    right: [],
  }
  let left;


  const [childrensBySpace, setChildrensBySpace] = React.useState(initialChildrensBySpace)
  const [playersOnTable, setPlayersOnTable] = React.useState([])
  const [test, setTest] = React.useState({})

  useEffect(() => {
    let obj = {

}
    Object.entries(initialChildrensBySpace).forEach(([key, array]) => {
      obj = {...obj, [key]: array.map(p=>(<Player name={p.name} />))}
    })
    setTest(obj)

    renderPlayer(players)
  }, [players])
  console.log(test) 
  function getDivsBySpace() {
    const divTop = document.querySelector('.table-top')
    const divLeft = document.querySelector('.table-left')
    const divBottom = document.querySelector('.table-bottom')
    const divRigth = document.querySelector('.table-rigth')

    return {
      divTop,
      divLeft,
      divBottom,
      divRigth
    }
  }

  function elementIsEmpty(element) {
    return element.childNodes.length === 0
  }

  function playerIsOnTable(player) {
    return playersOnTable.includes(player)
  }

  function renderPlayer(players) {
    const { divTop, divLeft, divBottom, divRigth } = getDivsBySpace()
    for (const player of players) {

      if(elementIsEmpty(divLeft) && !playerIsOnTable(player.name)) {
        setChildrensBySpace(prevState => ({
          ...prevState,
          left: [<Player name={player.name} />]
        }))
        setPlayersOnTable(prevState => [...prevState, player.name])
      }

      if(elementIsEmpty(divRigth)) {
        setChildrensBySpace(prevState => ({
          ...prevState,
          right:[ <Player name={player.name} />]
        }))
      }

    }

    return <h1>Olá</h1>
  }

  return (
    <div className='table'>
      <div className='table-top'>
  {test?.top}
      </div>
      <div className='table-left'>
        {
          test?.left
        }
      </div>
      <div className='table-bottom'>
        {test.bottom}
      </div>
      <div className='table-rigth'>
        {test.right}
      </div>
    </div>
  )
}

export default Table