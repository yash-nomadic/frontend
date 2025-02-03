import React from 'react';

const Login = () => {
  return (



    <section className='flex justify-center h-screen items-center bg-gradient-to-r from-blue-500/50 via-pink-500/50 via-red-500/50'>



      <div className='border w-1/5 border-gray-800 align center rounded-lg shadow-gray-800 shadow-xl '>

        <h1 className='text-center font-bold my-10 text-3xl'>Login</h1>

        <div className=''>

          <form className='text-xl p-4 font-semibold my-6'>

            <label htmlFor="email" >Email</label>
            <input type="text" placeholder='Enter your email here' className='border border-gray-800 w-full ' /> 


            <label htmlFor="pasword">Password</label>
            <input type="password" placeholder='Enter your password here' className='border border-gray-800 w-full ' /> 

            <button className='block w-1/2 rounded-lg bg-blue-500 text-white text-center mx-auto my-4'>Submit</button>




          </form>


        </div>

      </div>

    </section>


        


  )
}

export default Login;