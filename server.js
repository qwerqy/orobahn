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

  server.post('/webhook-receiver', (req, res) => {
    console.log('a post has been modified')
    app
      .prepare()
      .then(() => {
        console.log('app refreshed')
        res.end()
      })
      .catch((e) => {
        res.status(500).end()
      })
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