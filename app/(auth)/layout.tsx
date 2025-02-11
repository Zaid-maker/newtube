import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='min-h-screen flex items-center justify-center'>{children}</div>
    )
}

export default Layout