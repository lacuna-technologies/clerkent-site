import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  plugins: [
    {
      options: {
        defaults: {
          formats: [`avif`, `webp`],
          placeholder: `blurred`,
        },
      },
      resolve: `gatsby-plugin-sharp`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.huey.xyz',
        siteUrl: 'https://clerkent.huey.xyz',
        cookieDomain: '*.clerkent.huey.xyz',
      }
    },
    {
      options: {
        icon: `./src/images/clerkent.png`,
        name: `Clerkent`,
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    title: `Clerkent`,
  },
}

export default config