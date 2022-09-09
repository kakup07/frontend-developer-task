import React from 'react'

const SignupForm = (props) => {
    return (
        <div className='signup-form'>
                <div className='signup-form__heading'>
                    <p className='signup-form__pre-heading'>sign up</p>
                    <h1 className='signup-form__main-heading'>Create an account to continue</h1>
                </div>
                <form onSubmit={props.onSubmit} className='signup-form__form'>
                    <div>
                        <p>Email</p>
                        <input  type='email' placeholder='Enter your email' />
                    </div>
                    <div className='signup-form__username'>
                        <p>Username</p>
                        <input  type='text' placeholder='Choose a preferred username' />
                    </div>
                    <div className='signup-form__password'>
                        <p>Password</p>
                        <input type='password' placeholder='Choose a strong password' />
                        <i class="signup-form__eye bi bi-eye" id="togglePassword"></i>
                    </div>
                    
                    <button className='signup-form__submit'>Continue</button>
                </form>
                <div className='signup-form__register'>
                    <button onClick={props.onLogin}><span>Already have an account?</span> Login →</button>
                </div>
                
            </div>
    )
}

export default SignupForm