import './App.css';
import Board from './Components/Board/Board';
import {GiHamburgerMenu} from "react-icons/gi";
import { HiUserCircle  } from "react-icons/hi";


function App() {
  return (
    <div className="App">
    <div className='top-header'>
      <GiHamburgerMenu className='icon'/>
      <h1 className='heading'>Trello</h1>
      <HiUserCircle className='icon' />
    </div>
      <Board />
    </div>
    
  );
}

export default App;
