import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/Home'


function App() {

  return (
    <>
      <Router>
        <Route path='/' element={<Home/>} />
      </Router>
    </>
  )
}

export default App
