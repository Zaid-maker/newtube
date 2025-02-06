import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-3xl font-bold'>YouTube Clone</h1>
      <Button variant={'default'}>Click me</Button>
    </div>
  )
}

export default Home