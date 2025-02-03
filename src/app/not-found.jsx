import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='text-center space-y-4'>
                <h1 className='text-9xl font-bold'>404</h1>
                <h2 className='text-3xl font-bold'>Not Found</h2>
                <Link href='/' className='block bg-black text-white rounded-xl p-3'>Back To Home</Link>
            </div>
        </div>

    )
}

export default NotFound