import './App.css'
import Table from './components/Table'

function App() {

  const players = [
    {name: 'Rharison'},
    {name: 'Thander'},
    // {nome: 'Marcelo'},
    // {nome: 'Luiz Alexandre'},
    // {nome: 'Wanderson'},
    // {nome: 'Rayslla'},
    // {nome: 'Marco'},
    // {nome: 'Matheus'},
  ]

  return (
    <div className='app'>
      <Table players={players}/>
    </div>
  )
}

export default App
