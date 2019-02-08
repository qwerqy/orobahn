const express = require('express')
const next = require('next')
const { parse } = require('url')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000
    
app.prepare()
.then(() => {
  const server = express()

  server.get('/blog', (req, res) => {
    return app.render(req, res, '/blog', { slug: req.params.slug })
  })

  server.get('/posts/:slug', (req, res) => {
    return app.render(req, res, '/post', { slug: req.params.slug })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})