import './App.css';
import Dashboard from './Pages/Dashboard';
import Addres from './Pages/addres';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Dashboard/> } />
        <Route path='addresources' element={ <Addres/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
