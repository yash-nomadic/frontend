import React from 'react'

const Card = ({ title , description , primary , secondary }) => {
  return (
    <div className='bg-white border border-gray-300 shadow-md rounded-md p-8 w-1/2 mx-auto'>

        <h1 className='text-3xl font-bold mb-5'>{title}</h1>

        <p className=''>{description}</p>

        <div className='flex gap-4'>
            <button className='bg-blue-500 px-3 py-1 text-white rounded-md'>{primary}</button>
            <button className='border border-blue-500 p-6 text-blue-500 rounded-mb'>{secondary}</button>
        </div>




    </div>
  )
}

export default Card