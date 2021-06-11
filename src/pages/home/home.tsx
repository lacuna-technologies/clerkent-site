import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import './home.scss'

const title = `Clerkent`
const description = `quickly and conveniently search for case law and legislation`

const HomePage = () => {
  return (
    <Layout noHeader>
      <SEO title="Home" />
      <main id="home-page">
        <StaticImage src='../../images/clerkent.png' alt="Clerkent" id="logo" width={100} />
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
            <Link to="/help#edge-installation">
              <img
                src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge.svg"
                width="50"
                alt="Install for Microsoft Edge"
              />
            </Link>
          </div>
        </section>
        <section className="features">
          <p>Search for judgments and legislative provisions directly from your browser toolbar</p> 
          <ul>
            <li>
              Case law: United Kingdom, Court of Justice of the European Union (CJEU), Singapore, Hong Kong, Canda, Australia, and New Zealand
            </li>
            <li>
              Legislation: only UK, SG, and EU for now, more coming soon
            </li>
          </ul>
          <div><StaticImage src='../../images/screenshot_uk.png' alt="demo gif" /></div>
          <ul>
            <li>
              No need to check jurisdiction-specific websites when looking for foreign cases
            </li>
            <li>
              Automatically renames PDFs of judgments to follow the standardised <code>&lt;case name&gt; &lt;case citation&gt;.pdf</code> naming system
            </li>
            <li>
              Search proprietary databases (e.g. LawNet, WestLaw, etc.) if the case in question is not publicly-available
            </li>
          </ul>
          <p>
            Case citations on webpages are highlighted and are hyperlinked to the full judgements.
          </p>
          <div><StaticImage src='../../images/on-hover.png' alt="highlight screenshot" /></div>
        </section>
        {/* <section className="screenshots">
          <img src={DemoGif} alt="demo gif" />
        </section> */}
        <section className="more-links">
          <Link to="/help">Get Help</Link>
        </section>
        <footer>
          <p>
            created by&nbsp;
            <a target="_blank" href="https://huey.xyz" rel="noreferrer">Huey</a>
          </p>
          <p>
            source code available on&nbsp;
            <a target="_blank" href="https://github.com/lacuna-technologies/clerkent" rel="noreferrer">GitHub</a>
          </p>
        </footer>
      </main>
    </Layout>
  )
}

export default HomePage
