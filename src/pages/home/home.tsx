import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import './home.scss'
import Installation from "./Installation"

const title = `Clerkent`
const description = `a browser extension that helps you quickly and conveniently search for case law and legislation`

const HomePage = () => {
  return (
    <Layout noHeader>
      <SEO title="Home" description={description} />
      <main id="home-page">
        <StaticImage src='../../images/clerkent.png' alt="Clerkent" id="logo" width={100} />
        <h1>{title}</h1>
        <h2 className="subtitle">{description}</h2>
        <Installation />
        <section className="features">
          <ul>
            <li>
              No need to check jurisdiction-specific websites when looking for foreign cases
            </li>
            <li>
              Automatically renames PDFs of judgments to follow the standard <code>&lt;case name&gt; &lt;case citation&gt;.pdf</code> naming system
            </li>
            <li>
              Search proprietary databases (e.g. LawNet, WestLaw, etc.) if the case in question is not publicly-available
            </li>
          </ul>
          <div><StaticImage src='../../images/screenshot_uk.png' alt="demo gif" /></div>
          <p>Search for judgments and legislative provisions across various Commonwealth jurisdictions</p> 
          <ul>
            <li>
              Case law: United Kingdom, Court of Justice of the European Union (CJEU), Singapore, Hong Kong, Canda, Australia, and New Zealand
            </li>
            <li>
              Legislation: UK, SG, and EU for now, more coming soon
            </li>
          </ul>
          <p>
            Case citations on webpages are highlighted and are hyperlinked to the full judgements.
          </p>
          <div><StaticImage src='../../images/on-hover.png' alt="highlight screenshot" /></div>
        </section>
        <section className="more-links">
          <Link to="/help">Get Help</Link>
        </section>
        <footer>
          <p>
            made by&nbsp;
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
