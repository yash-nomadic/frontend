'use client'

import axios from 'axios'
import React, { useEffect } from 'react'

const ManageUser = () => {

    const fetchUserData = async () => {

       const res = await axios.get('http://localhost:5000/user/getall');
       console.log(res.data);
       
    }

    useEffect(() => {
        fetchUserData();
    },[]);

    return (

        <div>

            <div className='max-w-[80%] mx-auto h-screen mt-8'>
                <h1 className='text-4xl font-bold text-center'>Manage User</h1>

            </div>

        </div>
    )
}

export default ManageUser;