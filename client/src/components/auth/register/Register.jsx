import React from 'react'
import style from './register.module.css'

const Register = () => {
  return (
    <div>
      <form action="" className={style.centre}>
        <label htmlFor="">name</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">email</label>
        <input type="email" name="" id="" />
        <br />
        <label htmlFor="">password</label>
        <input type="password" name="" id="" />
      </form>
      <button type="submit" className={style.button}>
        register
      </button>
    </div>
  )
}

export default Register