import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'standalone',
  basePath: process.env.BASE_URL || '',
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.jsx'
    }
  }
})
