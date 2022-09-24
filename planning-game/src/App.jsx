import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css'
import Game from "./partials/game/Game";
import CreateRoom from "./partials/createRoom/CreateRoom";
import EnterGame from "./partials/enterGame/EnterGame";
import { GiGamepadCross } from 'react-icons/gi';

const PrivateRoute = ({ children, redirectTo }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to={ redirectTo }/>;
}

export default function App() {
  return (
    <div className='app'>
      <div className='top-bar'>
        <div className='container-logo'>
          <GiGamepadCross size={47}/>
          <h2>Planningame</h2>
        </div>
      </div>
      <Routes>
        <Route path="/createroom" element={ <CreateRoom/> } />
        <Route path="/entergame" element={ <EnterGame/> } />
        <Route
          path="/game"
          element={
            <PrivateRoute redirectTo="/entergame">
              <Game/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}