import React from "react"
import ClerkentLogo from '../../images/clerkent-dark.png'
import DemoGif from '../../images/clerkent-1.3-demo.gif'
import OnHover from '../../images/on-hover.png'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import './home.scss'

const title = `Clerkent`
const description = `a browser extension that helps you quickly locate, view, and download legal judgments`

const HomePage = () => {
  return (
    <Layout noHeader>
      <SEO title="Home" />
      <main id="home-page">
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
        <section className="features">
          <h2>Never more than one click away</h2>
          <p>Search for judgments and legislative provisions directly from your browser toolbar</p> 
          <ul>
            <li>
              Case law: United Kingdom, Court of Justice of the European Union (CJEU), Singapore, Hong Kong, Canda, Australia, and New Zealand
            </li>
            <li>
              Legislation: only UK and SG for now, more coming soon
            </li>
          </ul>
          <div><img src={DemoGif} alt="v1.3 demo gif" /></div>
          <p>
            Case citations on webpages are highlighted and are hyperlinked to the full judgements.
          </p>
          <div><img src={OnHover} alt="highlight screenshot" /></div>
        </section>
        {/* <section className="screenshots">
          <img src={DemoGif} alt="demo gif" />
        </section> */}
        <section className="more-links">
          <Link to="/help">Get Help</Link>
        </section>
        <footer>
          <p>created by <a target="_blank" href="https://huey.xyz" rel="noreferrer">Huey</a></p>
        </footer>
      </main>
    </Layout>
  )
}

export default HomePage
