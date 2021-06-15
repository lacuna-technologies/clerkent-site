import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import UserAgent, { browserState } from '../../../lib/UserAgent'
import { IoLaptopOutline } from 'react-icons/io5'
import './Installation.scss'

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

const Installation = () => {
  const [browserState, setBrowserState] = useState(`Chrome` as browserState)

  useEffect(() => {
    setBrowserState(UserAgent.getBrowserState())
  }, [])

  return (
    <section id="clerkent-installation">
      
      {
        browserState === `Not Desktop` ? (
          <div className="browser-guess">
            <div className="left">
              <IoLaptopOutline size="55" />
            </div>
            <div className="right">
              <p>
                Clerkent is available only on laptops and desktop computers at the moment.
                Please visit this page on a computer to install the extension.
              </p>
            </div>
          </div>
        ) : browserState === `Unknown` ? (
          <div className="browser-guess">
            <div className="left">
              🛠
            </div>
            <div className="right">
              <p>
                Clerkent is only available for Chrome, Firefox, and Edge at the moment.
              </p>
            </div>
          </div>
        ) : (
          <a className="browser-guess" href={browserMap[browserState].storeURL}>
            <div className="left">
              <img
                src={browserMap[browserState].icon}
                width="50"
                alt={`Install`}
              />
            </div>
            <div className="right">
              <h2>Install for {browserState}</h2>
            </div>
          </a>
        )
      }
      <Link to="/install">Install for other browsers</Link>
    </section>
  )
}

export default Installation