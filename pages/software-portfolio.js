import { Component } from "react";
import { Header, Grid, List, Segment, Card, Image } from "semantic-ui-react";
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
import Moment from "react-moment";

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");
@inject("store")
@observer
class Software extends Component {
  static async getInitialProps() {
    const resp = await butter.content.retrieve(["work-experience"]);
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
    const workExp = this.props.data["work-experience"];
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
          <HeroPage store={store} contain>
            <Header as="h1">
              Full Stack Software Engineer
              {/* <Header.Subheader>Vase.ai</Header.Subheader> */}
            </Header>
            <p>
              I have always been a fan of Tech. Getting myself involved in
              software engineering is something I dream since I was in high
              school. I strive for perfection and functionality.
            </p>
            <p>
              My work mostly involves the whole ecosystem of a software. The
              front-end, the back-end and devOps. I have an eye in design
              language, and I work great in teams. I frequently use Javascript
              as my programming language for personal projects and work. I
              curate the deployment process from setting up CI all the way to
              deployment in a Docker container.
            </p>
            <br />
            <Grid stackable columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Header>Skills</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Leadership</Header>
                  <p>
                    Able to motivate & educate; Handled a sales team of 10
                    people for 2 years in a Health industry company.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Speech</Header>
                  <p>
                    Negotiation & Management; Been in numerous businesses
                    involved in making deals between two parties for 3 years.
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Software</Header>
                  <p>
                    1 year software experience in Web, Mobile & Automation
                    applications.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header>Technologies</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Languages</Header>
                  <p>Javascript, Node.js, HTML, CSS, MongoDB, Ruby, Python</p>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Frameworks</Header>
                  <p>
                    React, React Native, Vue, Next, Nuxt, Mobx, Vuex, Webpack,
                    Babel, Semantic UI, Bootstrap
                  </p>
                </Grid.Column>
                <Grid.Column>
                  <Header className="list-hero-text">Tools</Header>
                  <p>
                    Docker, CircleCI, Cypress, Mocha, Heroku, DO Droplet, AWS
                    Lambda, Serverless, Redis
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header>Education</Header>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Header className="list-hero-text">
                    Next Academy Coding Bootcamp
                  </Header>
                  <p>
                    Attended the Full Stack Web Development bootcamp that lasted
                    for 10 weeks. Studied development on a Web app using Ruby on
                    Rails, created 3 standalone projects needed to graduate the
                    class.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <br />
            <Header>Open Source Projects</Header>
            <Projects store={store} />
            <br />
            <Header>Work History</Header>
            <List>
              {Object.keys(workExp).map(i => {
                return (
                  <List.Item key={i}>
                    <Header className="list-hero-text">
                      {workExp[i].position}, {workExp[i].company}
                    </Header>
                    {workExp[i]["end-date"] !== "" ? (
                      <Header sub>
                        From{" "}
                        <Moment format="YYYY" withTitle>
                          {workExp[i]["start-date"]}
                        </Moment>{" "}
                        to{" "}
                        <Moment format="YYYY" withTitle>
                          {workExp[i]["end-date"]}
                        </Moment>{" "}
                      </Header>
                    ) : (
                      <Header sub>
                        From{" "}
                        <Moment format="YYYY" withTitle>
                          {workExp[i]["start-date"]}
                        </Moment>{" "}
                        to Present
                      </Header>
                    )}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: workExp[i].description
                      }}
                    />
                  </List.Item>
                );
              })}
            </List>
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    );
  }
}

export default Software;
