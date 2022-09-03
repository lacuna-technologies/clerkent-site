import React from 'react'
import Header from './header'

const Layout = ({ children, noHeader = false }) => (
  <div className="w-full mx-auto">
    { noHeader ? null : <Header /> }
    {children}
  </div>
)

export default Layout