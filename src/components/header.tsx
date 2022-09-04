import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <header className="flex flex-row max-w-screen-md mx-auto py-4 md:px-0 px-4">
      <nav>
        <Link className="text-2xl font-bold flex flex-row gap-4 items-center" to="/">
          <StaticImage
            src='../images/clerkent.png'
            alt="Clerkent"
            width={40}
            className="w-[40px] flex-none aspect-square"
            quality={90}
          />
          <div>
            Clerkent
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header