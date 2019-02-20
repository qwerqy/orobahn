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
        style={{
          // background: "#3494e6" /* fallback for old browsers */,
          // // eslint-disable-next-line no-dupe-keys
          // background:
          //   "-webkit-linear-gradient(to right, #3494e6, #ec6ead)" /* Chrome 10-25, Safari 5.1-6 */,
          // // eslint-disable-next-line no-dupe-keys
          // background:
          //   "linear-gradient(to right, #3494e6, #ec6ead)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          padding: "5em 0em"
        }}
      >
        <Container text>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <Link prefetch href="/software-portfolio">
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
              <Grid.Column width={4}>
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
              <Grid.Column width={6}>
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
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
