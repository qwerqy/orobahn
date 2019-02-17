import { Component, Fragment } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import {
  Segment,
  Container,
  Menu,
  Icon,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { gaUserTracking } from "../analytics";

import "../static/nav.css";

const links = [
  { label: "blog", href: "/blog" },
  { label: "software portfolio", href: "/software-portfolio" }
  // { label: "gaming", href: "/gaming" }
];

class DesktopWrapper extends Component {
  state = {
    fixedNav: false
  };

  getPosition = () => {
    const { fixedNav } = this.state;
    const { solid } = this.props;
    if (solid) {
      return "relative";
    } else if (fixedNav) {
      return "fixed";
    } else {
      return "absolute";
    }
  };

  getBackgroundColor = () => {
    const { fixedNav } = this.state;
    const { solid } = this.props;

    if (fixedNav) {
      return "white";
    } else if (solid) {
      return "#1b1c1d";
    } else {
      return "transparent";
    }
  };

  pathnameCleaner = () => {
    let result = this.props.router.pathname;
    if (this.props.router.pathname.includes("-")) {
      result = result.replace("-", " ");
    }
    result = result.replace("/", "");

    return result;
  };

  render() {
    const { dark, router } = this.props;
    const { fixedNav } = this.state;
    const pathname = router.pathname ? this.pathnameCleaner() : "";
    const styles = {
      segment: {
        backgroundColor: this.getBackgroundColor(),
        border: 0,
        position: this.getPosition(),
        zIndex: "100",
        margin: 0,
        boxShadow: fixedNav ? "0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "",
        width: "100vw",
        top: 0
      }
    };

    return (
      <div className="desktop-wrapper">
        <Visibility
          once={false}
          onBottomPassed={() => this.setState({ fixedNav: true })}
          onBottomPassedReverse={() => this.setState({ fixedNav: false })}
        >
          {/* <Transition visible={} animation="fade down" duration={500}> */}
          <Segment inverted vertical textAlign="center" style={styles.segment}>
            <Container text>
              <Menu
                inverted={dark && !fixedNav}
                pointing
                secondary
                style={{ borderBottom: 0 }}
              >
                <Link prefetch href="/">
                  <Menu.Item
                    as="a"
                    className="nav-header"
                    style={{ letterSpacing: "3px" }}
                    onClick={() =>
                      gaUserTracking("Nav", "Clicked Nav Header AMINROSLAN")
                    }
                    header
                  >
                    AMIN ROSLAN
                  </Menu.Item>
                </Link>
                <Menu.Menu className="right-menu" position="right">
                  {Object.keys(links).map(i => {
                    return (
                      <Link prefetch key={i} href={links[i].href}>
                        <Menu.Item
                          as="a"
                          className="nav-item"
                          key={i}
                          name={links[i].label}
                          active={links[i].label === pathname}
                          onClick={() =>
                            gaUserTracking("Nav", `Clicked ${links[i].label}`)
                          }
                          position={links[i].position}
                        />
                      </Link>
                    );
                  })}
                </Menu.Menu>
                <Menu.Item
                  className="dropper-right"
                  position="right"
                  onClick={this.handleClickToToggle}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {/* </Transition> */}
        </Visibility>
        {this.props.children}
      </div>
    );
  }
}

class MobileWrapper extends Component {
  state = {
    visible: false
  };

  getPosition = () => {
    const { solid } = this.props;
    if (solid) {
      return "relative";
    } else {
      return "absolute";
    }
  };

  getBackgroundColor = () => {
    const { solid } = this.props;

    if (solid) {
      return "#1b1c1d";
    } else {
      return "transparent";
    }
  };

  handleClickToToggle = () => {
    gaUserTracking("Nav", "Open Sidebar");
    this.setState({ visible: true });
  };

  handleSidebarHide = () => this.setState({ visible: false });

  pathnameCleaner = () => {
    let result = this.props.router.pathname;
    if (this.props.router.pathname.includes("-")) {
      result = result.replace("-", " ");
    }

    result.replace("/", "");

    return result;
  };
  render() {
    const { visible } = this.state;
    const pathname = this.pathnameCleaner();

    const styles = {
      segment: {
        backgroundColor: this.getBackgroundColor(),
        border: 0,
        position: this.getPosition(),
        zIndex: "100",
        margin: 0,
        width: "100%",
        top: 0
      },
      sidebarItem: {
        padding: "20px 10px",
        letterSpacing: "3px",
        lineHeight: 1.5
      }
    };

    return (
      <Sidebar.Pushable className="mobile-wrapper">
        <Sidebar
          as={Menu}
          style={{ padding: "0px 5px" }}
          animation="overlay"
          icon="labeled"
          inverted
          direction="right"
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item
            style={styles.sidebarItem}
            onClick={() => this.setState({ visible: false })}
            header
          >
            <Icon name="angle right" />
          </Menu.Item>
          {Object.keys(links).map(i => {
            return (
              <Link prefetch key={i} href={links[i].href}>
                <Menu.Item
                  as="a"
                  style={styles.sidebarItem}
                  key={i}
                  name={links[i].label}
                  active={
                    links[i].label === pathname ||
                    links[i].label.includes(pathname)
                  }
                  onClick={() =>
                    gaUserTracking("Nav", `Clicked ${links[i].label}`)
                  }
                  position={links[i].position}
                />
              </Link>
            );
          })}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment inverted vertical textAlign="center" style={styles.segment}>
            <Container text>
              <Menu inverted pointing secondary style={{ borderBottom: 0 }}>
                <Link prefetch href="/">
                  <Menu.Item
                    as="a"
                    onClick={() =>
                      gaUserTracking("Nav", `Clicked Nav header AMINROSLAN`)
                    }
                    className="nav-header"
                    style={{ letterSpacing: "3px" }}
                    header
                  >
                    AMIN ROSLAN
                  </Menu.Item>
                </Link>
                <Menu.Item
                  className="dropper-right"
                  position="right"
                  onClick={this.handleClickToToggle}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <DesktopWrapper {...this.props}>{this.props.children}</DesktopWrapper>
        <MobileWrapper {...this.props}>{this.props.children}</MobileWrapper>
      </Fragment>
    );
  }
}

export default withRouter(Wrapper);
