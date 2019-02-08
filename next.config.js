const withCSS = require('@zeit/next-css')
const client = require('./client')

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
  },
  exportPathMap: async function (defaultPathMap) {
  
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "post"].slug.current')
      .then(data =>
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/posts/${slug}`]: { page: '/post', query: { slug } }
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  }
})