import React from "react"
import ClerkentLogo from '../../images/clerkent-dark.png'
import DemoGif from '../../images/demo.gif'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import './home.scss'

const title = `Clerkent`
const description = `a browser extension that helps you quickly locate, view, and download legal judgments`
const imageURL = `https://clerkent.huey.xyz${ClerkentLogo}`

const HomePage = () => {
  return (
    <main id="home-page">
      <Helmet
        title="Clerkent"
        meta={[
          {content: title, property: `og:title`},
          {content: description, name: `description`},
          {content: `website`, property: `og:type`},
          {content: imageURL, property: `og:image`},
          {content: `summary_large_image`, name: `twitter:card`},
          {content: title, name: `twitter:title`},
          {content: description, name: `twitter:description`},
          {content: imageURL, name: `twitter:image`},
        ]}
      />
      <img src={ClerkentLogo} alt="Clerkent" width="100" id="logo" />
      <h1>{title}</h1>
      <h2 className="subtitle">{description}</h2>
      <section className="download">
        <h2>Install: </h2>
        <div className="download-buttons">
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/clerkent/"
            title="link to firefox add-ons store"
          >
            <img
              src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox.svg"
              width="50"
              alt="Install for Firefox"
            />
          </a>
          <a
            href="https://chrome.google.com/webstore/detail/clerkent/ogjefnociaddjemkkajgmfpmhmpokmhj"
            title="link to chrome web store"
          >
            <img
              src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome.svg"
              width="50"
              alt="Install for Google Chrome"
            />
          </a>
        </div>
      </section>
      <section className="screenshots">
        <img src={DemoGif} alt="demo gif" />
      </section>
      <section className="more-links">
        <Link to="/help">Get Help</Link>
      </section>
      <footer>
        <p>created by <a target="_blank" href="https://huey.xyz" rel="noreferrer">Huey</a></p>
      </footer>
    </main>
  )
}

export default HomePage
