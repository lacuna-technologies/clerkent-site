import React from 'react'
import { useEffect, useState } from 'preact/hooks'
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

const browserGuessClass = `flex border border-solid border-black py-4 px-8 cursor-pointer gap-4 mb-4 no-underline hover:bg-neutral-100`
const leftClass = `flex justify-center items-center`
const rightClass = `flex items-center`

const Installation = () => {
  const [browserState, setBrowserState] = useState(`Chrome` as browserState)

  useEffect(() => {
    setBrowserState(UserAgent.getBrowserState())
  }, [])

  return (
    <section className="my-8 text-center">
      {
        browserState === `Not Desktop` ? (
          <div className={browserGuessClass}>
            <div className={leftClass}>
              <IoLaptopOutline size="55" />
            </div>
            <div className={rightClass}>
              Clerkent is available only on laptops and desktop computers at the moment.
              Please visit this page on a computer to install the extension.
            </div>
          </div>
        ) : browserState === `Unknown` ? (
          <div className={browserGuessClass}>
            <div className={leftClass}>
              🛠
            </div>
            <div className={rightClass}>
              Clerkent is only available for Chrome, Firefox, and Edge at the moment.
            </div>
          </div>
        ) : (
          <a className={browserGuessClass} href={browserMap[browserState].storeURL}>
            <div className={leftClass}>
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
      <Link to="/install">
        Install for other browsers
      </Link>
    </section>
  )
}

export default Installation