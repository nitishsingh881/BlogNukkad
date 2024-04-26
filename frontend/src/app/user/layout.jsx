import React from 'react'
import Navbar from '../(main)/Navbar2'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout