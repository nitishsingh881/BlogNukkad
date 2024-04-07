import React from 'react'
import AdminNavbar from '../components/navbar'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default Layout