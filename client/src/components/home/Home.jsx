import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './home.module.css'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='centre-container'>
        
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