import './App.css';
import Dashboard from './Pages/Dashboard';
import Address from './Pages/address';
import About from './Pages/about';
import Services from './Pages/services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addresources' element={<Address />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        {/* Add the Routes for the other pages too...like the About page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
