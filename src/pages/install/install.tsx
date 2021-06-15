import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import UserAgent, { browserState } from '../../lib/UserAgent'
import './install.scss'

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

const description = `Clerkent is a browser extension — a small 'add-on' / 'plugin' that provides your web browser with additional capabilities. Installing a browser extension is a straightforward process that should take less than a minute.`

const InstallPage = () => {
  const [browserState, setBrowserState] = useState(`Chrome` as browserState)
  const [browserName, setBrowserName] = useState(`Chrome`)

  useEffect(() => {
    setBrowserState(UserAgent.getBrowserState())
    setBrowserName(UserAgent.getBrowserName())
  }, [])

  return (
    <Layout>
      <main id="install-page">
        <SEO title="Installation" description={description} />
        <h1>Installation</h1>
        <p>{description}</p>
        <section className="installation-options">
          <p>Clerkent is available for the following browsers:</p>
          <div className="browsers-list">
            <a className="chrome" href={browserMap[`Chrome`].storeURL}>
              <img
                src={browserMap[`Chrome`].icon}
                width="50"
                alt={`Install for Chrome`}
              />
              <span>Chrome</span>
            </a>
            <a className="firefox" href={browserMap[`Firefox`].storeURL}>
              <img
                src={browserMap[`Firefox`].icon}
                width="50"
                alt={`Install for Firefox`}
              />
              <span>Firefox</span>
            </a>
            <Link className="edge" to={browserMap[`Edge`].storeURL}>
              <img
                src={browserMap[`Edge`].icon}
                width="50"
                alt={`Install for Edge`}
              />
              <span>Edge</span>
            </Link>
          </div>
        </section>
        <div id="browser-guess">
          {
            (browserState === `Chrome` || browserState === `Firefox`) ? (
              <>
              <div className="left">
                <a
                  href={browserMap[browserState].storeURL}
                >
                  <img
                    src={browserMap[browserState].icon}
                    width="50"
                    alt={`Install for ${browserName}`}
                  />
                </a>
                
              </div>
              <div className="right">
                <p>
                  It looks like your web browser is {browserName}.&nbsp;
                  After clicking <a href={browserMap[browserState].storeURL}>this link to the {browserName} extension page</a>,
                  click the 'Add to {browserName}' button on that page to install Clerkent. That's it.
                </p>
              </div>
              </>
            ) : null
          }
        </div>
        {
          browserState === `Chrome` ? (
            <StaticImage
              src="../../images/chrome_extension_page_screenshot.png"
              alt={`Screenshot of Chrome extension page`}
            />
          ) :
          browserState === `Firefox` ? (
            <StaticImage
              src="../../images/firefox_extension_page_screenshot.png"
              alt={`Screenshot of Chrome extension page`}
            />
          ) : null
        }
      </main>
    </Layout>
  )
}

export default InstallPage