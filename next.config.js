require('dotenv').config()

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = {
  publicRuntimeConfig: {
    BUTTERCMS_API: process.env.BUTTERCMS_API
  }
}