import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Donate from './pages/donate';
import Games from './pages/games';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
