import React, { useEffect, useState }  from 'react'
import { Link } from 'gatsby'
import Helpers from '../lib/Helpers'
import SEO from '../components/SEO'
import Layout from '../components/layout'

const QA = ({ id = ``, children, className = `` }) => {
  const [highlighted, setHighlighted] = useState(false)
  useEffect(() => {
    const anchor = document.URL.split(`#`).slice(-1)[0]
    setHighlighted(id === anchor)
  }, [id, ...(typeof document === `undefined` ? [] : [document.URL])])

  const classNameResult = Helpers.classNames(
    [`my-4`, ...(highlighted ? [`highlighted`] : [])].join(` `),
    className,
  )
  return (
    <div className={classNameResult} id={id}>
      {children}
    </div>
  )
}

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl mt-8 mb-4">
    {children}
  </h2>
)

const Qn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl font-bold mt-6 mb-2">
    {children}
  </h3>
)

const AnsP: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="my-2">
    {children}
  </p>
)

const HelpPage = () => (
  <Layout>
    <main className="py-4">
      <h1 className="text-3xl font-bold mt-4 mb-10">Help</h1>

      <SectionHeader>Installation</SectionHeader>
      <QA id="edge-installation">
        <Qn>Can I install Clerkent on Microsoft Edge?</Qn>
        <AnsP>
          Yes, if you are running the new Chromium-based Edge (if you've updated your browser since Jan 2020, you probably are), you can install the Chrome version of the extension in Edge. Follow the <a href="https://www.howtogeek.com/411830/how-to-install-google-chrome-extensions-in-microsoft-edge/">instructions here</a> to enable installation of Chrome extensions, then <a href="https://chrome.google.com/webstore/detail/clerkent/ogjefnociaddjemkkajgmfpmhmpokmhj">install Clerkent from the Chrome Web Store</a>.
        </AnsP>
      </QA>

      <SectionHeader>Usage</SectionHeader>
      <QA>
        <Qn>What can I key into the search box?</Qn>
        <AnsP>
          You can search for either cases or legislation.
        </AnsP>
        <AnsP>
          For cases, use OSCOLA-style UK, CJEU, SG, HK, AU, or NZ case citations, the case name, or the name of the parties. Any of the following should work: [2020] UKSC 1, Case 120/78, [2017] SASCFC 130, "Denka Advantech", "Donoghue v Stevenson", etc.
        </AnsP>
      </QA>
      <QA>
        <Qn>I have an institutional login for a proprietary database (e.g. LawNet, WestLaw, Lexis, etc.)</Qn>
        <AnsP>
          Please specify your institutional affiliation in the Options (bottom-left of the popup). Clerkent will then redirect you to your institutional login page when accessing proprietary databases.
        </AnsP>
      </QA>
      <QA>
        <Qn>The result returned for a certain query is wrong / could be better</Qn>
        <AnsP>
          Thank you! Please <Link to="#contact">let me know</Link>. Do specify which citation isn't working and what result is being returned.
        </AnsP>
      </QA>
      <QA>
        <Qn>I found a bug / want to request a feature / have a suggestion</Qn>
        <AnsP>
          Thank you! Please <Link to="#contact">contact me</Link>. Let me know the steps needed and browser to be used to reproduce the bug / how your suggestion or feature should work.
        </AnsP>
      </QA>
      <QA>
        <Qn>Case citations on a certain website aren't being highlighted</Qn>
        <AnsP>
          Clerkent currently only activates on certain sites. If you <Link to="#contact">send me</Link> the URL to the site (stripped of anything too personal), I'll add it to the list and Clerkent will highlight citations on that site.
        </AnsP>
      </QA>

      <SectionHeader>Privacy</SectionHeader>
      <QA>
        <Qn>Are searches tracked / is there telemetry / what data is collected?</Qn>
        <AnsP>
          Your search queries are used solely to perform the caselaw / legislation search in question. They are not logged or otherwise stored by Clerkent (although some query data may be stored by your browser or by the external 3rd-party databases queried by Clerkent).
        </AnsP>
        <AnsP>
          Clerkent does not otherwise track you in any way. No telemetry or analytics data is collected by Clerkent. 
        </AnsP>
      </QA>

      <SectionHeader>Contact Information</SectionHeader>
      <QA id="contact">
        <Qn>How can I contact you?</Qn>
        <AnsP>
          You can contact me via <a href="mailto:clerkent@huey.xyz">email</a> or <a href="https://t.me/hueyy">Telegram</a>. If you want to stay anonymous, you can use <Link to="/feedback">this form</Link>.
        </AnsP>
      </QA>
    </main>
  </Layout>
)

export default HelpPage

export const Head = () => (
  <SEO title="Help" />
)