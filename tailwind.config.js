/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/components/**/*.{.ts,tsx}`,
    `./src/pages/**/*.{.ts,tsx}`,
  ],
  plugins: [
    `gatsby-plugin-postcss`,
  ],
  theme: {
    extend: {},
  },
}
