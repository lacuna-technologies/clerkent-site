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
    extend: {
      fontFamily: {
        'mono': [
          `Iosevka`,
          `Ubuntu Mono`,
          `Fira Code`,
          `Jetbrains Mono`,
          `ui-monospace`,
          `SFMono-Regular`,
          `Menlo`,
          `monospace`,
        ],
      },
    },
  },
}
