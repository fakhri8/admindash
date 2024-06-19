import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../src/components/authentication/Login'
import SignUp from '../src/components/authentication/SignUp'
import Home from './components/home/Home';
import Users from './components/Users/Users';
import Dash from './components/dash/Dash';
import Profile from '../src/components/profile/Profile'
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Dash' element={<Dash/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
