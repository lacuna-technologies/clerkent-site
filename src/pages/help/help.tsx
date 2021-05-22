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
      <Question>
        <>
          <h2>What can I key into the search box?</h2>
          <p>
            You can search for either cases or legislation.
          </p>
          <p>
            For cases, use OSCOLA-style UK, CJEU, SG, HK, AU, or NZ case citations. For instance, [2020] UKSC 1, Case 120/78, and [2017] SASCFC 130 should all work.
          </p>
          <p>
            When searching for legislation, key in the provision number followed by the relevant statute, e.g. s125 LPA 1925, or s7 POFMA. Currently, only UK and SG legislation is supported, but EU legislation is coming soon.
          </p>
        </>
      </Question>
      <Question>
        <h2>A certain citation doesn't work or the result returned is wrong / could be better</h2>
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
