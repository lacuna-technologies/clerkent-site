import React from 'react'

const imageURL = `https://clerkent.huey.xyz/og-image.png`

const SEO = ({
  description = ``,
  title,
  children = null,
}) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{`${title} | Clerkent`}</title>
      <meta name='title' property='og:title' content={title} />
      <meta name='description' property='og:description' content={description} />
      <meta name='type' property='og:type' content='webstite' />
      <meta name='image' property='og:image' content={imageURL} />
      <script data-goatcounter="https://clerkent.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
      {children}
    </>
  )
}

export default SEO