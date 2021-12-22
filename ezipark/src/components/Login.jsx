import React from 'react'
import login from '../styles/login.css'

function Login() {
    return (
        <section>
            <div className="login-area">
               <form className="form-area">
                   <label >
                      Username :
                      <input type="text" className="usr" />
                   </label>
                   <label>
                       Password :
                       <input type="password" className="pwd" />
                   </label>
               </form>
            </div>
        </section>
    )
}

export default Login
