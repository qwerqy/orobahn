import { Component } from "react";
import { Header, Grid, Segment, Card, Image } from "semantic-ui-react";
import Link from "next/link";
import Head from "../components/head";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";
import Projects from "../components/projects";
import HeroHeader from "../components/heroheader";
import { gaPageTracking, gaUserTracking } from "../analytics";
import Butter from "buttercms";
import { inject, observer } from "mobx-react";

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");
@inject("store")
@observer
class Software extends Component {
  static async getInitialProps() {
    const resp = await butter.post.list({
      category_slug: "projects"
    });
    return resp.data;
  }

  state = {
    showNav: false,
    width: 0
  };
  showFixedMenu = () => {
    this.setState({ showNav: true });
  };

  componentDidMount() {
    gaPageTracking("/software-portfolio");
  }

  render() {
    const projects = this.props.data;
    const { store } = this.props;
    return (
      <div>
        <Head
          title="Amin Roslan - Software Portfolio"
          description="Amin Roslan's Software Portfolio"
          url="https://aminroslan.com/software-portfolio"
        />
        <Wrapper store={store} {...this.props}>
          <HeroHeader store={store} title="Software Portfolio." />
          <HeroPage
            store={store}
            contain
            title="skillset"
            size="half"
            sub="The skills I've acquired throughout my career in tech."
          >
            <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Segment
                    style={{
                      background: store.darkMode ? "#232323" : "#fff",
                      webkitBoxShadow: store.darkMode
                        ? "0 1px 3px 0 black"
                        : "0 1px 3px 0 #d4d4d5"
                    }}
                    inverted={store.darkMode}
                  >
                    <Header textAlign="center">Front End</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      React & Vue
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      React Native
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Javascript (Vanilla & ES6+)
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      CSS Frameworks such as Semantic UI, Bootstrap, etc.
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      HTML & CSS
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
                <Grid.Column>
                  <Segment
                    style={{
                      background: store.darkMode ? "#232323" : "#fff",
                      webkitBoxShadow: store.darkMode
                        ? "0 1px 3px 0 black"
                        : "0 1px 3px 0 #d4d4d5"
                    }}
                    inverted={store.darkMode}
                  >
                    <Header textAlign="center">Back End</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      NodeJS such as Express & Koa
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Ruby such as Rails & Sinatra
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Cloud database such as MongoDB Atlas & Firestore. Local
                      database such as Postgresql
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Deployments to Heroku, Now.sh, Netlify, etc
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Server Side Rendering
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
                <Grid.Column>
                  <Segment
                    style={{
                      background: store.darkMode ? "#232323" : "#fff",
                      webkitBoxShadow: store.darkMode
                        ? "0 1px 3px 0 black"
                        : "0 1px 3px 0 #d4d4d5"
                    }}
                    inverted={store.darkMode}
                  >
                    <Header textAlign="center">Dev Ops</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Docker, Docker Compose, Docker Machine
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      Traefik, Nginx for reverse proxy & LetsEncrypt for SSL
                      cert
                    </Segment>
                    <Segment
                      style={{
                        background: store.darkMode ? "#232323" : "#fff",
                        webkitBoxShadow: store.darkMode
                          ? "0 1px 3px 0 black"
                          : "0 1px 3px 0 #d4d4d5"
                      }}
                      inverted={store.darkMode}
                    >
                      VPS such as DigitalOcean Droplet & AWS Lightsail
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </HeroPage>
          <HeroPage
            store={store}
            contain
            size="half"
            title="projects showcase"
            sub="Showcasing my finished projects some of which are live."
          >
            <br />
            <Card.Group doubling stackable itemsPerRow={3}>
              {projects.map((project, i) => {
                return (
                  <Card
                    style={{
                      backgroundColor: store.darkMode ? "#232323" : "#fff",
                      webkitBoxShadow: store.darkMode
                        ? "0 1px 3px 0 black"
                        : "0 1px 3px 0 #d4d4d5"
                    }}
                    key={i}
                  >
                    <Image
                      alt="project featured image"
                      src={project.featured_image}
                    />
                    <Card.Content>
                      <Link
                        prefetch
                        href={`/post?title=${project.slug}`}
                        as={`/posts/${project.slug}`}
                      >
                        <Card.Header
                          style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                          as="a"
                          onClick={() =>
                            gaUserTracking(
                              "Software Portfolio",
                              `Clicked ${project.slug} on Projects Showcase`
                            )
                          }
                        >
                          {project.title}
                        </Card.Header>
                      </Link>
                      <Card.Meta
                        style={{
                          color: store.darkMode ? "darkgrey" : "#1b1c1d"
                        }}
                      >
                        {project.meta_description}
                      </Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </HeroPage>
          <HeroPage
            store={store}
            contain
            title="personal projects"
            sub="Project repos from my github which are public."
          >
            <Projects store={store} />
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default Software;
