import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../auth/login/Login'
import Register from '../auth/register/Register'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        
        <button onClick={()=>navigate('/login')}>
            login
        </button>
        <button onClick={()=>navigate('/register')}>
            register
        </button>


    </div>
  )
}

export default Home