import './App.css';
import { Outlet} from 'react-router-dom';
// import {NavBar} from './components/NavBar';
// import { WebFooter } from './components/webFooter';



function App() {
  return (
    <div className='App'>
      {/* <NavBar /> */}
      <Outlet />
      {/* <WebFooter /> */}
    </div>
  );
}

export default App;
