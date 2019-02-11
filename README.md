# This is the source code for my personal online portfolio site on [aminroslan.com](https://aminroslan.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5c001348-2328-4811-b882-16abe77653e8/deploy-status)](https://app.netlify.com/sites/blissful-heisenberg-410fe0/deploys)

## Tech Stack

- I am using [Next.js](https://nextjs.org) with a custom Express server to develop the site.
- I use [ButterCMS](https://buttercms.com) as the CMS especially for its blog engine.
- I deploy the site on [Netlify](https://netlify.com). I use `next export` to export my site content to static html.
- For any future updates on the blog, I use ButterCMS built in webhook to send an outgoing signal to Netlify to trigger a rebuild of the static pages.

Any questions feel free to tweet/dm me in Twitter at [@qwerqy_dev](https://twitter.com/qwerqy_dev)

## Start local production build via Docker

1. Run `docker build --tag orobahn`.
2. Run `docker run -p 8080:3000`.
3. Visit `localhost:8080`.

### TODO

[ ] Create Unit Testing with Cypress.
[ ] Add Gaming Profile.
[ ] Add Freelance Work page.
[ ] Add Contact Me page.
