import React from 'react'
import { Helmet } from 'react-helmet'
import ClerkentLogo from '../images/clerkent-dark.png'

const imageURL = `https://clerkent.huey.xyz${ClerkentLogo}`

const SEO = ({
  description = ``,
  lang = `en`,
  title,
}) => {
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | Clerkent`}
      meta={[
        {content: title, property: `og:title`},
        {content: description, name: `description`},
        {content: `website`, property: `og:type`},
        {content: imageURL, property: `og:image`},
        {content: `summary_large_image`, name: `twitter:card`},
        {content: title, name: `twitter:title`},
        {content: description, name: `twitter:description`},
        {content: imageURL, name: `twitter:image`},
      ]}
    >
      <script data-goatcounter="https://clerkent.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    </Helmet>
  )
}

export default SEO