'use client'

import React, { useState } from 'react'

const Chat = () => {

    const [msgList, setMsgList] = useState();


    const addMsg = (e) => {

        if (e.code === 'Enter') {

            if (!e.target.value.trim()) {
                return alert('Please Type Something')
            }

            console.log(e.target.value);

            const newMsg = { text: e.target.value, complete: false }

            setMsgList([addMsg, ...msgList]);

            e.target.value = '';

        }

    }





    return (
        <div className='bg-slate-200 h-screen'>

            <div className='mx-auto py-10 max-w-[80%]'>

                <div className='bg-white rounded-lg shadow-lg   '>

                    <input
                        onKeyDown={addMsg}
                        className='w-full p-6 border-b-2 '
                        type="text" />

                </div>

                <div className='p-8 h-[60vh] overflow-y-scroll'>
                    {
                        msgList.map((msg, index) => {
                            return <div key={index} className='shadow mb-5 rounded-lg p-5 bg-blue-500 font-medium text-white flex justify-between items-center'>
                                <p>{msg.text}</p>
                            </div>
                        })


                    }




                </div>

                <div className=' '>
                    <h1 className='text-3xl font-bold text-center '>CHAT BOX</h1>

                </div>

            </div>

        </div>
    )

}

export default Chat