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
  ],
  siteMetadata: {
    title: `Clerkent`,
  },
}

export default config