import React from 'react'

interface FeedLayoutProps {
    children: React.ReactNode
}

const FeedLayout = ({children}: FeedLayoutProps) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen space-y-4'>
            {children}
        </div>
    )
}

export default FeedLayout