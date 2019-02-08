const Butter = require('buttercms');
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
  },
  async exportPathMap () {
    const butter = Butter(process.env.BUTTERCMS_API)
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await butter.post.list({page: 1, page_size: 10})
    const posts = response.data

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = posts.data.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/posts/${post.slug}`]: {
            page: '/post',
            query: { slug: post.slug }
          }
        }),
      {}
    )
    return pages
    // // combine the map of post pages with the home
    // return Object.assign({}, pages, {
    //   '/posts/:slug': { page: '/post' }
    // })
  }
})