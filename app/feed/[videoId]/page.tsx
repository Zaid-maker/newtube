import React from 'react'

interface VideoIdProps {
    params: Promise<{ videoId: string }>
}

const VideoId = async ({ params }: VideoIdProps) => {
    const { videoId } = await params;

    return (
        <div >
            <h1 className='text-3xl font-bold'>Video ID Page</h1>
            <p className='text-lg'>Displaying content for video ID: {videoId}</p>
            
        </div>
    )
}

export default VideoId