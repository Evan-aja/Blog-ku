const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = {
  output: 'standalone',
  basePath: process.env.BASE_URL || '',
  ...withNextra()
}
