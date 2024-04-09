import React from 'react'
import Navbar from './navbar';
import Toaster from 'react-hot-toast'

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Toaster />
            {children}
        </>
    )
}

export default MainLayout;