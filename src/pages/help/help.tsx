import React from 'react'
import './help.scss'

const HelpPage = () => (
  <main id="help-page">
    <h1>Help</h1>
    <div className="question">
      <h2>A certain citation doesn't work / I found a bug / want to request a feature / have a suggestion</h2>
      <p>Thank you! Please send an email to <a href="mailto:clerkent@huey.xyz">clerkent@huey.xyz</a>. Let me know which citation isn't working / the steps needed and browser to be used to reproduce the bug / etc. </p>
    </div>
  </main>
)

export default HelpPage