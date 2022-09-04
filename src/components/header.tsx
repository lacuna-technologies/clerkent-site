import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="flex flex-row max-w-screen-md mx-auto py-4 md:px-0 px-4">
      <nav>
        <Link className="text-2xl font-bold" to="/">
          Clerkent
        </Link>
      </nav>
    </header>
  )
}

export default Header