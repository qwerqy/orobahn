import { Fragment } from "react";
import NextHead from "next/head";
import { string } from "prop-types";
import { observer, inject } from "mobx-react";

const defaultDescription = "Welcome to Amin Roslan's Online Portfolio & Blog";
const defaultOGURL = "https://aminroslan.com";
const defaultOGImage = "/static/ogbackground.png";

const Head = inject("store")(
  observer(props => (
    <Fragment>
      <NextHead>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-touch-icon.png"
        />
        >
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1b1c1d" />
        <title>{props.title || ""}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      </NextHead>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Roboto");
          @import url("https://fonts.googleapis.com/css?family=Raleway");
          @import url("https://fonts.googleapis.com/css?family=Merriweather");
          @import url("//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css");

          body {
            font-family: "Roboto", -apple-system, BlinkMacSystemFont,
              "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto,
              "Segoe UI", Arial, sans-serif !important;
            margin: 0;
            height: auto;
            width: 100%;
          }

          a:hover {
            color: #3494e6 !important;
          }

          .hero-intro {
            font-family: "Merriweather", "Times New Roman", serif;
          }

          .ui.toggle.checkbox .box:before,
          .ui.toggle.checkbox label:before {
            background: rgba(0, 0, 0, 0.5);
          }

          .ui.secondary.inverted.pointing.menu {
            border-width: 0;
          }

          .ui.breadcrumb a {
            color: #1b1c1d;
          }

          .ui.breadcrumb .active.section {
            color: #3494e6;
          }

          .ui.breadcrumb a:hover {
            color: #3494e6 !important;
          }

          .ui.header a {
            color: #3494e6;
          }

          .ui.header a:hover {
            color: #3494e6 !important;
          }

          .post-header {
            color: #3494e6 !important;
          }

          .post-container h1 h2 h3 h4 h5 {
            font-weight: 600;
            margin-bottom: 1em;
            margin-top: 1.5em;
          }

          .post-container ul ol {
            margin-bottom: 1.25em;
          }
          .post-container li {
            margin-bottom: 0.25em;
          }

          .post-container p {
            font-family: Georgia, Cambria, "Times New Roman", Times, serif;
            font-size: 1.25em;
            line-height: 1.58;
            margin-bottom: 1.25em;
            font-weight: 400;
            letter-spacing: -0.003em;
          }

          /* Responsive default image width */
          .post-container img {
            max-width: 100%;
            height: auto;
          }

          .post-container a {
            color: #3494e6;
            text-decoration: underline;
          }

          /* Responsive floating */
          @media only screen and (min-width: 720px) {
            .post-container .butter-float-left {
              float: left;
              margin: 0px 10px 10px 0px;
            }

            .post-container .butter-float-right {
              float: right;
              margin: 0px 0px 10px 10px;
            }
          }

          /* Image caption */
          .post-container figcaption {
            font-style: italic;
            text-align: center;
            color: #ccc;
          }

          .post-container p code {
            padding: 2px 4px;
            font-size: 90%;
            color: #c7254e;
            background-color: #f9f2f4;
            border-radius: 4px;
            font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
          }

          .post-container pre {
            overflow-x: scroll;
            display: block;
            padding: 1em;
            margin: 0 0 2em;
            font-size: 1em;
            line-height: 1.4;
            word-break: break-all;
            word-wrap: break-word;
            color: lightgrey;
            background-color: #232323;
            font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
          }

          .ui.grid > .row > .column > img {
            height: auto;
            max-width: 100px !important;
          }

          .hero-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-header {
            font-family: "Raleway", "Roboto", sans-serif !important;
            font-size: 4rem !important;
            font-weight: 300 !important;
            margin: 0 !important;
            letter-spacing: 8px !important;
            z-index: 100 !important;
          }

          .hero-caption {
            font-family: "Roboto", sans-serif !important;
            font-size: 2rem;
            font-weight: 300;
            letter-spacing: 4px !important;
            color: #fff;
            text-align: center;
          }

          .hero-para {
            font-size: 1.2rem;
            font-weight: 300;
            color: #fff;
          }

          .nav-item {
            margin: 0 !important;
          }

          .dropper-right {
            display: none !important;
          }

          .mobile-wrapper {
            display: none !important;
          }

          @media (min-width: 1024px) {
            .navbar-container {
              padding: 1em 15em !important;
            }
          }

          @media (min-width: 768px) {
            .navbar-container {
              padding: 1em 6em !important;
            }
          }

          @media (max-width: 550px) {
            .right-menu {
              display: none !important;
            }
            .dropper-right {
              display: block !important;
            }

            .mobile-wrapper {
              display: block !important;
            }

            .desktop-wrapper {
              display: none !important;
            }
          }

          @media (max-width: 430px) {
            .hero-intro {
              font-size: 0.9rem;
            }
            .nav-header {
              font-size: 0.8rem !important;
            }

            .nav-item {
              font-size: 0.8rem !important;
            }
            .hero-header {
              font-size: 2.5rem !important;
            }
            .hero-caption {
              font-size: 1.2rem !important;
            }
            .hero-para {
              display: none !important;
            }
          }
        `}
      </style>
    </Fragment>
  ))
);
Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
