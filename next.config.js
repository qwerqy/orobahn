const Butter = require("buttercms");
const withCSS = require("@zeit/next-css");

require("dotenv").config();

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
  // async exportPathMap() {
  //   const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");
  //   // we fetch our list of posts, this allow us to dynamically generate the exported pages
  //   // will need to modify this if page gets more posts
  //   const response = await butter.post.list({ page: 1, page_size: 10 });
  //   const posts = response.data;

  //   // tranform the list of posts into a map of pages with the pathname `/post/:id`
  //   const pages = posts.data.reduce(
  //     (pages, post) =>
  //       Object.assign({}, pages, {
  //         [`/post/${post.slug}`]: {
  //           page: "/post",
  //           query: { title: post.slug }
  //         }
  //       }),
  //     {}
  //   );
  //   // Combine pages with other pages in project.
  //   return Object.assign({}, pages, {
  //     "/": { page: "/" },
  //     "/blog": { page: "/blog" },
  //     "/software-portfolio": { page: "/software-portfolio" }
  //   });
  // }
});
