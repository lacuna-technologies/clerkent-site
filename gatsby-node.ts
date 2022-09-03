import type { GatsbyNode } from 'gatsby'

export const onCreateWebpackConfig: GatsbyNode[`onCreateWebpackConfig`] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        /* eslint-disable sort-keys-fix/sort-keys-fix */
        react: `preact/compat`,
        "react-dom/test-utils": `preact/test-utils`,
        "react-dom": `preact/compat`,
        "react/jsx-runtime": `preact/jsx-runtime`,
        /* eslint-enable sort-keys-fix/sort-keys-fix */
      },
    },
  })
}