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