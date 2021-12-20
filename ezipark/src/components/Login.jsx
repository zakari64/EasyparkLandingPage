import React from 'react'

function Login() {
    return (
        <section className='login-page'>
           <div className="login-area">
               <form className='form-sec'> 
                   <label id='1'>
                       Username :
                       <input type="text" className='usr' placeholder='Enter username ...'/>
                   </label>
                   <label id='2'>
                       Password :
                       <input type="password" className='pwd' placeholder='Enter password' />
                   </label>
               </form>
           </div>
        </section>
    )
}

export default Login
