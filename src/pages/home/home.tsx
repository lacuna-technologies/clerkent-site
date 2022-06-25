import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import './home.scss'
import Installation from "./Installation"

const title = `Clerkent`
const description = `a browser extension that helps you quickly and conveniently search for case law`

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
              Search proprietary databases (e.g. LawNet, WestLaw, etc.) with one click if the case in question is not publicly-available
            </li>
          </ul>
          <div><StaticImage src='../../images/screenshot_sg.png' alt="screenshot" /></div>
          <p>Search for judgments and opinions across various Commonwealth jurisdictions</p> 
          <ul>
            <li>
              United Kingdom
            </li>
            <li>
              Singapore
            </li>
            <li>
              Hong Kong
            </li>
            <li>
              Canada
            </li>
            <li>
              Australia
            </li>
            <li>
              New Zealand
            </li>
            <li>
              Court of Justice of the European Union (CJEU)
            </li>
            <li>
              European Court of Human Rights (ECtHR)
            </li>
            <li>
              International Court of Justice (ICJ)
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
