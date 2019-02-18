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

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");
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
    return (
      <div>
        <Head
          title="Software Portfolio"
          description="Amin Roslan's Software Portfolio"
          url="https://aminroslan.com/software-portfolio"
        />
        <Wrapper dark {...this.props}>
          <HeroHeader title="software portfolio." />
          <HeroPage
            title="skillset"
            size="half"
            sub="The skills I've acquired throughout my career in tech."
          >
            <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <Header textAlign="center">Front End</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment>React & Vue</Segment>
                    <Segment>React Native</Segment>
                    <Segment>Javascript (Vanilla & ES6+)</Segment>
                    <Segment>
                      CSS Frameworks such as Semantic UI, Bootstrap, etc.
                    </Segment>
                    <Segment>HTML & CSS</Segment>
                  </Segment.Group>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Header textAlign="center">Back End</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment>NodeJS such as Express & Koa</Segment>
                    <Segment>Ruby such as Rails & Sinatra</Segment>
                    <Segment>
                      Cloud database such as MongoDB Atlas & Firestore. Local
                      database such as Postgresql
                    </Segment>
                    <Segment>
                      Deployments to Heroku, Now.sh, Netlify, etc
                    </Segment>
                    <Segment>Server Side Rendering</Segment>
                  </Segment.Group>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Header textAlign="center">Dev Ops</Header>
                  </Segment>
                  <Segment.Group>
                    <Segment>Docker, Docker Compose, Docker Machine</Segment>
                    <Segment>
                      Traefik, Nginx for reverse proxy & LetsEncrypt for SSL
                      cert
                    </Segment>
                    <Segment>
                      VPS such as DigitalOcean Droplet & AWS Lightsail
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </HeroPage>
          <HeroPage
            size="half"
            title="projects showcase"
            sub="Showcasing my finished projects some of which are live."
          >
            <Card.Group>
              {projects.map((project, i) => {
                return (
                  <Card>
                    <Image src={project.featured_image} />
                    <Card.Content>
                      <Link
                        prefetch
                        href={`/post?title=${project.slug}`}
                        as={`/posts/${project.slug}`}
                      >
                        <Card.Header
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
                      <Card.Meta>{project.meta_description}</Card.Meta>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </HeroPage>
          <HeroPage
            title="personal projects"
            sub="Project repos from my github which are public."
          >
            <Projects />
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default Software;
