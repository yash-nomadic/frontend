'use client'

import React, { useState } from 'react'

const Todolist = () => {

    // let count = 0;
    // const [count, setCount] = useState(0)

    const [taskList, setTaskList] = useState([
        { text: 'Eat Food', completed: false },
        { text: 'Play Games', completed: false },
        { text: 'Do calling', completed: false }
    ]);

    const addNewTask = (e) => {
        console.log(e.code);

        if (e.code === 'Enter') {
            console.log(e.target.value);
            e.target.value = ''

        }

    }


    return (
        <div className='bg-slate-100 h-screen'>
            <div className='max-w-[80%] mx-auto py-10'>

                <h1 className='font-bold text-center my-5 text-3xl'>TODO LIST</h1>

                <div className='bg-white rounded-lg shadow-lg'>

                    <div className='p-6 border-b-2'>

                        <input
                            onKeyDown={addNewTask}
                            className='w-full px-3 py-1 border-2'
                            type="text"
                        />

                        {/* <h1 className='text-2xl font-bold'>{count}</h1>

                        <button className='border p-3' onClick={() => {
                            setCount(count+1);
                            console.log(count);

                        }}>Add Count</button> */}
                    </div>

                    <div className='p-8'>
                        {
                            taskList.map((task, index) => {
                                return <div key={index} className='shadow mb-5 rounded-lg p-5 bg-slate-200 font-medium'>
                                    <p>{task.text}</p>
                                </div>
                            })
                        }



                    </div>

                </div>

            </div>




        </div>
    )
}

export default Todolist