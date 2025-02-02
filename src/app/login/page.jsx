import React from 'react';
import myclasses from './login.module.css';

const Login = () => {
  return (
    <section className='flex justify-center h-screen items-center'>



      <div className='border w-1/5 border-gray-800 align center rounded-lg shadow-gray-800 shadow-xl  '>

        <h1 className='text-center font-bold my-10 text-3xl'>Login</h1>

        <div>

          <form className='text-xl p-8  font-semibold  '>

            <label htmlFor="email" >Email</label>
            <input type="text" placeholder='Enter your email here' className='border border-gray-800 w-full ' /><br />


            <label htmlFor="pasword">Password</label>
            <input type="password" placeholder='Enter your password here' className='border border-gray-800 w-full ' /><br />

            <button className='border w-1/2  rounded-lg bg-blue-500 text-white text-center'>Submit</button>

            <button className={myclasses.localBtn}>Local Button</button>


          </form>


        </div>

      </div>

    </section>



  )
}

export default Login;