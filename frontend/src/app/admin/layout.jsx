import React from 'react'
import AdminNavbar from '../components/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <div className='pt-20'></div>
            {children}
        </>
    )
}

export default Layout