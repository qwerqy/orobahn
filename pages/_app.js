import React from "react";
import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import { initializeStore } from "../store";
import { Provider } from "mobx-react";

Router.events.on("routeChangeStart", url => {
  // console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();

    appContext.ctx.mobxStore = mobxStore;

    let pageProps = await App.getInitialProps(appContext);

    return { ...pageProps, initialMobxState: mobxStore };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={this.mobxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
