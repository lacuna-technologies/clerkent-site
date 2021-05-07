import React from "react"
import ClerkentLogo from '../../images/clerkent-dark.png'
import { Link } from 'gatsby'
import './home.scss'

const HomePage = () => {
  return (
    <main id="home-page">
      <img src={ClerkentLogo} alt="Clerkent" width="100" id="logo" />
      <h1>Clerkent</h1>
      <h2 className="subtitle">a browser extension that helps you quickly locate, view, and download legal judgments</h2>
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
        <p>Supports UK, EU (CJEU, EPO), SG, AU, and NZ citations. Try it out here:</p>
        <div className="demo-citations">
          <div>[2020] EWHC 2472</div>
          <div>[1989] AC 217</div>
        </div>
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
