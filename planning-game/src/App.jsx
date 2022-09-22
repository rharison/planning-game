import './App.css'
import Player from './components/Player'
import { GiGamepadCross } from 'react-icons/gi';

function App() {
  return (
    <div className='app'>
      <div className='top-bar'>
        <div className='container-logo'>
          <GiGamepadCross size={47}/>
          <h2>Planningame</h2>
        </div>
      </div>
      <div className='contaier-players'>
        <Player name={"rharison"}/>
      </div>
    </div>
  )
}

export default App
