import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Helpers from '../../lib/Helpers'
import './help.scss'
import SEO from '../../components/SEO'

const Question = ({ id = null, children, className = `` }) => {
  const [highlighted, setHighlighted] = useState(false)
  useEffect(() => {
    const anchor = document.URL.split(`#`).slice(-1)[0]
    setHighlighted(id === anchor)
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
  <main id="help-page">
    <SEO title="Help" />
    <h1>Help</h1>
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
)

export default HelpPage
