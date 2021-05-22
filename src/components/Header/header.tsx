import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link className="title" to="/">
          <strong>Clerkent</strong>
        </Link>
      </nav>
    </header>
  )
}

export default Header