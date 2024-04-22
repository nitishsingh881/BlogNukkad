import React from 'react'
import AdminNavbar from '../components/navbar'
import Navbar from '../(main)/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='pt-20'></div>
            {children}
        </>
    )
}

export default Layout