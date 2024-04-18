import React from 'react'
import Footer from '../components/footer';
import Navbar from './navbar';
import Toaster from 'react-hot-toast'

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <Toaster />
            {children}
            <Footer/>
        </>
    )
}

export default MainLayout;