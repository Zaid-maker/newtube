import React from 'react'

interface HomeLayoutProps {
    children: React.ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}
