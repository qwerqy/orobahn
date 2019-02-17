import { Component } from "react";
import Link from "next/link";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Icon,
  Image
} from "semantic-ui-react";

import { links } from "./helpers/index";
import { gaUserTracking } from "../analytics";

// TODO: anchor all links here.
class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ backgroundColor: "black", padding: "5em 0em" }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <Link prefetch href="/software">
                    <List.Item
                      as="a"
                      onClick={() =>
                        gaUserTracking("Footer", `Clicked Projects`)
                      }
                    >
                      Projects
                    </List.Item>
                  </Link>
                  <Link prefetch href="/contact">
                    <List.Item
                      as="a"
                      onClick={() =>
                        gaUserTracking("Footer", `Clicked Contact Me`)
                      }
                    >
                      Contact Me
                    </List.Item>
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item
                    as="a"
                    onClick={() =>
                      gaUserTracking("Footer", `Clicked Freelance Work`)
                    }
                  >
                    Freelance Work
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://docs.google.com/document/d/1YGuT2nN_RMYockL5b0A6rK02uw2ZsoiQF8iCWHoQMuE/edit?usp=sharing"
                    target="_blank"
                    rel="noopener"
                    onClick={() => gaUserTracking("Footer", `Clicked Resume`)}
                  >
                    Resume
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h4" inverted>
                  Social Media
                </Header>
                <List horizontal>
                  {links.map(link => {
                    return (
                      <List.Item key={link.icon}>
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href={link.link}
                          onClick={() =>
                            gaUserTracking(
                              "Footer",
                              `Clicked Social Media button: ${link.icon}`
                            )
                          }
                        >
                          <Icon size="large" name={link.icon} />
                        </a>
                      </List.Item>
                    );
                  })}
                </List>
                <Header as="h4" inverted>
                  Blog Engine by
                </Header>
                <a
                  href="https://buttercms.com"
                  target="_blank"
                  rel="noopener"
                  onClick={() => gaUserTracking("Footer", `Clicked ButterCMS`)}
                >
                  <Image
                    size="small"
                    src="/static/butter-w.png"
                    alt="ButterCMS Logo"
                  />
                </a>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>
                  Background Image by
                </Header>
                <a
                  style={{
                    backgroundColor: "#252525",
                    color: "white",
                    textDecoration: "none",
                    padding: "4px 6px",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',
                    fontSize: "12px",
                    fontWeight: "bold",
                    lineHeight: 1.2,
                    display: "inline-block",
                    borderRadius: "3px"
                  }}
                  href="https://unsplash.com/@adrienolichon?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download free do whatever you want high-resolution photos from Adrien Olichon"
                >
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: "12px",
                        width: "auto",
                        position: "relative",
                        verticalAlign: "middle",
                        top: "-2px",
                        fill: "white"
                      }}
                      viewBox="0 0 32 32"
                    >
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                    </svg>
                  </span>
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    Adrien Olichon
                  </span>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
