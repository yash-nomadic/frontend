'use client';

import React from 'react'

const EventHandling = () => {
    return (
        <div className='max-w-[80%] mx-auto'>

            <h1 className='text-3xl font-bold text-center my-6'>Event Handling</h1>
            <hr />

            <button
                onClick={() => { aler('button was clicked'); }}
                className='border rounded-md p-3 bg-gray-200'>
                Click me
            </button>


            <input
                className='w-full px-3 py-1 border-2 mt-5'
                type="text" />

        </div>
    )
}

export default EventHandling