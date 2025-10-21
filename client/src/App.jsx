import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home'
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';



function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
