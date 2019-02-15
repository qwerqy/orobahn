import { Component } from "react";
import { Card, Header, Grid, List, Segment } from "semantic-ui-react";
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

const skillset = [
  {
    header: "Core",
    items: ["Node.js", "Ruby"]
  },
  {
    header: "Front End",
    items: [
      "React.js",
      "React Native",
      "Vue.js",
      "Javascript (Common & ES6+)",
      "jQuery",
      "HTML",
      "CSS"
    ]
  },
  {
    header: "Back End",
    items: ["Express", "Koa", "Ruby On Rails"]
  },
  {
    header: "Database",
    items: ["MongoDB", "Postgresql", "Firestore"]
  },
  {
    header: "Frameworks",
    items: ["Bootstrap", "Semantic UI", "Element UI", "Carbon UI"]
  },
  {
    header: "Deployment & Integration",
    items: [
      "Docker",
      "Docker Compose",
      "Traefik",
      "Drone",
      "Cypress",
      "Capybara",
      "CircleCI"
    ]
  },
  {
    header: "Cloud Platform",
    items: [
      "DigitalOcean Droplet",
      "Heroku",
      "Now.sh",
      "Netlify",
      "AWS ECS/EC2"
    ]
  }
];
class Software extends Component {
  static async getInitialProps() {
    const resp = await butter.post.list({
      page: 1,
      page_size: 10,
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
                    {/* <Segment></Segment>
                    <Segment>Bottom</Segment> */}
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Segment> */}
            {/* <Grid stackable doubling stretched columns={skillset.length}>
              <Grid.Row>
                {skillset.map((list, index) => {
                  return (
                    <Grid.Column style={{ paddingBottom: "1rem" }} key={index}>
                      <Header as="h4" style={{ letterSpacing: "2px" }}>
                        {list.header}
                      </Header>
                      <List bulleted>
                        {list.items.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            </Grid> */}
            {/* </Segment> */}
          </HeroPage>
          <HeroPage
            size="half"
            title="projects showcase"
            sub="Showcasing my finished projects some of which are live."
          >
            {projects.map((project, i) => {
              return (
                <Segment key={i}>
                  <Header>
                    <Link
                      prefetch
                      href={`/post?title=${project.slug}`}
                      as={`/posts/${project.slug}`}
                    >
                      <a
                        onClick={() =>
                          gaUserTracking(
                            "Software Portfolio",
                            `Clicked ${project.slug} on Projects Showcase`
                          )
                        }
                      >
                        {project.title}
                      </a>
                    </Link>
                    <Header.Subheader>
                      {project.meta_description}
                    </Header.Subheader>
                  </Header>
                </Segment>
              );
            })}
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
