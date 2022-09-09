import React from 'react';

const LoginForm = (props) => {

    return (
        <div className='login-form-background'>
            <div className='login-form'>
            <div className='login-form__heading'>
                <p className='login-form__pre-heading'>welcome back</p>
                <h1 className='login-form__main-heading'>Login into your account</h1>
            </div>
            <form onSubmit={props.onSubmit} className='login-form__form'>
                <div className='login-form__username'>
                    <p>Email or Username</p>
                    <input type='text' placeholder='Enter your email or username' />
                </div>
                <div className='login-form__password'>
                    <div className='login-form__password-labels'>
                        <p>Password</p>
                        <p>forgot password?</p>
                    </div>
                    <input type='password' placeholder='Enter your password' />
                    <i class="login-form__eye bi bi-eye" id="togglePassword"></i>
                </div>
                
                <button className='login-form__submit'>Login now</button>
            </form>
            <div className='login-form__register'>
                    <button onClick={props.onRegister}><span>Not registered yet?</span> Register →</button>
            </div>
         </div>
        </div>
    )
}

export default LoginForm