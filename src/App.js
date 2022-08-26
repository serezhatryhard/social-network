import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {
  Routes,
  Route, 
  Link
} from 'react-router-dom';


function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/dialogs'element={<Dialogs />} />
            <Route path='/profile'element={<Profile />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
