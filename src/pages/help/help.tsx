import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Helpers from '../../lib/Helpers'
import './help.scss'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Question = ({ id = null, children, className = `` }) => {
  const [highlighted, setHighlighted] = useState(false)
  useEffect(() => {
    const anchor = document.URL.split(`#`).slice(-1)[0]
    setHighlighted(id === anchor)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ...(typeof document === `undefined` ? [] : [document.URL])])

  const classNameResult = Helpers.classNames(
    [`question`, ...(highlighted ? [`highlighted`] : [])].join(` `),
    className,
  )
  return (
    <div className={classNameResult} id={id}>
      {children}
    </div>
  )
}

const HelpPage = () => (
  <Layout>
    <main id="help-page">
      <SEO title="Help" />
      <h1>Help</h1>

      <h2>Installation</h2>
      <Question id="edge-installation">
        <h2>Can I install Clerkent on Microsoft Edge?</h2>
        <p>
          Yes, if you are running the new Chromium-based Edge (if you've updated your browser since Jan 2020, you probably are), you can install the Chrome version of the extension in Edge. Follow the <a href="https://www.howtogeek.com/411830/how-to-install-google-chrome-extensions-in-microsoft-edge/">instructions here</a> to enable installation of Chrome extensions, then <a href="https://chrome.google.com/webstore/detail/clerkent/ogjefnociaddjemkkajgmfpmhmpokmhj">install Clerkent from the Chrome Web Store</a>.
        </p>
      </Question>

      <h2>Usage</h2>
      <Question>
        <h2>What can I key into the search box?</h2>
        <p>
          You can search for either cases or legislation.
        </p>
        <p>
          For cases, use OSCOLA-style UK, CJEU, SG, HK, AU, or NZ case citations, the case name, or the name of the parties. Any of the following should work: [2020] UKSC 1, Case 120/78, [2017] SASCFC 130, "Denka Advantech", "Donoghue v Stevenson", etc.
        </p>
        <p>
          When searching for legislation, key in the provision number followed by the relevant statute, e.g. s125 LPA 1925, s7 POFMA, or GDPR. Currently, only UK, SG, and EU legislation is supported.
        </p>
      </Question>
      <Question>
        <h2>I have an institutional login for a proprietary database (e.g. LawNet, WestLaw, Lexis, etc.)</h2>
        <p>
          Please specify your institutional affiliation in the Options (bottom-left of the popup). Clerkent will then redirect you to your institutional login page when accessing proprietary databases.
        </p>
      </Question>
      <Question>
        <h2>The result returned for a certain query is wrong / could be better</h2>
        <p>
          Thank you! Please <Link to="#contact">let me know</Link>. Do specify which citation isn't working and what result is being returned.
        </p>
      </Question>
      <Question>
        <h2>I found a bug / want to request a feature / have a suggestion</h2>
        <p>
          Thank you! Please <Link to="#contact">contact me</Link>. Let me know the steps needed and browser to be used to reproduce the bug / how your suggestion or feature should work.
        </p>
      </Question>
      <Question>
        <h2>Case citations on a certain website aren't being highlighted</h2>
        <p>Clerkent currently only activates on certain sites. If you <Link to="#contact">send me</Link> the URL to the site (stripped of anything too personal), I'll add it to the list and Clerkent will highlight citations on that site.</p>
      </Question>

      <h2>Privacy</h2>
      <Question>
        <h2>Are searches tracked / is there telemetry / what data is collected?</h2>
        <p>
          Your search queries are used solely to perform the caselaw / legislation search in question. They are not logged or otherwise stored by Clerkent (although some query data may be stored by your browser or by the external 3rd-party databases queried by Clerkent).
        </p>
        <p>
          Clerkent does not otherwise track you in any way. No telemetry or analytics data is collected by Clerkent. 
        </p>
      </Question>

      <h2>Contact Information</h2>
      <Question id="contact">
        <h2>How can I contact you?</h2>
        <p>
          You can contact me via <a href="mailto:clerkent@huey.xyz">email</a> or <a href="https://t.me/hueyy">Telegram</a>. If you want to stay anonymous, you can use <Link to="/feedback">this form</Link>.
        </p>
      </Question>
    </main>
  </Layout>
)

export default HelpPage
