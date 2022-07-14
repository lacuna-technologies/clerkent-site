import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import UserAgent, { browserState } from '../lib/UserAgent'
import '../styles/styles.css'

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
    setBrowserName(UserAgent.getBrowserName() as string)
  }, [])

  return (
    <Layout>
      <SEO title="Installation" description={description} />
      <main className="py-4">
        <h1 className="text-3xl font-bold my-4">Installation</h1>
        <p className="py-2">
          {description}
        </p>
        <section className="my-4">
          <p>
            Clerkent is available for the following browsers:
          </p>
          <div className="flex justify-center gap-12 my-4">
            <a href={browserMap[`Chrome`].storeURL}>
              <img
                src={browserMap[`Chrome`].icon}
                width="50"
                alt={`Install for Chrome`}
              />
              <span>Chrome</span>
            </a>
            <a href={browserMap[`Firefox`].storeURL}>
              <img
                src={browserMap[`Firefox`].icon}
                width="50"
                alt={`Install for Firefox`}
              />
              <span>Firefox</span>
            </a>
            <a href={browserMap[`Edge`].storeURL}>
              <img
                src={browserMap[`Edge`].icon}
                width="50"
                alt={`Install for Edge`}
              />
              <span>Edge</span>
            </a>
          </div>
        </section>
        <div className="flex mt-6 mb-8 gap-4">
          {
            (browserState === `Chrome` || browserState === `Firefox`) ? (
              <>
              <div className="flex justify-center items-center shrink-0">
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
              <div>
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
              src="../images/chrome_extension_page_screenshot.png"
              alt={`Screenshot of Chrome extension page`}
            />
          ) :
          browserState === `Firefox` ? (
            <StaticImage
              src="../images/firefox_extension_page_screenshot.png"
              alt={`Screenshot of Chrome extension page`}
            />
          ) : null
        }
      </main>
    </Layout>
  )
}

export default InstallPage