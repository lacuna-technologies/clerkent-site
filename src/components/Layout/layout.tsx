import React from 'react'
import Header from '../Header'
import './layout.scss'

const Layout = ({ children, noHeader = false }) => (
  <div id="layout">
    { noHeader ? null : <Header /> }
    {children}
  </div>
)

export default Layout