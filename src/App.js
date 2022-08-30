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


function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state = {props.state.navbarFriends}/>
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs store = {props.store} />} />
            <Route path='/profile' element={<Profile state = {props.state.profilePage} dispatch ={props.dispatch}/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
