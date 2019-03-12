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
