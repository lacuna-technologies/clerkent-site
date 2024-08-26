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
      <meta name='title' property='og:title' content={`${title} | Clerkent`} />
      <meta name='description' property='og:description' content={description} />
      <meta name='type' property='og:type' content='webstite' />
      <meta name='image' property='og:image' content={imageURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="clerkent.huey.xyz" />
      <meta property="twitter:url" content="https://clerkent.huey.xyz/" />
      <meta name="twitter:title" content={`${title} | Clerkent`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />
      {children}
    </>
  )
}

export default SEO