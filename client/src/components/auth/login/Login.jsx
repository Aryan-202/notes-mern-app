import React, { useState } from 'react'
import style from './login.module.css'
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [error, setError] = useState('');

  const {login ,loading} = useAuth()
  const navigate = useNavigate()

  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if(error) setError('')
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.email || !formData.password){
      setError('fill all data');
      return
    }

    const result = await login(formData.email, formData.password)

    if(result.success){
      navigate('/')
    }else{
      setError(result.message)
    }
  }
  return (
    <div className={style.centre}>
      <h1>login</h1>
      <form  onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" value={formData.email}  onChange={handleChange} required/>
        <br />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
      </form>
      <button type="submit" onClick={handleSubmit}>
        {loading? 'logging in....': 'login'}
      </button>
    </div>
  )
}

export default Login