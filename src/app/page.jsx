import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/TextInput';
import React from 'react'

const Home = () => {
  return (
    <div>


      <h1 className='text-center font-bold my-5 text-3xl'>Home</h1>

      <h2 style={{ color: 'red', textAlign: 'center', fontSize: '30 ' }}>Welcome to React using Next JS</h2>

      <input type="text" className='border border-gray-800 p-2' placeholder='text' />

      <button className='global-btn'>Global Button</button>


      <img src="/next.svg" alt="" />

      <Button disabled={true}>My button</Button>
      <Button>Submit</Button>
      <Button disabled={true}>Nice</Button>


      <Card
        title={'my card tittle'}
        description={'this is a card discription'}
        primary={'ok'}
        secondary={'cancel'}


      />


      <Input
        id='name'
        label='Name'
        type='text'
        placeholder='Enter your name'
        
      />





    </div>
  )
}

export default Home;