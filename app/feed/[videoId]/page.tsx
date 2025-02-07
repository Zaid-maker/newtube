'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const VideoId = () => {
    const { videoId } = useParams()
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h1 className='text-3xl font-bold'>Video ID Page</h1>
      <p className='text-lg'>Displaying content for video ID: {videoId}</p>
    </div>
  )
}

export default VideoId