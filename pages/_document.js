import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
