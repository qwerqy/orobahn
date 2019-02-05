const withCSS = require('@zeit/next-css')
require('dotenv').config()

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  publicRuntimeConfig: {
    BUTTERCMS_API: process.env.BUTTERCMS_API
  }
})