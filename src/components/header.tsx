import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="flex flex-row">
      <nav>
        <Link className="text-2xl font-bold" to="/">
          Clerkent
        </Link>
      </nav>
    </header>
  )
}

export default Header