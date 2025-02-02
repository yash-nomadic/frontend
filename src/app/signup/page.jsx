import React from 'react'

const Signup = () => {
  return (

    <section  className='flex justify-center h-screen items-center '>

      <div className='border border-gray-800 w-1/2 p-6 rounded-xl shadow-gray-800 shadow-xl '>
        <h1 className='text-3xl text-center font-bold my-6  '>Register Your Details</h1>

        <div>

          <form className='text-xl'>

            <label htmlFor="first_name">First Name</label><br />
            <input type="text" placeholder='Enter your first name here' className='border border-gray-800 w-1/2 ' /><br />

            <label htmlFor="last_name">Last Name</label><br />
            <input type="text" placeholder='Enter your last name here' className='border border-gray-800 w-1/2' /><br />

            <label htmlFor="email">Email</label><br />
            <input type="text" placeholder='Enter your email ' className='border border-gray-800 w-1/2' /><br />

            <label htmlFor="text">Username</label><br />
            <input type="text" placeholder='Create your username' className='border border-gray-800 w-1/2' /><br />

            <label htmlFor="password">Create Password</label><br />
            <input type="password" placeholder='Create your password' className='border border-gray-800 w-1/2' /><br />

            <label htmlFor="password">Confirm Password</label><br />
            <input type="password" placeholder='Confirm your password' className='border border-gray-800 w-1/2' /><br />

            <button className='border w-1/4  rounded-lg bg-blue-500 text-white text-center my-8 p-2'>Register</button>


          </form>


        </div>



      </div>


    </section>



  )
}

export default Signup;