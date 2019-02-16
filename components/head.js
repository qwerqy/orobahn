import React, { Fragment } from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "Welcome to Amin Roslan's Online Portfolio & Blog";
const defaultOGURL = "https://aminroslan.com";
const defaultOGImage = "/static/ogbackground.png";

const Head = props => (
  <Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
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
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
      />
    </NextHead>
    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css?family=Raleway");

        body {
          font-family: "Roboto", -apple-system, BlinkMacSystemFont,
            "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto,
            "Segoe UI", Arial, sans-serif !important;
          margin: 0;
        }

        p code {
          padding: 2px 4px;
          font-size: 90%;
          color: #c7254e;
          background-color: #f9f2f4;
          border-radius: 4px;
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }

        pre {
          display: block;
          padding: 1em;
          margin: 0 0 2em;
          font-size: 1em;
          line-height: 1.4;
          word-break: break-all;
          word-wrap: break-word;
          color: #333333;
          background-color: #f5f5f5;
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }
      `}
    </style>
  </Fragment>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
