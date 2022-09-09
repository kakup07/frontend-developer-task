import React from 'react'
import LoginForm from './LoginForm'
import { images } from '../constants'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className='login-page'>
        <img src={images.Logo} alt='logo'></img>
        <div className='login-page__form'><LoginForm onSubmit={() => navigate("../dashboard", { replace: true }) }/></div>
    </div>
  )
}

export default LoginPage