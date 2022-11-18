import React from 'react'

const Subscribe = ({ className = `` }) => {
  return (
    <section className={`max-w-screen-md mx-auto flex justify-between my-4 ${className}`}>
      <div className="flex-grow flex text-left px-4 py-2 border border-clerkent-green items-center">
        <h1 className="md:text-2xl text-sm font-bold clerkent-green">
          Latest changes and upcoming features
        </h1>
      </div>
      <a
        className="flex-1 h-full bg-clerkent-green text-white border-clerkent-green border border-solid py-4 md:px-8 px-4 cursor-pointer hover:bg-clerkent-green-light text-center no-underline"
        href="https://updates.clerkent.huey.xyz/#/portal/"
      >
        Subscribe
      </a>
    </section>
  )
}

export default Subscribe