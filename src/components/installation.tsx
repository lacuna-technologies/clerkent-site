import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import UserAgent, { browserState } from '../lib/UserAgent'
import { IoLaptopOutline } from 'react-icons/io5'

const browserMap = {
  'Chrome': {
    icon: `https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome.svg`,
    storeURL: `https://chrome.google.com/webstore/detail/clerkent/ogjefnociaddjemkkajgmfpmhmpokmhj`,
  },
  'Edge': {
    icon: `https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge.svg`,
    storeURL: `/help#edge-installation`,
  },
  'Firefox': {
    icon: `https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox.svg`,
    storeURL: `https://addons.mozilla.org/en-US/firefox/addon/clerkent/`,
  },
} as const

const browserGuessClass = `flex md:flex-row flex-col border border-solid py-4 md:px-8 px-4 cursor-pointer md:gap-4 gap-2 md:mb-4 mb-2 no-underline`
const leftClass = `flex justify-center items-center md:text-5xl text-3xl`
const rightClass = `flex items-center text-sm leading-snug`

const Installation = () => {
  const [browserState, setBrowserState] = useState(`Chrome` as browserState)

  useEffect(() => {
    setBrowserState(UserAgent.getBrowserState())
  }, [])

  return (
    <section className="md:my-8 mt-4 text-center">
      {
        browserState === `Not Desktop` ? (
          <div className={`border-black ${browserGuessClass}`}>
            <div className={leftClass}>
              <IoLaptopOutline />
            </div>
            <div className={rightClass}>
              Clerkent is available only on laptops and desktop computers at the moment.
              Please visit this page on a computer to install the extension.
            </div>
          </div>
        ) : browserState === `Unknown` ? (
          <div className={`border-black ${browserGuessClass}`}>
            <div className={leftClass}>
              🛠
            </div>
            <div className={rightClass}>
              Clerkent is only available for Chrome, Firefox, and Edge at the moment.
            </div>
          </div>
        ) : (
          <a
            className={`bg-clerkent-green text-white ${browserGuessClass} border-clerkent-green hover:bg-clerkent-green-light`}
            href={browserMap[browserState].storeURL}>
            <div className={`${leftClass}`}>
              <img
                src={browserMap[browserState].icon}
                width="50"
                alt={`Install`}
              />
            </div>
            <div className={rightClass}>
              <h2 className="text-xl font-bold">
                Install for {browserState}
              </h2>
            </div>
          </a>
        )
      }
      <Link to="/install" className="md:text-base text-sm">
        Install for other browsers
      </Link>
    </section>
  )
}

export default Installation