import React from 'react'
import Header from './header'
const Layout = ({ children, noHeader = false }) => (
  <div className="max-w-screen-md w-full mx-auto p-4">
    { noHeader ? null : <Header /> }
    {children}
  </div>
)

export default Layout