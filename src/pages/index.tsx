import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Installation from "../components/installation"
import '../styles/styles.css'

const title = `Clerkent`
const description = `a browser extension that helps you quickly and conveniently search for case law`

const HomePage = () => {
  return (
    <Layout noHeader>
      <SEO title="Home" description={description} />
      <main className="flex flex-col items-center py-4">
        <StaticImage src='../images/clerkent.png' alt="Clerkent" id="logo" width={100} className="mx-auto" />
        <h1 className="text-3xl font-bold my-4">{title}</h1>
        <h2 className="text-xl font-medium">{description}</h2>
        <Installation />
        <section>
          <ul className="list-disc list-outside pl-4">
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
          <div className="w-full text-center">
            <StaticImage src='../images/screenshot_sg.png' alt="screenshot" className="my-6 text-center border border-dotted border-black" />
          </div>
          <p>Search for judgments and opinions across various Commonwealth jurisdictions</p> 
          <ul className="list-disc list-outside p-4">
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
          <div className="text-center w-full">
            <StaticImage src='../images/on-hover.png' alt="highlight screenshot" className="my-6 text-center border border-dotted border-black" />
          </div>
        </section>
        <section className="self-start py-4 px-2">
          <p>
            Pop your email address below if you'd like to receive an email once in a few weeks about the latest changes and upcoming features
          </p>
          <form
            className="my-2 flex items-center"
            action="https://www.getrevue.co/profile/clerkent/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <input className="p-2 w-full flex-auto border border-solid border-slate-600 rounded-l" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
            <input
              className="py-2 px-4 my-4 bg-slate-800 border border-solid border-slate-800 text-white rounded-r outline-none cursor-pointer"
              type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"
            />
          </form>
          <div className="text-sm my-4">
            By subscribing, you agree with Revue's&nbsp;
            <a target="_blank" href="https://www.getrevue.co/terms" rel="noreferrer">Terms of Service</a>
            &nbsp;and&nbsp;
            <a target="_blank" href="https://www.getrevue.co/privacy" rel="noreferrer">Privacy Policy</a>.&nbsp;
            Your email address will only be used for this purpose and will be deleted if you unsubscribe (which you can do at any time).
          </div>
        </section>
        <section className="p-4 flex md:flex-row flex-col md:gap-6 gap-4 text-center">
          <Link to="/help">Get Help</Link>
          <Link to="/feedback">Give Feedback</Link>
          <a href="https://www.getrevue.co/profile/clerkent">Latest Updates</a>
        </section>
        <footer className="flex flex-col items-center p-4 text-center">
          <p className="mb-2">
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
