import { Component } from "react";
import { Header, Grid, List, Segment } from "semantic-ui-react";
import Head from "../components/head";
import HeroPage from "../components/heropage";
import Footer from "../components/footer";
import Wrapper from "../components/wrapper";
import Projects from "../components/projects";
import HeroHeader from "../components/heroheader";
import { gaPageTracking } from "../analytics";
import Butter from "buttercms";
import { inject, observer } from "mobx-react";
import Moment from "react-moment";

const butter = Butter("fd1efe394a6740dbfe76ff507508849f406c2aca");
@inject("store")
@observer
class Software extends Component {
  static async getInitialProps() {
    const resp = await butter.content.retrieve([
      "work",
      "education",
      "skills",
      "tech",
      "superDescription"
    ]);
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
    const { education, skills, tech, work, superDescription } = this.props.data;
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
            <Header style={{ color: "#3494e6" }} as="h1">
              {superDescription[0].heroText}
            </Header>
            <div
              dangerouslySetInnerHTML={{
                __html: superDescription[0].description
              }}
            />
            <br />
            <Grid stackable columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Header style={{ color: "#3494e6" }}>Skills</Header>
                </Grid.Column>
                {skills.map(skill => {
                  return (
                    <Grid.Column>
                      <Header
                        inverted={store.darkMode}
                        className="list-hero-text"
                      >
                        {skill.category}
                      </Header>
                      <p>{skill.description}</p>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header style={{ color: "#3494e6" }}>Technologies</Header>
                </Grid.Column>
                {tech.map(t => {
                  return (
                    <Grid.Column>
                      <Header
                        inverted={store.darkMode}
                        className="list-hero-text"
                      >
                        {t.category}
                      </Header>
                      <p>{t.description}</p>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header
                    inverted={store.darkMode}
                    style={{ color: "#3494e6" }}
                  >
                    Education
                  </Header>
                </Grid.Column>
                {education.map(edu => {
                  return (
                    <Grid.Column width={12}>
                      <Header
                        inverted={store.darkMode}
                        className="list-hero-text"
                      >
                        {edu.institution}
                      </Header>
                      <div
                        dangerouslySetInnerHTML={{ __html: edu.description }}
                      />
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            </Grid>
            <br />
            <Header style={{ color: "#3494e6" }}>Open Source Projects</Header>
            <Projects store={store} />
            <br />
            <Header style={{ color: "#3494e6" }}>Work History</Header>
            <List>
              {Object.keys(work).map(i => {
                return (
                  <List.Item key={i}>
                    <Segment basic inverted={store.darkMode}>
                      <Header
                        inverted={store.darkMode}
                        className="list-hero-text"
                      >
                        {work[i].position}, {work[i].company}
                      </Header>
                      {work[i]["end-date"] !== "" ? (
                        <Header inverted={store.darkMode} sub>
                          From{" "}
                          <Moment format="YYYY" withTitle>
                            {work[i]["start-date"]}
                          </Moment>{" "}
                          to{" "}
                          <Moment format="YYYY" withTitle>
                            {work[i]["end-date"]}
                          </Moment>{" "}
                        </Header>
                      ) : (
                        <Header inverted={store.darkMode} sub>
                          From{" "}
                          <Moment format="YYYY" withTitle>
                            {work[i]["start-date"]}
                          </Moment>{" "}
                          to Present
                        </Header>
                      )}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: work[i].description
                        }}
                      />
                    </Segment>
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
