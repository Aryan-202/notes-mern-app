import React from 'react'
import style from './login.module.css'


const Login = () => {
  return (
    <div>

      <form action="" className={style.centre}>
        <label htmlFor="">email</label>
        <input type="email" name="" id="" />
        <br />
        <label htmlFor="">password</label>
        <input type="password" name="" id="" />
      </form>

    </div>
  )
}

export default Login