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
      colors: {
        'clerkent-green': `#548235`,
        'clerkent-green-light': `#689848`,
      },
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
